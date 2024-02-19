"use strict";
let GuestList = ["Sahil Adeem", "Dr Israr Ahmad", "Molana Moudoodi"];
GuestList.forEach(person => {
    console.log("Dear " + person + ", you are invited to Dinner. Please join us!");
});
const GuestWhoCantMakeIt = "Sahil Adeem";
console.log(GuestWhoCantMakeIt + " can't make it to Dinner.");
const newGuest = "Maha";
GuestList = GuestList.map(person => person === GuestWhoCantMakeIt ? newGuest : person);
GuestList.forEach(person => {
    console.log("Dear " + person + ", you are invited to dinner. Please join us!");
});
