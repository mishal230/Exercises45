"use strict";
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
const magicians = ["Faral", "Naima", "Danish", "Sania"];
make_great(magicians);
show_magicians(magicians);
