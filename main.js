const fs = require('fs');
var socket = require('socket.io-client')('https://pro4team2.herokuapp.com/');

var duty1 = 150;
var duty2 = 150;
var duty3 = 150;
var duty4 = 150;
var duty5 = 150;

//P9.42
fs.writeFileSync("/sys/class/pwm/pwm-0:0/period", "20000000"); 	
fs.writeFileSync("/sys/class/pwm/pwm-0:0/enable", "1"); 	

//P9.16	
fs.writeFileSync("/sys/class/pwm/pwm-3:1/period", "5000000"); 
fs.writeFileSync("/sys/class/pwm/pwm-3:1/enable", "1"); 	

//P9.14 	
fs.writeFileSync("/sys/class/pwm/pwm-3:0/period", "5000000"); 	
fs.writeFileSync("/sys/class/pwm/pwm-3:0/enable", "1"); 

//P8.19	
fs.writeFileSync("/sys/class/pwm/pwm-6:0/period", "20000000"); 	
fs.writeFileSync("/sys/class/pwm/pwm-6:0/enable", "1"); 	 	

//P8.13	
fs.writeFileSync("/sys/class/pwm/pwm-6:1/period", "20000000"); 	
fs.writeFileSync("/sys/class/pwm/pwm-6:1/enable", "1");  	


//motor P8.13  left
socket.on('m1_l', function(){
	if (duty1 < 182) {
		var m1 = duty1++;
		var m1 = duty1++;
		var m1 = duty1*10000;
		console.log(m1);
		fs.writeFileSync("/sys/class/pwm/pwm-6:1/duty_cycle", m1);
	}
});

//motor P8.13  right
socket.on('m1_r', function(){
	if (duty1 > 58) {
		var m1 = duty1--;
		var m1 = duty1--;
		var m1 = duty1*10000;
		console.log(m1);
		fs.writeFileSync("/sys/class/pwm/pwm-6:1/duty_cycle", m1);
	}
});

//motor P9.14 left
socket.on('m2_l', function(){
	if (duty2 < 220) {
		var m2 = duty2++;
		var m2 = duty2++;
		var m2 = duty2*10000;
		console.log(m2);
		fs.writeFileSync("/sys/class/pwm/pwm-3:0/duty_cycle", m2);
	}
});

//motor P9.14 right
socket.on('m2_r', function(){
	if (duty2 > 52) {
		var m2 = duty2--;
		var m2 = duty2--;
		var m2 = duty2*10000;
		console.log(m2);
		fs.writeFileSync("/sys/class/pwm/pwm-3:0/duty_cycle", m2);
	}
});

//motor P9.42 up
socket.on('m3_l', function(){
	if (duty3 > 52) {
		var m3 = duty3--;
		var m3 = duty3--;
		var m3 = duty3*10000;
		console.log(m3);
		console.log(m3);
		fs.writeFileSync("/sys/class/pwm/pwm-0:0/duty_cycle", m3);
	}
});

//motor P9.42 down
socket.on('m3_r', function(){
	if (duty3 < 156) {
		var m3 = duty3++;
		var m3 = duty3++;
		var m3 = duty3*10000;
		console.log(m3);
		fs.writeFileSync("/sys/class/pwm/pwm-0:0/duty_cycle", m3);
	}
});

//motor P8.19 left
socket.on('m4_l', function(){
	if (duty4 < 220) {
		var m4 = duty4++;
		var m4 = duty4++;
		var m4 = duty4*10000;
		console.log(m4);
		fs.writeFileSync("/sys/class/pwm/pwm-6:0/duty_cycle", m4);
	}
});

//motor P8.19  right
socket.on('m4_r', function(){
	if (duty4 > 52) {
		var m4 = duty4--;
		var m4 = duty4--;
		var m4 = duty4*10000;
		console.log(m4);
		fs.writeFileSync("/sys/class/pwm/pwm-6:0/duty_cycle", m4);
	}
});

//motor P9.16  left
socket.on('m5_l', function(){
	if (duty5 < 220) {
		var m5 = duty5++;
		var m5 = duty5++;
		var m5 = duty5*10000;
		console.log(m5);
		fs.writeFileSync("/sys/class/pwm/pwm-3:1/duty_cycle", m5);
	}
});

//motor P9.16  right
socket.on('m5_r', function(){
	if (duty5 > 52) {
		var m5 = duty5--;
		var m5 = duty5--;
		var m5 = duty5*10000;
		console.log(m5);
		fs.writeFileSync("/sys/class/pwm/pwm-3:1/duty_cycle", m5);
	}
});
