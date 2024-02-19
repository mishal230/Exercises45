function make_sandwich(...items: string[]): void{
    console.log("Sandwich Summary:");
    console.log("bread");
    for(let item of items){
        console.log(item);
    }
    console.log("bread");
}
make_sandwich("cheese", "lecttuce","tomato");
make_sandwich("ham","mustard");
make_sandwich("tuna");