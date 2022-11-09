input.onButtonPressed(Button.A, function () {
    serial.writeLine("Since 'micro:bit' is 'upside-down' then these arrows will be flipped on the bot :)")
    serial.writeLine("Forward")
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    roboQuest.rq_PowerMotorsViaBlueRedBlackPins_Fn(rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight, 30, 30)
    roboQuest.rq_ContinueCurrentState_CountdownTimer_Set_Fn(3, rq_Time_Units_Enum.Seconds)
    serial.writeLine("Stop")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    roboQuest.rq_PowerMotorsViaBlueRedBlackPins_Fn(rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight, 0, 0)
    roboQuest.rq_ContinueCurrentState_CountdownTimer_Set_Fn(3, rq_Time_Units_Enum.Seconds)
    serial.writeLine("Create Your Own Autonomous Navigations by Modding/Adding Blocks of Code : )")
    basic.showLeds(`
        . # # # .
        # . . . #
        . . # # .
        . . # . .
        . . # . .
        `)
    roboQuest.rq_PowerMotorsViaBlueRedBlackPins_Fn(rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight, 0, 0)
    roboQuest.rq_ContinueCurrentState_CountdownTimer_Set_Fn(3, rq_Time_Units_Enum.Seconds)
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("Stop")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    roboQuest.rq_PowerMotorsViaBlueRedBlackPins_Fn(rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight, 0, 0)
})
serial.writeLine("Welcome Message to Confirm Download/Reset of Code")
basic.showIcon(IconNames.Heart)
basic.pause(3000)
basic.showIcon(IconNames.Happy)
basic.pause(3000)
