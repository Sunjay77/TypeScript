// Keyof with explicit keys
// When you use the keyof operator with an explicit type, it returns a union of the keys of that type
interface Person {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let human = {
  name: "Max",
  age: 27,
};
printPersonProperty(human, "name"); // Printing human property name: "Max"

//keyof with index signatures
//keyof can also be used with index signatures to extract the index type.

type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}

