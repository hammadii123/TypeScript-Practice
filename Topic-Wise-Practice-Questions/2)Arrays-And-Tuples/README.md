# 📌 Arrays and Tuples in TypeScript

Arrays and Tuples are important in TypeScript because they allow us to store multiple values efficiently. TypeScript improves them by adding type safety.

## 🟢 1. Arrays in TypeScript

### 📌 A. Defining Typed Arrays

In JavaScript, arrays can contain any type of value:

```js
let numbers = [1, "two", 3, true]; // ❌ No type safety
```

TypeScript fixes this by enforcing typed arrays.

#### ✅ 1. Number Array

```ts
let numbers: number[] = [1, 2, 3, 4];
```

✔ Example: List of prices

```ts
let prices: number[] = [100, 200, 300];
console.log(prices[1]); // ✅ Output: 200
```

#### ✅ 2. String Array

```ts
let names: string[] = ["Ali", "Hammad", "Sara"];
```

✔ Example: List of cities

```ts
let cities: string[] = ["Lahore", "Karachi", "Islamabad"];
console.log(cities[0]); // ✅ Output: Lahore
```

#### ✅ 3. Boolean Array

```ts
let flags: boolean[] = [true, false, true];
```

✔ Example: Checking status

```ts
let taskCompleted: boolean[] = [true, false, true, false];
```

#### ✅ 4. Using Array<T> Syntax

We can also define arrays using generic syntax:

```ts
let scores: Array<number> = [80, 90, 100];
```

✔ Same as:

```ts
let scores: number[] = [80, 90, 100];
```

### 📌 B. Using Readonly Arrays

By default, arrays can be modified, but readonly arrays prevent modification.

```ts
let fruits: readonly string[] = ["Apple", "Banana", "Mango"];
// fruits.push("Orange"); // ❌ Error: Cannot add to a readonly array
```

✔ Example: List of permanent settings

```ts
let config: readonly number[] = [1920, 1080, 60]; // Resolution settings
```

### 📌 C. Array Methods

TypeScript supports all JavaScript array methods:

```ts
let numbers: number[] = [10, 20, 30, 40];

// ✅ Add a value
numbers.push(50); // [10, 20, 30, 40, 50]

// ✅ Remove the last value
numbers.pop(); // [10, 20, 30, 40]

// ✅ Remove the first value
numbers.shift(); // [20, 30, 40]

// ✅ Add a value at the start
numbers.unshift(5); // [5, 20, 30, 40]
```

✔ Example: Sorting names

```ts
let students: string[] = ["Hammad", "Ali", "Sara"];
students.sort();
console.log(students); // ✅ Output: ["Ali", "Hammad", "Sara"]
```

## 🟢 2. Tuples in TypeScript

Tuples are fixed-length arrays where each element can have a different type.

### 📌 A. Defining Tuples

```ts
let person: [string, number] = ["Hammad", 25];
console.log(person[0]); // ✅ Output: Hammad
console.log(person[1]); // ✅ Output: 25
```

✔ Example: Student Record

```ts
let student: [string, number, boolean] = ["Ali", 22, true];
```

### 📌 B. Tuple with readonly

To make tuples immutable, use readonly:

```ts
let settings: readonly [number, number] = [1920, 1080];
// settings[0] = 1280; // ❌ Error: Readonly tuple
```

### 📌 C. Using Tuples in Functions

Tuples can be used as return types in functions.

✔ Example: Returning multiple values from a function

```ts
function getUser(): [string, number] {
  return ["Hammad", 25];
}
let user = getUser();
console.log(user[0]); // ✅ Output: Hammad
console.log(user[1]); // ✅ Output: 25
```

## ✅ Summary Table

| Feature            | Example                                   | Description                                      |
|--------------------|-------------------------------------------|--------------------------------------------------|
| **Typed Arrays**   | `let nums: number[] = [1, 2, 3];`         | Enforces type safety in arrays                  |
| **Readonly Arrays**| `let data: readonly string[] = ["A", "B"];` | Prevents modification of arrays                 |
| **Tuples**        | `let person: [string, number] = ["Ali", 30];` | Fixed-length arrays with multiple types         |
| **Readonly Tuples**| `let settings: readonly [number, number]` | Prevents modification of tuple values           |

## 📝 Practice Questions

### 🔹 Basic Questions
1️⃣ Create a `number[]` array with 5 numbers and print the second element.

2️⃣ Define a tuple `[string, number]` to store a name and age, and print both values.

### 🔹 Advanced Questions
3️⃣ Create a function that returns a tuple `[string, number, boolean]`, representing a user’s name, age, and status (active/inactive).

4️⃣ Make an immutable (readonly) tuple `[string, number, string]` to store a book’s title, year of publication, and author. Try modifying a value and note the error.
