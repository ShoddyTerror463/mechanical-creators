def on_button_pressed_a():
    music.start_melody(music.built_in_melody(Melodies.DADADADUM),
        MelodyOptions.ONCE)
    wuKong.set_motor_speed(wuKong.MotorList.M1, 50)
    wuKong.set_motor_speed(wuKong.MotorList.M2, -50)
    basic.show_arrow(ArrowNames.NORTH)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_sound_loud():
    wuKong.stop_all_motor()
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_button_pressed_ab():
    wuKong.stop_all_motor()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

# among_us

def on_button_pressed_b():
    wuKong.set_motor_speed(wuKong.MotorList.M1, -50)
    wuKong.set_motor_speed(wuKong.MotorList.M2, 50)
    basic.show_arrow(ArrowNames.SOUTH)
input.on_button_pressed(Button.B, on_button_pressed_b)

for index in range(4):
    basic.show_leds("""
        . # # # .
                # # . # #
                # # . # .
                . # # # .
                . # . # .
    """)
# balls

def on_forever():
    if sonarbit.sonarbit_distance(Distance_Unit.DISTANCE_UNIT_MM, DigitalPin.P0) <= 8:
        basic.show_icon(IconNames.YES)
        music.play_tone(262, music.beat(BeatFraction.WHOLE))
        wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 276)
        basic.pause(5000)
        wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
    elif sonarbit.sonarbit_distance(Distance_Unit.DISTANCE_UNIT_MM, DigitalPin.P0) > 8:
        basic.show_icon(IconNames.NO)
        wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
        basic.pause(500)
    if sonarbit.sonarbit_distance(Distance_Unit.DISTANCE_UNIT_MM, DigitalPin.P0) <= 8:
        for index2 in range(1):
            wuKong.set_all_motor(50, 25)
basic.forever(on_forever)
