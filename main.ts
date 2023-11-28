radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
    if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 120), music.PlaybackMode.UntilDone)
    }
    if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    }
    if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
    }
    if (receivedNumber == 5) {
        maqueen.servoRun(maqueen.Servos.S2, 90)
    }
    if (receivedNumber == 6) {
        maqueen.servoRun(maqueen.Servos.S2, 0)
    }
    if (receivedNumber == 7) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        music.play(music.stringPlayable("F G E F A G F G ", 120), music.PlaybackMode.UntilDone)
    }
    if (receivedNumber == 8) {
        maqueen.servoRun(maqueen.Servos.S1, 90)
    }
    if (receivedNumber == 9) {
        maqueen.servoRun(maqueen.Servos.S1, -90)
    }
    if (receivedNumber == 10) {
        maqueen.motorStop(maqueen.Motors.All)
        music.play(music.stringPlayable("A - A - G - G A ", 120), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    radio.setGroup(2)
    basic.showIcon(IconNames.Rabbit)
})
