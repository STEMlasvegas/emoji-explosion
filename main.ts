let count = 0
input.onButtonPressed(Button.A, function () {
    count = 5
    for (let index = 0; index < 6; index++) {
        basic.showNumber(count)
        basic.pause(1000)
        count += -1
    }
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
})
