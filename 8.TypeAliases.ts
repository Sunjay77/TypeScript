// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

// example: Union and intersection types

type Animal = { name: string };
type Bear = Animal & { honey: boolean };
const bear: Bear = { name: "Winnie", honey: true };

type Status = "success" | "error";
let response: Status = "success";

// Interfaces: Interfaces are similar to type aliases, except they can only be used with objects

interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};

// example: Interface merging

interface Ant {
  name: string;
}
interface Ant {
  age: number;
}
const ant: Ant = { name: "Bob", age: 3 };

// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

interface Rectangle {
  height: number;
  width: number;
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};