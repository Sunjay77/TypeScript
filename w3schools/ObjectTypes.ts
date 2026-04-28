//ObjectTypes

const car = {
  type: "Toyota",
};
car.type = "Ford"; // no error
car.type = 2; // Error: Type 'number' is not assignable to type 'string'.

//Optional Properties
//Optional Properties are properties that don't have to be defined in the object definition.

//example without an optional property

const car: { type: string; mileage: number } = {
  // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car.mileage = 2000;

//example with an optional property

const car: { type: string; mileage?: number } = {
  // no error
  type: "Toyota",
};
car.mileage = 2000;


//Index Signatures
// can be used for objects without a defined list of properties

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

//Index signatures like this one can also be expressed with utility types like Record<string,number>.

