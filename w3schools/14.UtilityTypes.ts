// Partial
// Partial changes all the properties in an object to be optional

// example

interface point {
  x: number;
  y: number;
}
let pointPart: Partial<point> = {}; //`partial` allows x and y to be optional
pointPart.x = 10;
pointPart.y = 20;

//Required
//Required changes all the properties in an object to be required.

//example
interface Car {
  make: string;
  model: string;
  mileage?: number;
}
let myCar: Required<Car> = {
  make: "Toyota",
  model: "Camry",
  mileage: 50000, // `Required` forces mileage ti be defined
};

// Record
// Record is a shortcut to defining an object type with a specific key type and value type.

//example
const nameAgeMap: Record<string, number> = {
  Alice: 25,
  Bob: 30,
};

//Record<string, number> is equivalent to { [key: string]: number }

//Omit
//Omit removes keys from an object type.

interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, "age" | "location"> = {
  name: "Bob",
  // `Omit` has removed age and location from the type and they can't be defined here
};

//Pick
//Pick removes all but the specified keys from an object type.

//Example
interface Person {
  name: string;
  age: number;
  location?: string;
}

const nob: Pick<Person, "name"> = {
  name: "Nob",
  // `pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

//Exclude
//Exclued removes types from a union.

//Example
type Primitive = string | number | boolean;
// const value: Exclude<Primitive, string> = true;// a string cannot be used here since Exclude removed it from the type.

//ReturnType
//ReturnType extracts the return type of a function type.

//Example
type PointGenerator = () => { x: number; y: number };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20,
};

// Parameters
// Parameters extracts the parameter types from a function type as an array.

//Example
type PointPrinter = (p: { x: number; y: number }) => void;
const printPoint: Parameters<PointPrinter>[0] = { x: 10, y: 20 };

// ReadOnly
// ReadOnly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value

//Keep in mind TypeScript will prevent this at compile time, but in theory since it is compiled down to JavaScript you can still override a readonly property.

//Example
interface Person {
  name: string;
  age: number;
}
const person: Readonly<Person> = {
  name: "Dylan",
  age: 35,
};
person.name = "Israel";// error: cannot assign name because its read-only property

