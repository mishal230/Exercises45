"use strict";
let GuestList = ["Sahil Adeem", "Dr Israr Ahmad", "Molana Moudoodi"];
console.log("WE FOUND A BIGGER DINNER TABLE!");
GuestList.unshift("Tariq Jameel");
const middleIndex = Math.floor(GuestList.length / 2);
GuestList.splice(middleIndex, 0, "Yasmin Mogahid");
GuestList.push("Maha");
GuestList.forEach(person => {
    console.log("DEAR " + person + ", YOU ARE INVITED TO DINNER. PLEASE JOIN US!");
});
console.log("Number of Guest Invited to Dinner:", GuestList.length);
