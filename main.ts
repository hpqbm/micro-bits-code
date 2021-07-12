input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(0, 5))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(6, 10))
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 10))
})
