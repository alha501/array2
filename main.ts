input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        list.push(index)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(list[1])
    }
})
let list: number[] = []
list = [3, 5, 7]
basic.forever(function () {
	
})
