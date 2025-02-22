Here is the **complete** `README.md` file with proper formatting and structure:  

---

```md
# 📌 Functions and Types in TypeScript

Functions in TypeScript are similar to JavaScript but with added type safety. You can specify the types of parameters and return values, making your code more predictable and less error-prone.

---

## 🟢 1. Function Parameter Types & Return Types

In TypeScript, every function should have defined types for parameters and return values.

### ✅ A. Defining Parameter Types

🔹 **Real-World Example:** Imagine a calculator function that adds two numbers. You must ensure it always receives numbers, not strings.

```ts
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 3)); // ✅ Output: 8
// console.log(add("5", "3")); // ❌ Error: Argument type mismatch
```

✔ `a: number, b: number` ensures only numbers are accepted.  
✔ `: number` after `()` means the function must return a number.

### ✅ B. Return Type is void (No Return)

If a function does not return anything, use `void`.

🔹 **Real-World Example:** A function that logs a greeting message.

```ts
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
greet("Ali"); // ✅ Output: Hello, Ali!
```

✔ The function performs an action but does not return a value.

---

## 🟢 2. Optional and Default Parameters

### ✅ A. Optional Parameters (?)

Some parameters may not always be required.

🔹 **Real-World Example:** A user profile update may or may not include an email.

```ts
function updateUser(name: string, email?: string): void {
  if (email) {
    console.log(`User: ${name}, Email: ${email}`);
  } else {
    console.log(`User: ${name}, Email not provided`);
  }
}
updateUser("Sara"); // ✅ Output: User: Sara, Email not provided
updateUser("Ali", "ali@email.com"); // ✅ Output: User: Ali, Email: ali@email.com
```

✔ `email?` means this parameter is optional.

### ✅ B. Default Parameters

If a parameter is not provided, you can assign a default value.

🔹 **Real-World Example:** A currency conversion function that defaults to `USD`.

```ts
function convertCurrency(amount: number, currency: string = "USD"): string {
  return `${amount} ${currency}`;
}
console.log(convertCurrency(100)); // ✅ Output: 100 USD
console.log(convertCurrency(100, "EUR")); // ✅ Output: 100 EUR
```

✔ If no currency is provided, it defaults to `"USD"`.

---

## 🟢 3. Function Overloading

Function overloading allows multiple function signatures for different parameter types.

### ✅ A. What is Function Overloading?

🔹 **Real-World Example:** A search function should work for both user ID (`number`) and username (`string`).

```ts
// Overload signatures
function searchUser(id: number): string;
function searchUser(username: string): string;

// Function implementation
function searchUser(param: number | string): string {
  if (typeof param === "number") {
    return `User found with ID: ${param}`;
  } else {
    return `User found with Username: ${param}`;
  }
}

console.log(searchUser(101)); // ✅ Output: User found with ID: 101
console.log(searchUser("Ali")); // ✅ Output: User found with Username: Ali
```

✔ `searchUser(id: number): string;` allows calling with a number.  
✔ `searchUser(username: string): string;` allows calling with a string.  
✔ The implementation handles both cases correctly.

---

## 🟢 4. Arrow Functions with Types

Arrow functions (`=>`) in TypeScript work the same as JavaScript but with explicit types.

### ✅ A. Writing Typed Arrow Functions

🔹 **Real-World Example:** A function to calculate the area of a rectangle.

```ts
const getArea = (width: number, height: number): number => width * height;
console.log(getArea(5, 10)); // ✅ Output: 50
```

✔ Parameters have types: `(width: number, height: number)`.  
✔ The return type is `number`.  
✔ Arrow functions make the syntax shorter and cleaner.

### ✅ B. Arrow Function with Optional Parameters

```ts
const greet = (name: string, age?: number): string => {
  return age ? `Hello ${name}, you are ${age} years old.` : `Hello ${name}!`;
};
console.log(greet("Ali")); // ✅ Output: Hello Ali!
console.log(greet("Sara", 25)); // ✅ Output: Hello Sara, you are 25 years old.
```

✔ `age?` means it is optional.

---

## ✅ Summary Table

| Feature               | Example                                    | Description                                 |
|-----------------------|--------------------------------|--------------------------------|
| **Typed Parameters** | `function add(a: number, b: number): number` | Ensures correct argument types |
| **Return Type** | `function greet(): void` | `void` means no return value |
| **Optional Parameter** | `email?: string` | Parameter may or may not be provided |
| **Default Parameter** | `currency: string = "USD"` | Assigns a default value if no value is given |
| **Function Overloading** | `function searchUser(id: number): string;` | Allows multiple function signatures |
| **Arrow Function** | `(a: number, b: number) => a + b` | Shorter syntax with type safety |

---

## 📝 Practice Questions

### 🔹 **Basic Questions**
1️⃣ **Create a function `multiply` that takes two numbers and returns their product.**  
2️⃣ **Write a function `greetUser` that takes a name and an optional age.**  
   - If the age is given, return `"Hello Ali, you are 25 years old."`  
   - Otherwise, return `"Hello Ali!"`

### 🔹 **Advanced Questions**
3️⃣ **Implement a function `getDiscount` that takes an amount (`number`) and a discount percentage (optional, default is 10%).**  
   - The function should return the discounted price.

4️⃣ **Write a function `getUserInfo` that supports two overloads:**
   - If given a number, it returns `"User ID: 101"`
   - If given a string, it returns `"Username: Ali"`

---

## 🎯 Conclusion

TypeScript functions provide strong type safety, reducing errors and improving code predictability.  
Key takeaways:
✅ Define parameter and return types.  
✅ Use optional (`?`) and default parameters for flexibility.  
✅ Function overloading allows multiple function signatures.  
✅ Arrow functions simplify syntax while maintaining type safety.

