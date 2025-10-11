"use strict";

const { vec3 } = glMatrix;

var gl,canvas;

var points = [];
var numTimesToSubdivide = 0;
var angle=0;

document.addEventListener('DOMContentLoaded', function() {
	const subdivisionInput = document.getElementById('subdivisionLevel');
	const subdivisionangle = document.getElementById('subdivisionangle');
    const generateBtn = document.getElementById('generateBtn');

    canvas = document.getElementById("gl-canvas");
    gl = canvas.getContext("webgl2");
    if (!gl) {
        alert("WebGL isn't available");
		return ;
    }	

	generateSierpinski();
	
	
	generateBtn.addEventListener('click', function() {
        const inputValue = parseInt(subdivisionInput.value);           
        if (isNaN(inputValue) || inputValue < 0 || inputValue > 8) {
            alert('请输入0到8之间的整数');
            return;
        }
		
		var inputangle = parseInt(subdivisionangle.value);
		inputangle=inputangle%360;
                
        numTimesToSubdivide = inputValue;
		angle=inputangle;
        generateSierpinski();
    });
});

function generateSierpinski() {
	gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
	
	points = [];
	
	var vertices = [
       Math.cos((90-angle)*Math.PI/180.0),Math.sin((90-angle)*Math.PI/180.0),0,
	   Math.cos((210-angle)*Math.PI/180.0),Math.sin((210-angle)*Math.PI/180.0),0,
	   Math.cos((330-angle)*Math.PI/180.0),Math.sin((330-angle)*Math.PI/180.0),0
    ];

    var u = vec3.fromValues( vertices[0], vertices[1], vertices[2] );
    var v = vec3.fromValues( vertices[3], vertices[4], vertices[5] );
    var w = vec3.fromValues( vertices[6], vertices[7], vertices[8] );

    divideTriangle( u, v, w, numTimesToSubdivide);

    render();
}

function tessellaTriangle(a, b, c) {
    points.push(a[0], a[1], a[2]);
    points.push(b[0], b[1], b[2]);
	
	points.push(b[0], b[1], b[2]);
    points.push(c[0], c[1], c[2]);
	
	points.push(c[0], c[1], c[2]);
	points.push(a[0], a[1], a[2]);
}

function divideTriangle(a, b, c, count) {
	if( count == 0 ){
		tessellaTriangle( a, b, c );
	}else{
		var ab = vec3.create();
		vec3.lerp( ab, a, b, 0.5 );
		var bc = vec3.create();
		vec3.lerp( bc, b, c, 0.5 );
		var ca = vec3.create();
		vec3.lerp( ca, c, a, 0.5 );

		divideTriangle( a, ab, ca, count-1 );
		divideTriangle( ab, b, bc, count-1 );
        divideTriangle( ca, bc, c, count-1 );
        divideTriangle( ab, bc, ca, count-1 );
	}

}

function render() {
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

	var program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );

	var vertexBuffer = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( points ), gl.STATIC_DRAW );

	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	
    gl.clear( gl.COLOR_BUFFER_BIT );
	gl.drawArrays( gl.LINES, 0, points.length/3 );
}