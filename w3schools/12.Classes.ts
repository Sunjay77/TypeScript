//Members: Types
// The members of class (properties & methods) are typed using type annotations, similar to variables.

class Person {
  name: string;
}

const person = new Person();
person.name = "Jane";

// Members: Visibility
// class members can also be given special modifiers that affect visibility.

// THere are three main visibility modifiers in TypeScript.
// 1. public - accessible from anywhere
// 2. private - accessible only within the class
// 3. protected - accessible within the class and its subclasses

class OldPerson {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new OldPerson("Jane");
console.log(operson.getName()); // person.name isn't accessible from outside the class since it's private

// Parameter Properties
// TypeScript provides a convenint way to define class members in the constructor by adding a visibility modifier to the parameter

class Person {
  //name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());

// Readonly
// similar to arrays, the readonly keyword can prevent class members from being changed.

class NewPerson {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at its declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const Newperson = new NewPerson("Jane");
console.log(Newperson.getName());

//Inheritance: Implements
// Interfaces can be used to define the type a class must follow through the implements keyword

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number,
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

// A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored

//Inheritance: Ectends
//Classes can extend each other through the extends keyword.
//A class can only extend one other class.

interface Shape {
  getArea: () => number;
}

class oval implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number,
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}

// Override
// When a class extends another class, it can replace the members of the parent class with the same name.
// Newer versions of TypeScript allow explicitly marking this with the override keyword

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(
    protected readonly width: number,
    protected readonly height: number,
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

// By default the override keyword is optional when overriding a method, and only helps to prevent accidentally overriding a method that does not exist.
// Use the setting noImplicitOverride to force it to be used when overrideing

//Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
// this is done by using the abstract keyword.

// members that are left unimplemented also use the abstract keyword

abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number,
  ) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

// Abstract classes cannot be directly instanitiated, as they do not have all their members implemented.