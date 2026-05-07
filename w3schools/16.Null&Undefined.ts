// by default null and undefined handling is disabled and can be enabled by setting strictNullChecks to true.
// The rest of this page applies for when structNullChecks is enabled

//Types
//null and undefined are primitive types and can be used like other types, such as string

let value: string | undefined | null = null;
value = "hello";
value = undefined;

// When strictNullChecks is enabled, TypeScript requires values to be set unless undefined is explicitly added to the type.

//Optional Chaining:
//Optional Chaining is a JavaScript feature that works well with TypeScript's null handiling.
//It allows accesing proprties on an object that may or may not exist, using compact syntax.
//It can be used with the?. operator accessing properties.

//Example:

interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}
function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;
  if (yardSize === undefined) {
    console.log("No yard");
  } else {
    console.log(`Yard is ${yardSize} sqft`);
  }
}

let home: House = {
  sqft: 500,
};

printYardSize(home); // Prints 'No yard'

// Nullish Coalescing
// Nullish coalescing is another JavaScript feature that also works well with TypeScript's null handiling.

// It allows writing expressions that have a fallback specifically when dealing with null or undefined
// It can be used with the ?? operator in an expression, similar to using the && operator,

//Example
function printMileage(mileage: number | null | undefined) {
  console.log(`Mileage: ${mileage ?? "Not Available"}`);
}

printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'

//Null Assertion
//TypeScript's inference system is'nt perfect there are times when it makes sense to ignore a value's possibility of being null or undefined.

//An easy way to do this is to use casting, but TypeScript also provides the ! operator as a convenient shortcut

function getValue(): string | undefined {
  return "hello";
}
let word = getValue();
console.log("value length: " + word!.length);

//just like casting, this can be unsafe and should be used with care.

//Array Bounds Handling
//Even with strictNullChecks enabled, by default typeScript assumes array access will never return undefined (unles undefined is part of the array type).
//The config noUncheckedIndexedAccess cam be used to change this behavior

//Example

let array: number[] = [1, 2, 3];
let number = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`

