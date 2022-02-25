input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . # . . .
            . # # . .
            . . # # .
            . . . # .
            . . . . #
            `)
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # # . . .
            # # # . .
            . # # # #
            . . . # #
            . . . . #
            `)
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . # . . .
            . # # . .
            . . # # .
            . . . # .
            . . . . #
            `)
    }
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
