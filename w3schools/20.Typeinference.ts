//Type Inference

//Type inference is ability yo automatically deterine and assign types to variables,
//Funtion returns, and expressions based on their usage and context, without requiring explicit type annotations.

// //example
// // TypeScript infers these variable types
// let place = "Alice"; // inferred as string
// let age = 30; // inferred as number
// let isActive = true; // inferred as boolean
// let numbers = [1, 2, 3]; // inferred as number[]
// let mixed = [1, "two", true]; // inferred as (string | number | boolean)[]

// // Using the inferred types
// place.toUpperCase(); // Works because place is inferred as string
// age.toFixed(2); // Works because age is inferred as number
// // place.toFixed(2); // Error: Property 'toFixed' does not exist on type 'string'

// //Function return Type inference

// //Function Return Type Inference
// //TypeScript can infer the return type of a function based on its return statement:

// //example

// // Return type is inferred as string
// function greet(name: string) {
//   return `Hello, ${name}!`;
// }

// // Return type is inferred as number
// function add(a: number, b: number) {
//   return a + b;
// }

// // Return type is inferred as string | number
// function getValue(key: string) {
//    if (key === "name") {
//     return "Alice";
//    } else {
//     return 42;
//    }
// }
// // Using the inferred return types
// let greeting = greet("Bob"); // inferred as string
// let sum = add(5, 3); // inferred as number
// let value = getValue("age"); // inferred as string | number

// //Contextual typing
// //TypeScript can ifer types based on the context in which expressions occur:

//Example

// The type of the callback parameter is inferred from the array method context
const names = ["Alice", "Bob", "Charlie"];

// Parameter 'name' is inferred as string
names.forEach((name) => {
  console.log(name.toUpperCase());
});

// Parameter 'name' is inferred as string, and the return type is inferred as number
const nameLengths = names.map((name) => {
  return name.length;
});

// nameLengths is inferred as number[]

// Parameter types in event handlers are also inferred
document.addEventListener("click", (event) => {
  // 'event' is inferred as MouseEvent
  console.log(event.clientX, event.clientY);
});

// Type Inference in object literals
// When working with object literals, TypeScript infers the types of properties:

//Example

// TypeScript infers the type of this object
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  active: true,
  details: {
    age: 30,
    address: {
      city: "New York",
      country: "USA",
    },
  },
};

// Accessing inferred properties
console.log(user.name.toUpperCase());
console.log(user.details.age.toFixed(0));
console.log(user.details.address.city.toLowerCase());

// Type errors would be caught
// console.log(user.age); // Error: Property 'age' does not exist on type '...'
// console.log(user.details.name); // Error: Property 'name' does not exist on type '...'
// console.log(user.details.address.zip); // Error: Property 'zip' does not exist on type '...'

//Advanced Patters
//Const Assertions

//Example

// Regular type inference (widens to string)
let name = "Alice"; // type: string

// Const assertion (narrows to literal type)
const nameConst = "Alice" as const; // type: "Alice"

// With objects
const user = {
  id: 1,
  name: "Alice",
  roles: ["admin", "user"] as const, // readonly tuple
} as const;

// user.name = "Bob";  // Error: Cannot assign to 'name' because it is a read-only property

//Type Guards and control flow Analysis

//Example

function processValue(value: string | number) {
  // Type is narrowed to string in this block
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  // Type is narrowed to number here
  else {
    console.log(value.toFixed(2));
  }
}

// Discriminated unions
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  size: number;
}
type Shape = Circle | Square;

function area(shape: Shape) {
  // Type is narrowed based on 'kind' property
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
  }
}

// BestPractices
// Here are some best practices for working with typeScript's type inference

//Example

// 1. Let TypeScript infer simple types
let message = "Hello"; // Good: no need for explicit type here

// 2. Provide explicit types for function parameters
function formatName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

// 3. Consider adding return type annotations for complex functions
function processData(input: string[]): { count: number; items: string[] } {
  return {
    count: input.length,
    items: input.map(item => item.trim())
  };
}

// 4. Use explicit type annotations for empty arrays or objects
const emptyArray: string[] = []; // Without annotation, inferred as any[]
const configOptions: Record<string, unknown> = {}; // Without annotation, inferred as {}

// 5. Use type assertions when TypeScript cannot infer correctly
const canvas = document.getElementById("main-canvas") as HTMLCanvasElement;

//when to use explicit types

// While type inference is powerful, there are situations where explicit type annotations are recommended:

// Recommended for Explicit Types
// Public API Contracts: Function parameters and return types in library code
// Complex Types: When the inferred type is too broad or complex
// Documentation: To make the code more self-documenting
// Type Safety: When you need to enforce specific constraints
// Empty Collections: Empty arrays or objects that will be populated later


// Performance Considerations

//Example
// Good: Explicit type for complex return values
function processData(input: string[]): { results: string[]; count: number } {
  return {
    results: input.map(processItem),
    count: input.length
  };
}

// Good: Explicit type for empty arrays
const items: Array<{ id: number; name: string }> = [];

// Good: Explicit type for configuration objects
const config: {
  apiUrl: string;
  retries: number;
  timeout: number;
} = {
  apiUrl: "https://api.example.com",
  retries: 3,
  timeout: 5000
};
