"use strict";

var gl;
//var points;	原代码

window.onload = function init(){
	//原代码var canvas = document.getElementById( "triangle-canvas" );
	var canvas = document.getElementById( "class1-canvas" );
	gl = canvas.getContext("webgl2");
	if( !gl ){
		alert( "WebGL isn't available" );
	}

	/*	原代码
	// Three Vertices
	points = new Float32Array([
		-1.0, -1.0, 
		 0.0,  1.0, 
		 1.0, -1.0, 
	]);

	// Configure WebGL
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 0.0, 1.0, 1.0 );

	// Load shaders and initialize attribute buffers
	var program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );

	// Load the data into the GPU
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, points, gl.STATIC_DRAW );

	// Associate external shader variables with data buffer
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );

	render();
	*/

	//灰色背景板
	gl.clearColor(0.0,0.0,0.0,0.3);
	gl.clear(gl.COLOR_BUFFER_BIT);

	//任务a
	var points_a=new Float32Array([
		-1.0,-1.0,
		0.0,1.0,
		1.0,-1.0,
	]);
	gl.viewport(0,400,200,200);

	var program_a=initShaders(gl,"vertex-shader","fragmenta-shader");
	gl.useProgram(program_a);

	var bufferId_a=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,bufferId_a);
	gl.bufferData(gl.ARRAY_BUFFER,points_a,gl.STATIC_DRAW);

	var vPosition_a=gl.getAttribLocation(program_a,"vPosition");
	gl.vertexAttribPointer(vPosition_a,2,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(vPosition_a);

	gl.drawArrays(gl.TRIANGLES,0,3);


	//任务b
	var points_b=new Float32Array([
		0.0,-0.5,
        1.0,-0.5,
        1.0,0.5,
        1.0,0.5,
        0.0,0.5,
        0.0,-0.5,
	]);
	gl.viewport(250,400,200,200);

	var program_b=initShaders(gl,"vertex-shader","fragmentb-shader");
	gl.useProgram(program_b);

	var bufferId_b=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,bufferId_b);
	gl.bufferData(gl.ARRAY_BUFFER,points_b,gl.STATIC_DRAW);

	var vPosition_b=gl.getAttribLocation(program_b,"vPosition");
	gl.vertexAttribPointer(vPosition_b,2,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(vPosition_b);

	gl.drawArrays(gl.TRIANGLES,0,6);


	//任务c
	var points_c=new Float32Array([
		-1.0,-1.0,
		0.0,1.0,
		1.0,-1.0,
	]);
	gl.viewport(0,250,100,100);

	var program_c=initShaders(gl,"vertex-shader","fragmentc-shader");
	gl.useProgram(program_c);

	var bufferId_c=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,bufferId_c);
	gl.bufferData(gl.ARRAY_BUFFER,points_c,gl.STATIC_DRAW);

	var vPosition_c=gl.getAttribLocation(program_c,"vPosition");
	gl.vertexAttribPointer(vPosition_c,2,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(vPosition_c);

	gl.drawArrays(gl.TRIANGLES,0,3);

	points_c=new Float32Array([
        0.0,-0.5,
        1.0,-0.5,
        1.0,0.5,
        1.0,0.5,
        0.0,0.5,
        0.0,-0.5,
	]);
	gl.viewport(0,200,200,200);

	program_c=initShaders(gl,"vertex-shader","fragmentc-shader");
	gl.useProgram(program_c);

	bufferId_c=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,bufferId_c);
	gl.bufferData(gl.ARRAY_BUFFER,points_c,gl.STATIC_DRAW);

	vPosition_c=gl.getAttribLocation(program_c,"vPosition");
	gl.vertexAttribPointer(vPosition_c,2,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(vPosition_c);

	gl.drawArrays(gl.TRIANGLES,0,6);


	//任务d
	var points_d=new Float32Array([
		-1.0,-1.0,
		0.0,1.0,
		1.0,-1.0,
	]);
	gl.viewport(250,250,100,100);

	var program_d=initShaders(gl,"vertex-shader","fragmenta-shader");
	gl.useProgram(program_d);

	var bufferId_d=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,bufferId_d);
	gl.bufferData(gl.ARRAY_BUFFER,points_d,gl.STATIC_DRAW);

	var vPosition_d=gl.getAttribLocation(program_d,"vPosition");
	gl.vertexAttribPointer(vPosition_d,2,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(vPosition_d);

	gl.drawArrays(gl.TRIANGLES,0,3);

	points_d=new Float32Array([
        0.0,-0.5,
        1.0,-0.5,
        1.0,0.5,
        1.0,0.5,
        0.0,0.5,
        0.0,-0.5,
	]);
	gl.viewport(250,200,200,200);

	program_d=initShaders(gl,"vertex-shader","fragmentb-shader");
	gl.useProgram(program_d);

	bufferId_d=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,bufferId_d);
	gl.bufferData(gl.ARRAY_BUFFER,points_d,gl.STATIC_DRAW);

	vPosition_d=gl.getAttribLocation(program_d,"vPosition");
	gl.vertexAttribPointer(vPosition_d,2,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(vPosition_d);

	gl.drawArrays(gl.TRIANGLES,0,6);


	//任务e	
	var points_e=new Float32Array([
		-1.0,-1.0, 
		 1.0,-1.0, 
		 0.0,1.0, 
	]);

	var vertcolors=new Float32Array([
		1.0,0.0,0.0,
		0.0,1.0,0.0,
		0.0,0.0,1.0,
	]);
	gl.viewport(0,0,200,200);

	var program_e=initShaders(gl,"vertexe-shader","fragmente-shader");
	gl.useProgram(program_e);

	var bufferId_e=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,bufferId_e);
	gl.bufferData(gl.ARRAY_BUFFER,points_e,gl.STATIC_DRAW);

	var aPosition_e=gl.getAttribLocation(program_e,"aPosition");
	gl.vertexAttribPointer(aPosition_e,2,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(aPosition_e);

	var cbufferId_e=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,cbufferId_e);
	gl.bufferData(gl.ARRAY_BUFFER,vertcolors,gl.STATIC_DRAW);

	var aColor=gl.getAttribLocation(program_e,"aColor");
	gl.vertexAttribPointer(aColor,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(aColor);

	gl.drawArrays(gl.TRIANGLES,0,3);

}

/*	原代码
function render(){
	gl.clear( gl.COLOR_BUFFER_BIT );
	//gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
	gl.drawArrays( gl.TRIANGLES, 0, 3 );
	//gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}
*/