// tests go here; this will not be compiled when this package is used as an extension.
////basic.showIcon(IconNames.Silly)
////basic.pause(100)
////basic.showIcon(IconNames.Meh)


// * Keep in mind that the micro:bit is 'updside-down' when using the LED 5x5 Matrix.
input.onButtonPressed(Button.A, function () {
    if (true) {
        roboQuest.rq_PowerMotorsViaBlueRedBlackPins_Fn(rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight, 100, 100)       
        roboQuest.rq_show_MotionDirection_Fn(rq_Motion_Direction_Enum.Forward)
        roboQuest.rq_ContinueCurrentState_CountdownTimer_Set_Fn(3, rq_Time_Units_Enum.Seconds)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        roboQuest.rq_PowerMotorsViaBlueRedBlackPins_Fn(rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight, 100, 100)
        roboQuest.rq_show_MotionDirection_Fn(rq_Motion_Direction_Enum.Forward)
        roboQuest.rq_ContinueCurrentState_CountdownTimer_Set_Fn(3, rq_Time_Units_Enum.Seconds)
    }
    if (true) {
        roboQuest.rq_PowerMotorsViaBlueRedBlackPins_Fn(rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight, -100, -100)
        roboQuest.rq_show_MotionDirection_Fn(rq_Motion_Direction_Enum.Backward)
        roboQuest.rq_ContinueCurrentState_CountdownTimer_Set_Fn(3000, rq_Time_Units_Enum.Milliseconds)
    }
    if (true) {
        roboQuest.rq_PowerMotorsViaBlueRedBlackPins_Fn(rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight, 100, -100)
        roboQuest.rq_show_MotionDirection_Fn(rq_Motion_Direction_Enum.Right)
        roboQuest.rq_ContinueCurrentState_CountdownTimer_Set_Fn(3, rq_Time_Units_Enum.Seconds)
    }
    if (true) {
        roboQuest.rq_PowerMotorsViaBlueRedBlackPins_Fn(rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight, -100, 100)
        roboQuest.rq_show_MotionDirection_Fn(rq_Motion_Direction_Enum.Left)
        roboQuest.rq_ContinueCurrentState_CountdownTimer_Set_Fn(3000, rq_Time_Units_Enum.Milliseconds)
    }
    if (true) {
        roboQuest.rq_PowerMotorsViaBlueRedBlackPins_Fn(rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight, 0, 0)
        roboQuest.rq_show_MotionDirection_Fn(rq_Motion_Direction_Enum.Stop)
        roboQuest.rq_ContinueCurrentState_CountdownTimer_Set_Fn(3, rq_Time_Units_Enum.Seconds)
    }
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        roboQuest.rq_PowerMotorsViaBlueRedBlackPins_Fn(rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight, 0, 0)

        roboQuest.rq_show_MotionDirection_Fn(rq_Motion_Direction_Enum.Stop)

        roboQuest.rq_ContinueCurrentState_CountdownTimer_Set_Fn(3, rq_Time_Units_Enum.Seconds)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    ///roboQuest.rq_Setup_Fn(0, 1)
    roboQuest.rq_Setup_Fn(false, true)
    roboQuest.rq_PrintString_Oled_Serial_Fn(
        "testJesus",
        0,
        0,
        1,
        false,
        false
    )
})
input.onGesture(Gesture.TiltLeft, function () {
    ///roboQuest.rq_Setup_Fn(1, 0)
    roboQuest.rq_Setup_Fn(true, false)
    roboQuest.rq_PrintString_Oled_Serial_Fn(
        "testChrist",
        0,
        0,
        1,
        false,
        false
    )
})

basic.showIcon(IconNames.SmallHeart)
roboQuest.rq_ContinueCurrentState_CountdownTimer_Set_Fn(3, rq_Time_Units_Enum.Seconds)
basic.showIcon(IconNames.Heart)
roboQuest.rq_ContinueCurrentState_CountdownTimer_Set_Fn(3000, rq_Time_Units_Enum.Milliseconds)
basic.showIcon(IconNames.Happy)
roboQuest.rq_PrintString_Oled_Serial_Fn("", 0, 0, 0, false, false)

