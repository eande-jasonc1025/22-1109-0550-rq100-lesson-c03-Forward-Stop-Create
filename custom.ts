
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

// *** IMPORTANT NEWS ***
//
// * Functions Listed First_In (Here BackEnd): Listed Last_Out (There FrontEnd)
//

// enum MyEnum {
//    //% block="one"
//    One,
//    //% block="two"
//    Two
// }

enum rq_PortGroup_BlueRedBlack_PortIds_Enum {
    //% block="S1_MotorLeft__S0_MotorRight"
    S1_MotorLeft__S0_MotorRight,
    //% block="S3_MotorLeft__S2_MotorRight"
    S3_MotorLeft__S2_MotorRight,
}

enum rq_Time_Units_Enum {
    //% block="seconds"
    Seconds,
    //% block="milliseconds"
    Milliseconds,
}

enum rq_Motion_Direction_Enum {
    //% block="Forward"
    Forward,
    //% block="Backward"
    Backward,
    //% block="Left"
    Left,
    //% block="Right"
    Right,
    //% block="Stop"
    Stop,
}

// * Though it seems that can define global vars here, but not advised 
// ** since memory storage would be safer within 'namespace'
//
///y let deviceType_Bot_Bool = false
///y let deviceType_Controller_Bool = true

/**
 * RoboQuest blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace roboQuest {


    // * Default to Bot and not to Controller for most basic total 1 'micro:bit' setup (No Controller)
    //
    let deviceType_Bot_Bool = true
    let deviceType_Controller_Bool = false

    // OLED12864_I2C: Setup
    //
    OLED12864_I2C.init(60)
    OLED12864_I2C.on()
    OLED12864_I2C.zoom(false)
    OLED12864_I2C.clear()


//    /**
//     * TODO: describe your function here
//     * @param n1 describe parameter here, eg: 5
//     * @param s describe parameter here, eg: "Hello"
//     * @param e describe parameter here
//     */
//    //% block
//    export function foo(n1: number, s: string, e: MyEnum): void {
//        // Add code here
//    }
//
//    /**
//        * TODO: describe your function here
//        * @param n2 describe parameter here, eg: 5
//        * @param s2 describe parameter here, eg: "Hello"
//        * @param e2 describe parameter here
//        */
//    //% block
//   export function foo2(n2: number, s2: string, e2: MyEnum): void {
//        // Add code here
//    }
//    /**
//     * TODO: describe your function here
//     * @param value describe value here, eg: 5
//     */
//    //% block
//    export function fib(value: number): number {
//        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
//    }

    // export  forward
    // export reverse
    // export stop

    /**
     * rq_PrintString_Oled_Serial_Fn
     * @param textStrIn string
     * @param xColBase0In number
     * @param yRowBase0In number
     * @param colorIntIn number; eg: 1
     * @param borderTopBoolIn boolean
     * @param borderBottomBoolIn boolean
     * ; eg: 150, 100, 200, -100
     */
    //% block="print OLED & Serial  textStrIn: $textStrIn xColBase0In: $xColBase0In yRowBase0In: $yRowBase0In colorIntIn: $colorIntIn borderTopBoolIn: $borderTopBoolIn borderBottomBoolIn: $borderBottomBoolIn"
    //% xColBase0In.min=0 xColBase0In.max=4
    //% yRowBase0In.min=0 yRowBase0In.max=4
     export function rq_PrintString_Oled_Serial_Fn (textStrIn: string, xColBase0In: number, yRowBase0In: number, colorIntIn: number = 1, borderTopBoolIn: boolean, borderBottomBoolIn: boolean) {
        OLED12864_I2C.showString(
        xColBase0In,
        yRowBase0In,
        textStrIn,
        colorIntIn
        )
        if (borderTopBoolIn) {
            serial.writeLine("")
        }
        serial.writeString(textStrIn)
        serial.writeString(",")
        if (borderBottomBoolIn) {
            serial.writeLine("")
        }
    }

    /**
     * rq_ContinueCurrentState_CountdownTimer_Set_Fn
     * @param countdownTimer number
     * @param timeUnits rq_Time_Units_Enum
     */
    //% block="continue current state for: $countdownTimer $timeUnits"
    //// y countdownTimer.min=0 countdownTimer.max=5000
    export function rq_ContinueCurrentState_CountdownTimer_Set_Fn(countdownTimer: number, timeUnits: rq_Time_Units_Enum): void {
        let countdownTimerNew = 0
        // Minimum border check
        if (countdownTimer < 0) { countdownTimer = 0 }
        if (timeUnits == rq_Time_Units_Enum.Seconds) {
            countdownTimerNew = countdownTimer * 1000
            basic.pause(countdownTimerNew)
            serial.writeLine("* rq_continueCurrentState_CountdownTimer_Set_Fn: " + countdownTimer + " " + countdownTimerNew)
        } else if (timeUnits == rq_Time_Units_Enum.Milliseconds) {
            countdownTimerNew = countdownTimer
            basic.pause(countdownTimerNew)
            serial.writeLine("* rq_ContinueCurrentState_CountdownTimer_Set_Fn: " + countdownTimer + " " + countdownTimerNew)
        } else {
            serial.writeLine("* ERROR:rq_continueCurrentState_CountdownTimer_Set_Fn: " + countdownTimer + " " + countdownTimerNew)
        }
    }

    /**
     * rq_PowerMotorsViaBlueRedBlackPins_Fn
     * @param portIdsIn rq_PortGroup_BlueRedBlack_PortIds_Enum
     * @param powerLeftIn number
     * @param powerRightIn number
     */
    //% block="power motors @ $portIdsIn for left motor power: $powerLeftIn right motor power: $powerRightIn"
    //% powerLeftIn.min=-100 powerLeftIn.max=100
    //% powerRightIn.min=-100 powerRightIn.max=100
    export function rq_PowerMotorsViaBlueRedBlackPins_Fn(portIdsIn: rq_PortGroup_BlueRedBlack_PortIds_Enum, powerLeftIn: number, powerRightIn: number): void {
        // Motor-Left Conversion: Same Rotational Direction
        let powerLeftNew = Math.map(powerLeftIn, -100, 100, 0, 360)
        // Motor-Right Conversion: Opposite Rotational Direction
        let powerRightNew = Math.map(powerRightIn, -100, 100, 360, 0)

        switch (portIdsIn) {
            case rq_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, powerLeftNew)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, powerRightNew)
                serial.writeLine("* rq_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + powerLeftNew + " " + powerRightNew)
                break
            case rq_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorLeft__S2_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S3, powerLeftNew)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, powerRightNew)
                serial.writeLine("* rq_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + powerLeftNew + " " + powerRightNew)
            default:
                serial.writeLine("* ERROR: rq_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + powerLeftNew + " " + powerRightNew)
                break
        }
    }

    /**
     * rq_show_MotionDirection_Fn
     * @param motionDirectionIn rq_Motion_Direction_Enum
     */
    //% block="show motion_direction on bot @ $motionDirectionIn"
    export function rq_show_MotionDirection_Fn(motionDirectionIn: rq_Motion_Direction_Enum): void {

        switch (motionDirectionIn) {
            // * if on 'bot', then 5x5LED is upside-down - so Yes_Flip graphics
            // * if on 'controller', then 5x5 is rightside-up - so No_Flip graphics
            //
            case rq_Motion_Direction_Enum.Forward:  
                if (deviceType_Bot_Bool) {
                    basic.showLeds(`
                            . . # . .
                            . . # . .
                            # # # # #
                            . # # # .
                            . . # . .
                            `)
                }
                else if (deviceType_Controller_Bool) {
                    basic.showLeds(`
                            . . # . .
                            . # # # .
                            # # # # #
                            . . # . .
                            . . # . .
                            `)
                   
                }
                OLED12864_I2C.showString(
                    0,
                    0,
                    "^",
                    1
                )
                break
            case rq_Motion_Direction_Enum.Backward:
                if (deviceType_Bot_Bool) {
                    basic.showLeds(`
                            . . # . .
                            . # # # .
                            # # # # #
                            . . # . .
                            . . # . .
                            `)
                }
                else if (deviceType_Controller_Bool) {
                    basic.showLeds(`
                            . . # . .
                            . . # . .
                            # # # # #
                            . # # # .
                            . . # . .
                            `)
                }
                OLED12864_I2C.showString(
                    0,
                    0,
                    "v",
                    1
                )
                break
            case rq_Motion_Direction_Enum.Left:
                if (deviceType_Bot_Bool) {
                    basic.showLeds(`
                            . . # . .
                            . . # # .
                            # # # # #
                            . . # # .
                            . . # . .
                            `)
                }
                else if (deviceType_Controller_Bool) {
                    basic.showLeds(`
                            . . # . .
                            . # # . .
                            # # # # #
                            . # # . .
                            . . # . .
                            `)
                }
                OLED12864_I2C.showString(
                    0,
                    0,
                    "<",
                    1
                )
                break
            case rq_Motion_Direction_Enum.Right:
                if (deviceType_Bot_Bool) {
                    basic.showLeds(`
                            . . # . .
                            . # # . .
                            # # # # #
                            . # # . .
                            . . # . .
                            `)
                }
                else if (deviceType_Controller_Bool) {
                    basic.showLeds(`
                            . . # . .
                            . . # # .
                            # # # # #
                            . . # # .
                            . . # . .
                            `)
                }
                OLED12864_I2C.showString(
                    0,
                    0,
                    ">",
                    1
                )
                break
            case rq_Motion_Direction_Enum.Stop:
                basic.showLeds(`
                        . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
                        `)
                OLED12864_I2C.showString(
                    0,
                    0,
                    ".",
                    1
                )
                break
            default:
                basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
                OLED12864_I2C.showString(
                    0,
                    0,
                    "?",
                    1
                )
                break
        }
    }

    /**
     * rq_Setup_Fn
     * @param deviceTypeBotBoolIn boolean
     * @param deviceTypeControllerBoolIn boolean
     */
    //% block="rq setup: 'deviceType_Bot_Bool': $deviceTypeBotBoolIn, 'deviceType_Controller_Bool': $deviceTypeControllerBoolIn"
    export function rq_Setup_Fn(deviceTypeBotBoolIn: boolean, deviceTypeControllerBoolIn: boolean): void {

        deviceType_Bot_Bool = deviceTypeBotBoolIn
        deviceType_Controller_Bool = deviceTypeControllerBoolIn

        OLED12864_I2C.showString(
            0,
            1,
            "B:" + convertToText(deviceType_Bot_Bool) + ", C:" + convertToText(deviceType_Controller_Bool),
            1
        )

    }


}
