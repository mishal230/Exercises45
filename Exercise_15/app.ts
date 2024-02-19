let GuestList: string[] = ["Sahil Adeem", "Dr Israr Ahmad", "Molana Moudoodi"];
GuestList.forEach(person =>{
    console.log("Dear " + person + ", you are invited to Dinner. Please join us!");
});
const GuestWhoCantMakeIt: string = "Sahil Adeem";
console.log(GuestWhoCantMakeIt + " can't make it to Dinner.");
const newGuest: string = "Maha";
GuestList = GuestList.map(person => person === GuestWhoCantMakeIt ? newGuest : person);
GuestList.forEach(person => {
    console.log("Dear "+person+ ", you are invited to dinner. Please join us!")
});
