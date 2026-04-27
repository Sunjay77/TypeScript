//Typed Arrays

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Coding God was here"];

// define our tuple
let usTuple: [number, boolean, string];

// initialized incorrectly which throws an error
usTuple = [false, "Coding God was mistaken", 5];

//Readonly Tuple

// define our tuple
let readonlyTuple: [number, boolean, string];
// initialize correctly
readonlyTuple = [5, false, "Coding God was here"];
// We have no type safety in our tuple for indexes 3+
readonlyTuple.push("Something new and wrong");
console.log(readonlyTuple);

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  true,
  "The Real Coding God",
];
// throws error as it is readonly.
ourReadonlyTuple.push("Coding God took a day off");

// Named Tuples
// Named tuples allow us to provide context for our values at each index.

const graph: [x: number, y: number] = [55.2, 41.3];

// Named tuples provide more context for what our index values represent

//Destructuring tuples
//since tuples are arrays we can also destructure them

const tuplesGraph: [number, number] = [55.2, 41.3];
const [x, y] = tuplesGraph;