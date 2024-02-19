"use strict";
function make_album(artist, title, tracks) {
    let album = { artist: artist, title: title };
    if (tracks == undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("artist1", "album1");
let album2 = make_album("artist2", "album2", 12);
let album3 = make_album("artist3", "album3");
console.log(album1);
console.log(album2);
console.log(album3);
