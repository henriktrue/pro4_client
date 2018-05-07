#!/bin/bash

       # Connect the pins to the PWM
        config-pin p9_14 pwm
        config-pin p9_16 pwm
        config-pin p9_42 pwm
        config-pin p8_19 pwm
        config-pin p8_13 pwm

        # Now we are ready to enable the PWM chip
        echo 0 > /sys/class/pwm/pwmchip0/export
        echo 0 > /sys/class/pwm/pwmchip3/export
        echo 1 > /sys/class/pwm/pwmchip3/export
        echo 0 > /sys/class/pwm/pwmchip6/export
        echo 1 > /sys/class/pwm/pwmchip6/export

	echo "pwm setup complete"
	
	sleep 5

nodejs main

