
function strictDemo(a, b) {
    "use strict";
    const total = 10;
    console.log(a, b, total);
}
strictDemo(5, 10);


"use strict";
function demo(a, b) {
    const total = a + b;
    console.log(`a = ${a}, b = ${b}, total = ${total}`);
}
demo(5, 10);
