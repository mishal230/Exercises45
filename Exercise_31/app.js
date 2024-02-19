"use strict";
let UserNames = [];
if (UserNames.length === 0) {
    console.log("We need to find Users!");
}
else {
    for (let username of UserNames) {
        if (username === 'Admin') {
            console.log("Hello Admin, would you like to see status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again!`);
        }
    }
}
