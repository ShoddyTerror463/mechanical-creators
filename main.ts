input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    wuKong.setAllMotor(-25, 50)
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(50, -50)
    basic.showArrow(ArrowNames.North)
})
input.onSound(DetectedSound.Loud, function () {
    wuKong.stopAllMotor()
    basic.showLeds(`
        . # # # .
        # . . # #
        # . # . #
        # # . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
    basic.showLeds(`
        . # # # .
        # . . # #
        # . # . #
        # # . . #
        . # # # .
        `)
})
// among_us
input.onButtonPressed(Button.B, function () {
    wuKong.setAllMotor(-50, 50)
    basic.showArrow(ArrowNames.South)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    wuKong.setAllMotor(50, -25)
    basic.showArrow(ArrowNames.East)
})
// balls
basic.forever(function () {
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P0) <= 8) {
        basic.showIcon(IconNames.Yes)
        music.playTone(262, music.beat(BeatFraction.Whole))
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 276)
        basic.pause(5000)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
    } else if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P0) > 8) {
        basic.showIcon(IconNames.No)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
        basic.pause(500)
    }
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P0) <= 8) {
        wuKong.setAllMotor(50, 0)
    }
})
