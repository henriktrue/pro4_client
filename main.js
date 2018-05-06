const fs = require('fs');
var socket = require('socket.io-client')('https://pro4team2.herokuapp.com/');

var duty1 = 150;
var duty2 = 150;
var duty3 = 150;
var duty4 = 150;
var duty5 = 150;

//fs.writeFileSync("config-pin P9.22 pwm");
//fs.writeFileSync("config-pin P9.21 pwm");
//fs.writeFileSync("config-pin P9.14 pwm");
//fs.writeFileSync("config-pin P8.19 pwm");
//fs.writeFileSync("config-pin P8.13 pwm");

//P9.22
fs.writeFileSync("/sys/class/pwm/pwmchip0/export", "0"); 
fs.writeFileSync("/sys/class/pwm/pwm-0:0/period", "20000000"); 	
fs.writeFileSync("/sys/class/pwm/pwm-0:0/polarity", "0"); 	

//P9.21
fs.writeFileSync("/sys/class/pwm/pwmchip1/export", "0"); 	
fs.writeFileSync("/sys/class/pwm/pwm-1:0/period", "20000000"); 	
fs.writeFileSync("/sys/class/pwm/pwm-1:0/polarity", "0"); 	

//P9.14
fs.writeFileSync("/sys/class/pwm/pwmchip3/export", "0"); 	
fs.writeFileSync("/sys/class/pwm/pwm-3:0/period", "20000000"); 	
fs.writeFileSync("/sys/class/pwm/pwm-3:0/polarity", "0"); 	

//P8.19
fs.writeFileSync("/sys/class/pwm/pwmchip5/export", "0"); 	
fs.writeFileSync("/sys/class/pwm/pwm-5:0/period", "20000000"); 	
fs.writeFileSync("/sys/class/pwm/pwm-5:0/polarity", "0"); 	

//P8.13
fs.writeFileSync("/sys/class/pwm/pwmchip6/export", "0"); 	
fs.writeFileSync("/sys/class/pwm/pwm-6:0/period", "20000000"); 	
fs.writeFileSync("/sys/class/pwm/pwm-6:0/polarity", "0"); 	


//motor1 left
socket.on('m1_l', function(){
	if (duty1 < 220) {
		var m1 = duty1++;
		var m1 = duty1++;
		var m1 = duty1*10000;
		console.log(m1);
		fs.writeFileSync("/sys/class/pwm/pwm-0:0/duty_cycle", m1);
	}
});

//motor1 right
socket.on('m1_r', function(){
	if (duty1 > 52) {
		var m1 = duty1--;
		var m1 = duty1--;
		var m1 = duty1*10000;
		console.log(m1);
		fs.writeFileSync("/sys/class/pwm/pwm-0:0/duty_cycle", m1);
	}
});

//motor2 left
socket.on('m2_l', function(){
	if (duty2 < 220) {
		var m2 = duty2++;
		var m2 = duty2++;
		var m2 = duty2*10000;
		console.log(m2);
		fs.writeFileSync("/sys/class/pwm/pwm-1:0/duty_cycle", m2);
	}
});

//motor2 right
socket.on('m2_r', function(){
	if (duty2 > 52) {
		var m2 = duty2--;
		var m2 = duty2--;
		var m2 = duty2*10000;
		console.log(m2);
		fs.writeFileSync("/sys/class/pwm/pwm-1:0/duty_cycle", m2);
	}
});

//motor3 left
socket.on('m3_l', function(){
	if (duty3 < 220) {
		var m3 = duty3++;
		var m3 = duty3++;
		var m3 = duty3*10000;
		console.log(m3);
		fs.writeFileSync("/sys/class/pwm/pwm-3:0/duty_cycle", m3);
	}
});

//motor3 right
socket.on('m3_r', function(){
	if (duty3 > 52) {
		var m3 = duty3--;
		var m3 = duty3--;
		var m3 = duty3*10000;
		console.log(m3);
		console.log(m3);
		fs.writeFileSync("/sys/class/pwm/pwm-3:0/duty_cycle", m3);
	}
});

//motor4 left
socket.on('m4_l', function(){
	if (duty4 < 220) {
		var m4 = duty4++;
		var m4 = duty4++;
		var m4 = duty4*10000;
		console.log(m4);
		fs.writeFileSync("/sys/class/pwm/pwm-5:0/duty_cycle", m4);
	}
});

//motor4 right
socket.on('m4_r', function(){
	if (duty4 > 52) {
		var m4 = duty4--;
		var m4 = duty4--;
		var m4 = duty4*10000;
		console.log(m4);
		fs.writeFileSync("/sys/class/pwm/pwm-5:0/duty_cycle", m4);
	}
});

//motor5 left
socket.on('m5_l', function(){
	if (duty5 < 220) {
		var m5 = duty5++;
		var m5 = duty5++;
		var m5 = duty5*10000;
		console.log(m5);
		fs.writeFileSync("/sys/class/pwm/pwm-6:0/duty_cycle", m5);
	}
});

//motor5 right
socket.on('m5_r', function(){
	if (duty5 > 52) {
		var m5 = duty5--;
		var m5 = duty5--;
		var m5 = duty5*10000;
		console.log(m5);
		fs.writeFileSync("/sys/class/pwm/pwm-6:0/duty_cycle", m5);
	}
});
