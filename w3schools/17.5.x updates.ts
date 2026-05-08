//As a reminder these features will only be available in 5.x+

//Template Literal Types

//Template literal types now allows us to create more precise types using template literals
//We can define cusom types that depend on the actual values of strings at compile time.

//Example
type Color = "red" | "green" | "blue";
type HexColor<T extends Color> = `#${string}`;

// Usage:
let myColor: HexColor<"blue"> = "#0000FF";

//Index Signature Labels
//Index Signature Labels allows us to label index signatures using computed property names
//It helps in providing more descriptive type information when working with dynamic objects.

//EXAMPLE

type DynamicObject = { [key: `dynamic_${string}`]: string };

// Usage:
let obj: DynamicObject = { dynamic_key: "value" };

