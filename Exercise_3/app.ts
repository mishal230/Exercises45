//Exercise_3
const personName: string = "Mishal Zubair";
console.log("lowerCase:", personName.toLowerCase());
console.log("UpperCase:", personName.toUpperCase());
console.log("TitleCase:", personName.replace(/\b\w/g, char => char.toUpperCase()));
