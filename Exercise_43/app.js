"use strict";
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push("the great " + magician);
    }
    return great_magicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ["Faral", "Naima", "Danish", "Sania"];
let great_magicians = make_great([...magicians]);
console.log("original magicians:");
show_magicians(magicians);
console.log("great magicians:");
show_magicians(great_magicians);
