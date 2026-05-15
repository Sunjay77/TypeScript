// mapped types in TypeScript allow you to create new types by transforming properties of existing types.

// Mapped types = transform every property of a type.
// Common ones: Partial, Readonly, Pick, Omit, Record.

//Example

type Person = { name: string; age: number; }
type PartialPerson = { [K in keyof Person]?: Person[K] }
type ReadonlyPerson = { readonly [K in keyof Person]: Person[K] }


// Basic Mapped Type Syntax
//Core syntax

// Mapped types use the syntax { [P in K]: T } where:

// P is the property name being iterated
// K is a union of property names to iterate over
// T is the resulting type for each property

// Example

// Define an object type
interface Personl {
  name: string;
  age: number;
  email: string;
}

// Create a mapped type that makes all properties optional
type PPerson = {
  [P in keyof Person]?: Person[P];
};

// Usage
const partialPerson: PartialPerson = {
  name: "John"
  // age and email are optional
};

// Create a mapped type that makes all properties readonly
type PReadonlyPerson = {
  readonly [P in keyof Person]: Person[P];
};

// Usage
const readonlyPerson: ReadonlyPerson = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
};

// readonlyPerson.age = 31; // Error: Cannot assign to 'age' because it is a read-only property