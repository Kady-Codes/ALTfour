radio.onReceivedString(function (receivedString) {
    if (receivedString == "checkmark") {
        basic.showIcon(IconNames.Yes)
    }
})
radio.setGroup(7)
basic.forever(function () {
	
})
