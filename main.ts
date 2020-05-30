/*
 touchkey package
*/
//% weight=10 icon="\uf140" color=#2896ff
namespace touchkey {
    /**
    * Get the touck key is pressed or not
    */
    //% weight=98 blockId=touchKeyStatus block="Is touch key pin|%avoidPin|pressed?"
    export function touchKeyStatus(avoidPin: DigitalPin): boolean {
        let status = 0;
        let flag = false;
        pins.setPull(avoidPin, PinPullMode.PullUp);
        status = pins.digitalReadPin(avoidPin);
        if (status == 1)
            flag = false;
        else
            flag = true;
        return flag;
    }
}
