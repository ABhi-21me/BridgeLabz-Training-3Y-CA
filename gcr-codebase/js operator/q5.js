let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Test another condition
isAlarmOn = false;

if (isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside) {
    console.log("Unsafe");
} else {
    console.log("Secure");
}