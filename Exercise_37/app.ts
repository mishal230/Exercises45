function make_shirt(size:string = "Large", message:string = "I love TypeScript"): void{
    console.log('The shirt size is', size.toUpperCase(), 'and the message on it is:', message);
}
make_shirt();
make_shirt("medium"); 
make_shirt("small" , 'MISHAL HERE');
