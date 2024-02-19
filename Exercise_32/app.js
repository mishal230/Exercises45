"use strict";
let current_users = ["MAHA", "MISHAL", "HAMMAS", "ZUHAIR", "FARAL", "RAMSHA"];
let new_users = ["MAHA", "AREESHA", "HAMMAS", "ZUHAIR", "FIZZA", "MISBAH"];
let current_users_lower = current_users.map(username => username.toLowerCase());
for (let new_username of new_users) {
    let new_username_lower = new_username.toLowerCase();
    if (current_users_lower.includes(new_username_lower)) {
        console.log("This username ", new_username, " is not available! please Enter a new username.");
    }
    else {
        console.log("This username ", new_username, " is available.");
    }
}
