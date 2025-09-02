#!/usr/bin/env node

function generateHex(color) {
const mainColor = () => { return Math.floor(Math.random() * 256).toString(16).padStart(2, '100');}
let subColor = (digits) => { return Math.floor(Math.random() * 100).toString(16).padStart(digits, '0');}

switch(color) {
  case "red": return mainColor() + subColor(4);
  case "green": return subColor(2) + mainColor() + subColor(2);
  case "blue": return subColor(4) + mainColor();
  default: return "Invalid color";
  }
}

console.log(generateHex("red")); // It should return a red-dominant color in hex
console.log(generateHex("red")); // It should return a different red-dominant color in hex
console.log(generateHex("green")); // It should return a green-dominant color in hex
console.log(generateHex("blue")); // It should return a blue-donminant color in hex
console.log(generateHex("yellow")); // It should return "Invalid color"
