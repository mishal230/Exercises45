function make_great(magicians: string[]): string[]{
    let great_magicians: string[] = [];
    for(let magician of magicians){
        great_magicians.push("the great " + magician);
    }
    return great_magicians;
}
function show_magicians(magicians: string[]): void{
    for(let magician of magicians){
        console.log(magician)
    }
}
let magicians: string[] = ["Faral","Naima", "Danish","Sania"];
let great_magicians: string[] = make_great([...magicians]);

console.log("original magicians:");
show_magicians(magicians);
console.log("great magicians:");
show_magicians(great_magicians);