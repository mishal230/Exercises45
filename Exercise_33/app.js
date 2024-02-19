"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(number + "ST");
    }
    else if (number === 2) {
        console.log(number + "ND");
    }
    else if (number === 3) {
        console.log(number + "RD");
    }
    else {
        console.log(number + "TH");
    }
}
