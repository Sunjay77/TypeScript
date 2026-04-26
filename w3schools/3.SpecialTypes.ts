//The example below does not use "any" and will throw an error:

let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

//Setting a variable to the special type any disables type checking:

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

// Type: Unknown

let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  },
} as { runANonExistentMethod: () => void };
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === "object" && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

// Type narrowing with unknown

function processValue(value: unknown) {
  if (typeof value === "string") {
    // value is now treated as string
    console.log(value.toUpperCase());
  } else if (Array.isArray(value)) {
    // value is now treated as any[]
    console.log(value.length);
  }
}

// Examples of never in action

// 1. Function that never returns

function throwError(message: string): never {
  throw new Error(message);
}

//2. Exhaustivness checking with discriminated unions

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      // TypeScript knows this should never happen
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

//3. Basic never type (throw error when assigned)

let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

//BASIC USAGE

let y: undefined = undefined;
let z: null = null;

//Optional Parameters and properties

// Optional parameter (implicitly `string | undefined`)
function greet(name?: string) {
  return `Hello, ${name || 'stranger'}`;
}

// Optional property in an interface
interface User {
  name: string;
  age?: number; // Same as `number | undefined`
}

//Nullish Coalescing and Optical Chaining

// Nullish coalescing (??) - only uses default if value is null or undefined
const value = input ?? 'default';

// Optional chaining (?.) - safely access nested properties
const street = user?.address?.street;