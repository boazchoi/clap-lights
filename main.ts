input.onSound(DetectedSound.Loud, function () {
    lightsOn = !(lightsOn)
    if (lightsOn) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # # # # #
            . . # . .
            . . # . .
            `)
        music.playMelody("- - - - - - - - ", 120)
    } else {
        basic.clearScreen()
        music.playMelody("C5 A B G A F G E ", 120)
    }
})
let lightsOn = false
input.setSoundThreshold(SoundThreshold.Loud, 120)
basic.forever(function () {
	
})
