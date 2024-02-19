let current_users: string[]= ["MAHA", "MISHAL", "HAMMAS", "ZUHAIR", "FARAL", "RAMSHA"];
let new_users: string[]= ["MAHA", "AREESHA", "HAMMAS", "ZUHAIR", "FIZZA", "MISBAH"];
let current_users_lower: string[] = current_users.map( username => username.toLowerCase());
for (let new_username of new_users){
    let new_username_lower: string = new_username.toLowerCase();
    if (current_users_lower.includes(new_username_lower)){
        console.log("This username " ,new_username , " is not available! please Enter a new username.");
    } else{
        console.log("This username " ,new_username , " is available.");
    }
}

