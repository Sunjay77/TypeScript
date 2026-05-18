"use strict";
const character = "sunjay";
console.log(character);
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
//Type Basics
let character2 = "david";
let age = 25;
let isBlackBelt = false;
// character2 = 30; you cant change it on number
// character2 = "waiwai" you can since it is on string
// isBlackBelt = "yes" error
isBlackBelt = true;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(8));
