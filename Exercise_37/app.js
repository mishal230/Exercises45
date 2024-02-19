"use strict";
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log('The shirt size is', size.toUpperCase(), 'and the message on it is:', message);
}
make_shirt();
make_shirt("medium");
make_shirt("small", 'MISHAL HERE');
