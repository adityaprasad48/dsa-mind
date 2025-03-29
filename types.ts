// 1. Basic Types

// Basic, Array, Tuple, Union |, Intersection &, Generics<T>, type, interface, utility types Partial, Required, Omit, ReadOnly

let num: number = 10;
let str: string = "Hello";
let isActive: boolean = true;

console.log({ num, str, isActive });

// 2. Array Types
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// # Tuple Types: fixed length and type
let user: [string, number] = ["John", 25];

// 3. enum types
// Useful for defining named constants:
enum Status {
  Pending,
  Approved,
  Rejected,
}

let orderStatus: Status = Status.Approved;

// 4. Union Types: can hold multiple types
let value: string | number;
value = "Hello";
value = 100;

// 5. Intersection Types (&)
type Person = { name: string };
type Employee = { employeeId: number };

type Worker = Person & Employee;

const worker: Worker = { name: "Alice", employeeId: 123 };

// 6. Type alias
type User = { id: number; name: string };

let user: User = { id: 1, name: "John" };

// 7. Interface: similar to type but extendable
interface User {
  id: number;
  name: string;
}

let user: User = { id: 1, name: "John" };

// 8. Generics: For reusable and flexible types:
function identity<T>(value: T): T {
  return value;
}

let output = identity<string>("Hello"); // Works with any type

// 9. Built in types
type User = { id: number; name: string; email?: string };

type RequiredUser = Required<User>; // All properties required
type PartialUser = Partial<User>; // All properties optional
type ReadonlyUser = Readonly<User>; // Makes properties readonly
type UserWithoutId = Omit<User, "id">; // Removes "id" from type


// Utility Types
let num: number = 42;
let text: string = "Hello";
let isReady: boolean = true;
let empty: null = null;
let notDefined: undefined;
const key: symbol = Symbol("id");
let big: bigint = 100n;
// can store any non primitive value
let obj: object = { name: "Alice" };
let nums: number[] = [1, 2, 3];
let t: [string, number] = ["hi", 10];
enum Role { User, Admin };
let x: any = "anything";
let y: unknown = "maybe";
function log(): void { console.log("Hi"); }
function fail(): never { throw new Error("Oops"); }
