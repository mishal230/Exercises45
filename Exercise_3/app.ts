//Exercise_3
const personName: string = "Mishal Zubair";
console.log("lowerCase:", personName.toLowerCase());
console.log("UpperCase:", personName.toUpperCase());
console.log("TitleCase:", personName.replace(/\w/g, char =>char.toUpperCase()));
