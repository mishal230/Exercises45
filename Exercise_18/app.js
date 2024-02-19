"use strict";
let placesToVisit = ["KARACHI", "LAHORE", "ISLAMABAD", "MURREE", "FAISALABAD"];
console.log("ORIGINAL Order:", placesToVisit);
console.log("ALPHABETIC Order:", [...placesToVisit].sort(), "\n");
console.log("ORIGINAL Order:", placesToVisit);
console.log("REVERSE ALPHABETIC Order:", [...placesToVisit].sort().reverse(), "\n");
console.log("ORIGINAL Order:", placesToVisit);
placesToVisit.reverse();
console.log("REVERSE Order:", placesToVisit, "\n");
placesToVisit.reverse();
console.log("ORIGINAL Order:", placesToVisit);
placesToVisit.sort();
console.log("SORTED ALPHABETIC Order:", placesToVisit);
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("SORTED REVERSE ALPHABETIC Order:", placesToVisit);