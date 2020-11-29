input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        Kitronik_Move_Motor.beepHorn()
    }
    ignition = true
})
let distanc3e = 0
let ignition = false
basic.showIcon(IconNames.Silly)
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
moveMotorZIP.clear()
moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
moveMotorZIP.show()
ignition = false
basic.forever(function () {
    distanc3e = Math.map(Kitronik_Move_Motor.measure(), 0, 255, 0, 100)
})
basic.forever(function () {
    moveMotorZIP.rotate(1)
    moveMotorZIP.show()
    basic.pause(1000)
})
basic.forever(function () {
    if (ignition == true) {
        if (distanc3e < 3) {
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 20)
            basic.pause(randint(300, 900))
            Kitronik_Move_Motor.stop()
        } else {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, distanc3e)
        }
    }
})
