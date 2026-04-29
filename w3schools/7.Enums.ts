// Enums: An enum is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors string and numeric.

//Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value

enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.


//Numeric Enums - Initialized
//you can set the value of the first numeric enum and have it auto increment from that:

enum CardinalDirections {
  North = 1,
  East,
  South,
  West
}
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);

//Numeric Enums - Fully Initialized
//you can assign unique number values for each enum value
//Then the values will not be incremented automatically:

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);


//String Enums
// String enums are similar to numeric enums, but instead of assigning numbers, you assign strings:

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
// logs "UP"
console.log(Direction.Up);
// logs "DOWN"
console.log(Direction.Down);