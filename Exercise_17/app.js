"use strict";
let GuestList = ["Sahil Adeem", "Dr Israr Ahmad", "Molana Moudoodi"];
console.log("WE FOUND A BIGGER DINNER TABLE!");
GuestList.unshift("Tariq Jameel");
const middleIndex = Math.floor(GuestList.length / 2);
GuestList.splice(middleIndex, 0, "Yasmin Mogahid");
GuestList.push("Maha");
console.log("Sorry, We can only invite two people");
while (GuestList.length > 2) {
    const removedGuest = GuestList.pop();
    console.log("Sorry, " + removedGuest + ", we can't invite you to dinner.");
}
GuestList.forEach(person => {
    console.log("DEAR " + person + ", YOU ARE INVITED TO DINNER. PLEASE JOIN US!");
});
GuestList.splice(0, GuestList.length);
console.log("All GUEST ARE DONE:", GuestList);
