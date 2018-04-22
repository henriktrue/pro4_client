var socket = require('socket.io-client')('https://pro4team2.herokuapp.com/');

const fs = require('fs');

var duty1 = 150;
var duty2 = 150;
var duty3 = 150;
var duty4 = 150;
var duty5 = 150;

//setting period for motor 5
//motors 1-4 is set in the device tree overlays
fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P9_14.15/period", "1520000");

//setting polarity for motors
fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P9_14.15/polarity", "0");
fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P9_16.16/polarity", "0");
fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P8_13.18/polarity", "0");
fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P8_19.19/polarity", "0");
fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P9_42.17/polarity", "0");

//motor1 left
socket.on('m1_l', function(){
	if (duty1 < 220) {
		var m1 = duty1++;
		var m1 = duty1++;
		var m1 = duty1*10000;
		console.log(m1);
		fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P9_42.17/duty, m1);

	}
});

//motor1 right
socket.on('m1_r', function(){
	if (duty1 > 52) {
		var m1 = duty1--;
		var m1 = duty1--;
		var m1 = duty1*10000;
		console.log(m1);
		fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P9_14.15/duty", m1);
	}
});

//motor2 left
socket.on('m2_l', function(){
	if (duty2 < 220) {
		var m2 = duty2++;
		var m2 = duty2++;
		var m2 = duty2*10000;
		console.log(m2);
		fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P9_16.16/duty", m2);
	}
});

//motor2 right
socket.on('m2_r', function(){
	if (duty2 > 52) {
		var m2 = duty2--;
		var m2 = duty2--;
		var m2 = duty2*10000;
		console.log(m2);
		fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P9_16.16/duty", m2);
	}
});

//motor3 left
socket.on('m3_l', function(){
	if (duty3 < 220) {
		var m3 = duty3++;
		var m3 = duty3++;
		var m3 = duty3*10000;
		console.log(m3);
		fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P8_13.18/duty", m3);
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
		fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P8_13.18/duty", m3);
	}
});

//motor4 left
socket.on('m4_l', function(){
	if (duty4 < 220) {
		var m4 = duty4++;
		var m4 = duty4++;
		var m4 = duty4*10000;
		console.log(m4);
		fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P8_19.19/duty", m4);
	}
});

//motor4 right
socket.on('m4_r', function(){
	if (duty4 > 52) {
		var m4 = duty4--;
		var m4 = duty4--;
		var m4 = duty4*10000;
		console.log(m4);
		fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P8_19.19/duty", m4);
	}
});

//motor5 left
socket.on('m5_l', function(){
	if (duty5 < 220) {
		var m5 = duty5++;
		var m5 = duty5++;
		var m5 = duty5*10000;
		console.log(m5);
		fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P9_42.17/duty", m5);
	}
});

//motor5 right
socket.on('m5_r', function(){
	if (duty5 > 52) {
		var m5 = duty5--;
		var m5 = duty5--;
		var m5 = duty5*10000;
		console.log(m5);
		fs.writeFileSync("/sys/devices/ocp.3/bs_pwm_test_P9_42.17/duty", m5);
	}
});
