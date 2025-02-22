# Object Types in TypeScript

In JavaScript, objects are flexible, but TypeScript enforces type safety.

## 📌 A. What is an Object Type?
An object type defines the structure an object should follow.

🔹 **Real-World Example:** Imagine you are filling out a student registration form. You must provide a name and age, but you cannot enter unexpected fields like `favoriteMovie`.

### ✅ Example: Inline Object Type
```ts
let student: { name: string; age: number } = {
  name: "Hammad",
  age: 20
};
console.log(student.name); // ✅ Output: Hammad
```
✔ You cannot add extra properties like `hobby: "Reading"` because it’s not defined in the type.

---

## 📌 B. What is a Type Alias?
A type alias allows us to reuse the same object structure multiple times.

🔹 **Real-World Example:** In a company, all employees must have a name and salary. Instead of writing the same structure multiple times, we can define it once and reuse it.

```ts
type Employee = { name: string; salary: number };
let emp1: Employee = { name: "Ali", salary: 5000 };
let emp2: Employee = { name: "Sara", salary: 6000 };
```
✔ `emp1` and `emp2` follow the same structure, ensuring consistency.

---

## 🟢 2. What is an Interface in TypeScript?
An interface defines the shape of an object, just like a type alias.

🔹 **Real-World Example:** Think of an interface as a contract. If a company says, "Every employee must have a name, age, and department," then every employee must follow that structure.

```ts
interface Employee {
  name: string;
  age: number;
  department: string;
}
let emp: Employee = { name: "Ali", age: 27, department: "IT" };
console.log(emp.name); // ✅ Output: Ali
```
✔ The `Employee` interface ensures all objects follow the contract.

---

## 🟢 3. Difference Between `type` and `interface`
Both `type` and `interface` are used to define object types, but there are key differences.

| Feature        | type (Alias) | interface |
|---------------|-------------|-----------|
| **Usage**     | Can be used for objects, functions, unions, intersections, etc. | Used only for objects and classes |
| **Extending** | Uses `&` to extend multiple types | Uses `extends` for inheritance |
| **Merging**   | Cannot be merged | Can be merged automatically |
| **Best for**  | Simple types, complex unions, and functions | Objects and class structure |

### ✅ Extending an Object
✔ **Using `type` (with `&`)**
```ts
type Person = { name: string; age: number };
type Employee = Person & { jobTitle: string };

let worker: Employee = { name: "Sara", age: 28, jobTitle: "Developer" };
```

✔ **Using `interface` (with `extends`)**
```ts
interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  jobTitle: string;
}
let worker: Employee = { name: "Sara", age: 28, jobTitle: "Developer" };
```
✅ `type` is flexible, `interface` is better for objects! 🚀

---

## 🟢 4. Optional and Readonly Properties
### 📌 A. Optional Properties (`?`)
Some properties might not always be required.

🔹 **Real-World Example:** A social media profile might not always have a bio.

```ts
interface UserProfile {
  name: string;
  age: number;
  bio?: string; // Optional
}
let user1: UserProfile = { name: "Ali", age: 30 }; // ✅ Works
let user2: UserProfile = { name: "Sara", age: 25, bio: "Photographer" }; // ✅ Works
```
✔ `user1` has no bio, but `user2` includes it.

### 📌 B. Readonly Properties (`readonly`)
To prevent modification, use `readonly`.

🔹 **Real-World Example:** A Product ID should never change after being created.

```ts
interface Product {
  readonly id: number;
  name: string;
  price: number;
}
let item: Product = { id: 1, name: "Laptop", price: 1200 };
// item.id = 2; // ❌ Error: Cannot modify readonly property
```
✔ The `id` cannot be changed.

---

## 🟢 5. Extending Interfaces
Interfaces can inherit from other interfaces using `extends`.

🔹 **Real-World Example:** A Manager is an Employee, but also has extra permissions.

```ts
interface Employee {
  name: string;
  salary: number;
}
interface Manager extends Employee {
  department: string;
}
let boss: Manager = { name: "Ali", salary: 8000, department: "IT" };
console.log(boss.department); // ✅ Output: IT
```
✔ `Manager` inherits `name` and `salary` from `Employee`.

---

## 🟢 6. Index Signatures
If an object has dynamic keys (unknown in advance), we use index signatures.

🔹 **Real-World Example:** A Dictionary App where you don’t know the words in advance.

```ts
interface Dictionary {
  [key: string]: string;
}
let translations: Dictionary = {
  hello: "Hola",
  world: "Mundo"
};
console.log(translations["hello"]); // ✅ Output: Hola
```
✔ Any string key can be added to `translations`.

---

## ✅ Summary Table

| Feature               | Example                                          | Description                                  |
|-----------------------|--------------------------------------------------|----------------------------------------------|
| **Object Types**      | `{ name: "Ali", age: 25 }`                      | Defines a structured object                 |
| **Type Alias**        | `type Employee = { name: string; salary: number }` | Used for object shapes and complex unions   |
| **Interfaces**        | `interface Person { name: string; }`            | Best for objects and class definitions      |
| **Optional Properties** | `age?: number;`                                  | Allows properties to be optional            |
| **Readonly Properties** | `readonly id: number;`                          | Prevents modification of properties        |
| **Extending Interfaces** | `interface Employee extends Person {}`          | Inherits properties from another interface  |
| **Index Signatures**  | `[key: string]: string;`                         | Allows objects with unknown keys           |

---

## 📝 Practice Questions

### 🔹 Basic Questions
1️⃣ Create an object type for a "Book" with `title` (string), `author` (string), and `pages` (number).
2️⃣ Define an interface for a "Student" with `name` (string), `age` (number), and an optional `grade` (string).

### 🔹 Advanced Questions
3️⃣ Create an `Employee` interface that extends `Person` and adds a `salary` (number). Define an object based on this interface.
4️⃣ Define an index signature interface for a "Config" object where keys are strings and values are numbers. Create an object using this interface.
