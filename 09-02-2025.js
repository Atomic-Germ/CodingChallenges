#!/usr/bin/env node

const rgbToHex = (rgb) => {
  // Extract the numeric values from the rgb(red,green,blue) string
  // example input: "rgb(255, 0, 0)" => output: "#ff0000"
  const result = rgb.match(/\d+/g);
  return (
    '#' +
    result
      .map((x) => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
      .toLowerCase()
  );
}

console.log(rgbToHex("rgb(255, 0, 0)")); // Output: #ff0000
console.log(rgbToHex("rgb(0, 255, 0)")); // Output: #00ff00
console.log(rgbToHex("rgb(0, 0, 255)")); // Output: #0000ff
