
let UserNames: string[] = ["Admin", "Mishal", "Maha","Faral", "Ramsha"];
for(let username of UserNames){
    if(username === 'Admin'){
        console.log("Hello Admin, would you like to see status report?");
} else {    
     console.log(`Hello ${username}, thank you for logging in again!`);
    }
        
}
