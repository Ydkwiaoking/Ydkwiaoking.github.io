"use strict";
        
const { vec3 } = glMatrix;

var canvas, gl;
var points = [];
var numTimesToSubdivide = 0;
        
document.addEventListener('DOMContentLoaded', function() {
    const subdivisionInput = document.getElementById('subdivisionLevel');
    const generateBtn = document.getElementById('generateBtn');
           
    initWebGL();
    generateSierpinski();
            
    generateBtn.addEventListener('click', function() {
        const inputValue = parseInt(subdivisionInput.value);           
        if (isNaN(inputValue) || inputValue < 0 || inputValue > 8) {
            alert('请输入0到8之间的整数');
            return;
        }
                
        numTimesToSubdivide = inputValue;
        generateSierpinski();
    });
});
        
function initWebGL() {
    canvas = document.getElementById("gl-canvas");

    gl = canvas.getContext("webgl2");     
    if (!gl) {
        alert("WebGL isn't available");
        return;
    }

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
}
        
function generateSierpinski() {
    points = [];
            
	var u = vec3.fromValues( -1, -1,  0 );
	var v = vec3.fromValues( 0,  1,  0 );
	var w = vec3.fromValues( 1, -1,  0 );
           
    divideTriangle(u, v, w, numTimesToSubdivide);
            
    renderTriangles();
}
        
function triangle(a, b, c) {
    points.push(a[0], a[1], a[2]);
    points.push(b[0], b[1], b[2]);
    points.push(c[0], c[1], c[2]);
}
        
function divideTriangle(a, b, c, count) {
    if (count === 0) {
        triangle(a, b, c);
    } else {
		var ab = vec3.create();
		vec3.lerp( ab, a, b, 0.5 ); // ab=a*alpha+b*(1-alpha)
		var bc = vec3.create();
		vec3.lerp( bc, b, c, 0.5 );
		var ca = vec3.create();
		vec3.lerp( ca, c, a, 0.5 );

        divideTriangle(a, ab, ca, count - 1);
        divideTriangle(b, bc, ab, count - 1);
        divideTriangle(c, ca, bc, count - 1);
    }
}
        
function renderTriangles() {
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
	gl.drawArrays( gl.TRIANGLES, 0, points.length/3 );
}