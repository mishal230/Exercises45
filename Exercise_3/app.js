//Exercise_3
var personName = "Mishal Zubair";
console.log("lowerCase:", personName.toLowerCase());
console.log("UpperCase:", personName.toUpperCase());
console.log("TitleCase:", personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
