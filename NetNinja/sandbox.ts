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

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(8)); 

//Arrays

let names = ['sunjay', 'jay', 'david'];

names.push('waiwai');
// names.push(1) only strings can be added


let numbers = [1, 2, 3];
numbers.push(23); // works with numbers when it is number above
// numbers.push('wau') shows error
// numbers[1]='same' same thing

let mixed = ['sunjay', 25, true];

mixed.push('waiwai'); // works with any type in the array
mixed.push(30);
mixed.push(false);
mixed[0] = 3;

//objects
let sun = {
  name: 'jay',
  age: 25,
  belt: 'black'
};

sun.age = 30;
sun.name = 'waiwai';
// sun.age = 'sa'; doesnot takes string
// sun.skills = ['javascript', 'typescript'];

sun = {
  name: "waiwai",
  belt: 'purple',
  age: 30 // cannot miss any properties because doesnot match the initial structure should be same structure
  // height: 5.9; can't add other properties too
}
// TS is strict