const fs = require('fs');
var socket = require('socket.io-client')('http://localhost:4000/');

var duty1 = 100;

socket.on('m1_l', function(){
    console.log("a");
    var y = duty1++;
    console.log(duty1);
	
});

socket.on('m1_r', function(){
    console.log("d");
    var y = duty1--;
    console.log(duty1);
});

socket.on('m2_l', function(){
    console.log("w");
});

socket.on('m2_r', function(){
    console.log("s");
});

socket.on('m3_l', function(){
    console.log("4");
});

socket.on('m3_r', function(){
    console.log("6");
});

socket.on('m4_l', function(){
    console.log("5");
});

socket.on('m4_r', function(){
    console.log("8");
});

socket.on('m5_l', function(){
    console.log("n");
});

socket.on('m5_r', function(){
    console.log("m");
});
