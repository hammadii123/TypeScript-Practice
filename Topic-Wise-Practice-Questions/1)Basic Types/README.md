# TypeScript Basic Types

## 1. Number (number)
Represents both integers and decimals.

```ts
let num1: number = 10;
let num2: number = 3.14;
let num3: number = -100;
```

### ✔ Real-world Example:
```ts
let productPrice: number = 49.99;  // Price of a product
let discountPercentage: number = 10; // Discount in percentage
let finalPrice: number = productPrice - (productPrice * discountPercentage) / 100;
console.log(finalPrice); // 44.99
```

---

## 2. String (string)
Represents text values.

```ts
let firstName: string = "Hammad";
let greeting: string = `Hello, ${firstName}!`;  // Template literal
console.log(greeting); // Hello, Hammad!
```

### ✔ Real-world Example:
```ts
let customerName: string = "Ali";
let orderMessage: string = `Dear ${customerName}, your order has been shipped!`;
console.log(orderMessage);
```

---

## 3. Boolean (boolean)
Represents true or false.

```ts
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;
```

### ✔ Real-world Example:
```ts
let isUserLoggedIn: boolean = false;
if (isUserLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}
```

---

## 4. Any (any)
Allows any type of value. **Use only if necessary (not recommended).**

```ts
let myValue: any = "Hello";
myValue = 100; // ✅ No error
myValue = true; // ✅ No error
```

### ✔ Real-world Example (Not Recommended):
```ts
let userData: any = "User123";
userData = { name: "Ali", age: 25 };  // No error!
console.log(userData);
```

🚨 **Why is `any` dangerous?** It removes TypeScript’s type safety and behaves like JavaScript.

---

## 5. Unknown (unknown)
Similar to `any` but safer. We must check its type before using it.

```ts
let data: unknown;
data = "Hello";
data = 123;
if (typeof data === "number") {
  console.log(data + 10); // Works only if it's a number
}
```

### ✔ Real-world Example:
```ts
function processInput(input: unknown) {
  if (typeof input === "string") {
    console.log(`User said: ${input.toUpperCase()}`);
  } else {
    console.log("Invalid input type.");
  }
}
processInput("hello"); // User said: HELLO
processInput(123);     // Invalid input type.
```
🚀 **Use `unknown` instead of `any` when possible to ensure type checking.**

---

## 6. Void (void)
Used for functions that don’t return a value.

```ts
function logMessage(): void {
  console.log("This function does not return anything.");
}
```

### ✔ Real-world Example:
```ts
function showAlert(message: string): void {
  alert(message);
}
showAlert("Hello, user!");
```

---

## 7. Null and Undefined (null, undefined)
- `null` means an empty or missing value.
- `undefined` means a variable was declared but not assigned a value.

```ts
let myVar: null = null;
let myVar2: undefined = undefined;
```

### ✔ Real-world Example:
```ts
function getUser(): string | null {
  return null; // User not found
}
let user = getUser();
if (user === null) {
  console.log("User not found.");
}
```

---

## 8. Type Inference
TypeScript can automatically detect the type.

```ts
let x = 10; // TypeScript understands x is a number
// x = "hello"; // ❌ Error
```

### ✔ Real-world Example:
```ts
let city = "Lahore"; // TypeScript knows it's a string
console.log(`Welcome to ${city}`);
```

🚀 **Best Practice:** Always let TypeScript infer types automatically unless you need to specify them.

---

## ✅ Summary

| Type       | Example                       | Description                           |
|------------|-------------------------------|---------------------------------------|
| number     | `let age: number = 25;`      | For numbers                          |
| string     | `let name: string = "Ali";` | For text values                      |
| boolean    | `let isDone: boolean = true;` | True/False values                     |
| any        | `let x: any = "Hello";`     | Avoid using, allows any type         |
| unknown    | `let y: unknown;`           | Safer alternative to `any`           |
| void       | `function log(): void {}`    | For functions that don’t return anything |
| null       | `let z: null = null;`       | Represents an empty value            |
| undefined  | `let a: undefined;`         | Represents a variable with no value  |

---

## 📝 Practice Questions
Try solving these basic and advanced TypeScript problems.

### 🔹 Basic Questions
1️⃣ Write a function that takes two numbers as input and returns their sum. Make sure the parameters are of type `number`.
2️⃣ Create a variable `userName` of type `string` and assign it your name. Then print a welcome message using template literals.

### 🔹 Advanced Questions
3️⃣ Write a function that accepts an argument of type `unknown`. If it’s a string, return its length. If it’s a number, return its square. Otherwise, return `null`.
4️⃣ Write a function that takes an optional parameter `age` of type `number`. If `age` is not provided, it should return "Age not specified", otherwise return "User is X years old".

---

Happy Coding! 🚀

