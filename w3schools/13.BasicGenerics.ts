// Functions: Generics with functions help create more general functions that accurately represent the input and return types
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>("hello", 42)); // ['hello', 42]

// Type Script can also infer the type of the generic parameter from the function parameters.

//Classes: Generics can be used to create generalized classes, like map

class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue<number>("myNumber");
value.setValue(10);
console.log(value.toString()); // myNumber: 10

//TypeScript can also infer the type of the generic parameter if its used in constructor parameter.

//Type Aliases: Generics in the type aliases allow creating types that are more reusuable

//Example:
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };

// This also works with interfaces with the following syntax: interface Warpped<T>

// Default Value: Generics can be assigned default values which apply if no other value is specififed ot inferred

// Example:
class DefaultNamedValue<T = string> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let defaultValue = new DefaultNamedValue("myNumber");
defaultValue.setValue("myValue");
console.log(defaultValue.toString()); // myNumber: myValue\

//  Extends
// Constraints can be added to generics to limit what's allowed.
// The constraints make it possible to rely on more specific type when using generic type.

function createLoggedPair<S extends string | number, T extends string | number>(
  v1: S,
  v2: T,
): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}

// This can be combined with a default value