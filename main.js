var socket = require('socket.io-client')('http://localhost:4000/');

var duty1 = 150;
var duty2 = 150;
var duty3 = 150;
var duty4 = 150;
var duty5 = 150;

socket.on('m1_l', function(){
	if (duty1 < 220) {
		var l1 = duty1++;
		var l1 = duty1++;
		console.log(duty1 * 10000);
	}
});

socket.on('m1_r', function(){
	if (duty1 > 52) {
		var r1 = duty1--;
		var r1 = duty1--;
		console.log(duty1 * 10000);
	}
});

socket.on('m2_l', function(){
	if (duty2 < 220) {
		var l2 = duty2++;
		var l2 = duty2++;
		console.log(duty2 * 10000);
	}
});

socket.on('m2_r', function(){
	if (duty2 > 52) {
		var r2 = duty2--;
		var r2 = duty2--;
		console.log(duty2 * 10000);
	}
});

socket.on('m3_l', function(){
	if (duty3 < 220) {
		var l3 = duty3++;
		var l3 = duty3++;
		console.log(duty3 * 10000);
	}
});

socket.on('m3_r', function(){
	if (duty3 > 52) {
		var r3 = duty3--;
		var r3 = duty3--;
		console.log(duty3 * 10000);
	}
});

socket.on('m4_l', function(){
	if (duty4 < 220) {
		var l4 = duty4++;
		var l4 = duty4++;
		console.log(duty4 * 10000);
	}
});

socket.on('m4_r', function(){
	if (duty4 > 52) {
		var r4 = duty4--;
		var r4 = duty4--;
		console.log(duty4 * 10000);
	}
});

socket.on('m5_l', function(){
	if (duty5 < 220) {
		var l5 = duty5++;
		var l5 = duty5++;
		console.log(duty5 * 10000);
	}
});

socket.on('m5_r', function(){
	if (duty5 > 52) {
		var r5 = duty5--;
		var r5 = duty5--;
		console.log(duty5 * 10000);
	}
});
