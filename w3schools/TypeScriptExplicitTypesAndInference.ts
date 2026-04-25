// Explicit Type Annotations
// Basic Explicit Types

// String
// greeting: string = "Hello, TypeScript!";

// Number
// userCount: number = 42;

// Boolean
// isLoading: boolean = true;

// Array of numbers
// scores: number[] = [100, 95, 98];


// Function with Explicit Types

// Function with explicit parameter and return types
function greet(name: string): string {
return `Hello, ${name}!`;
}

// TypeScript will ensure you pass the correct argument type
greet("Alice"); // OK
greet(42);     // Error: Argument of type '42' is not assignable to parameter of type 'string'

//Type Inference
//Basix type inference

// TypeScript infers 'string'
let username = "alice";

// TypeScript infers 'number'
let score = 100;

// TypeScript infers 'boolean[]'
let flags = [true, false, true];

// TypeScript infers return type as 'number'
function add(a: number, b: number) {
return a + b;
}