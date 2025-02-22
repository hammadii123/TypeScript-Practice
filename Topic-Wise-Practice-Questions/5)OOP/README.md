Here is the complete `README.md` file for your TypeScript OOP guide:  

---

# **Classes and Object-Oriented Programming (OOP) in TypeScript**  

## **What is Object-Oriented Programming (OOP)?**  
OOP is a programming style that helps us organize code into reusable and manageable blueprints called **classes**.  

- **Without OOP:** Code becomes messy because everything is written in a procedural way (functions and variables scattered everywhere).  
- **With OOP:** We group related data (**properties**) and functions (**methods**) inside **classes**, making the code structured, reusable, and maintainable.  

---

## **🟢 1. What is a Class?**  
A **class** is a blueprint or template used to create **objects**.  

🔹 **Example Without Classes:**  
```ts
let car1 = {
  brand: "Toyota",
  model: "Corolla",
  price: 25000,
};

let car2 = {
  brand: "Honda",
  model: "Civic",
  price: 28000,
};

// Problem: What if we want to add a method to display car details? We have to manually add it to every object!
```

✅ **Using a Class:**  
```ts
class Car {
  brand: string;
  model: string;
  price: number;

  constructor(brand: string, model: string, price: number) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  displayCar(): void {
    console.log(`Car: ${this.brand} ${this.model}, Price: $${this.price}`);
  }
}

const car1 = new Car("Toyota", "Corolla", 25000);
const car2 = new Car("Honda", "Civic", 28000);

car1.displayCar(); // ✅ Car: Toyota Corolla, Price: $25000
car2.displayCar(); // ✅ Car: Honda Civic, Price: $28000
```

### **🔹 Why Use a Class?**  
✔ Avoids code repetition  
✔ Groups related data and behavior in one place  
✔ Makes code easier to manage and extend  

---

## **🟢 2. Public, Private, and Protected Members (Encapsulation)**  

### **What is Encapsulation?**  
Encapsulation means **hiding sensitive data** and only allowing controlled access.  

### **Access Modifiers in TypeScript:**  

| Modifier   | Accessible Inside Class? | Accessible Outside Class? | Accessible in Child Class? |
|------------|-------------------------|---------------------------|---------------------------|
| `public`   | ✅ Yes                    | ✅ Yes                    | ✅ Yes                    |
| `private`  | ✅ Yes                    | ❌ No                     | ❌ No                     |
| `protected` | ✅ Yes                    | ❌ No                     | ✅ Yes                    |

✅ **Public (Default)**  
```ts
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const p1 = new Person("Ali");
console.log(p1.name); // ✅ Works fine
p1.greet(); // ✅ Hello, my name is Ali.
```

✅ **Private (Restricted Access)**  
```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited: $${amount}, New Balance: $${this.balance}`);
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();
account.deposit(1000); // ✅ Deposited: $1000, New Balance: $1000
console.log(account.getBalance()); // ✅ Output: 1000
// console.log(account.balance); ❌ Error: 'balance' is private
```

✅ **Protected (Accessible in Derived Classes)**  
```ts
class Employee {
  protected salary: number = 50000;
}

class Manager extends Employee {
  showSalary(): void {
    console.log(`Manager's salary: $${this.salary}`);
  }
}

const manager = new Manager();
manager.showSalary(); // ✅ Output: Manager's salary: $50000
// console.log(manager.salary); ❌ Error: 'salary' is protected
```

---

## **🟢 3. Readonly Properties**  
🔹 Prevents accidental modifications.  
```ts
class Company {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const c1 = new Company("TechCorp");
console.log(c1.name); // ✅ TechCorp
// c1.name = "NewCorp"; ❌ Error: Cannot assign to 'name' because it is a read-only property
```

---

## **🟢 4. Inheritance (`extends`)**  
🔹 Allows one class to inherit properties & methods from another class.  
```ts
class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // ✅ Buddy makes a sound.
myDog.bark(); // ✅ Buddy barks.
```

---

## **🟢 5. Getters & Setters (Encapsulation)**  
Control how properties are accessed and modified.  
```ts
class Product {
  private _price: number = 0;

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) throw new Error("Price cannot be negative");
    this._price = value;
  }
}

const item = new Product();
item.price = 100; // ✅ Works fine
console.log(item.price); // ✅ Output: 100
// item.price = -50; ❌ Error: Price cannot be negative
```

---

## **🎯 Summary**  

| Concept        | Why Use It?             | What If We Don’t Use It?    |
|---------------|------------------------|----------------------------|
| **Classes**   | Organizes code          | Code becomes messy         |
| **Encapsulation** | Protects data      | Anyone can modify sensitive data |
| **Inheritance** | Avoids code repetition | Need to rewrite code for every object |
| **Getters & Setters** | Ensures data integrity | Invalid values can be set |

---

## **✅ Practice Questions**  

### **🔹 Basic Questions**  
1️⃣ Create a `Book` class with `title` and `author` properties and a method `displayInfo()`.  
2️⃣ Create a `BankAccount` class with `deposit()` and `getBalance()` methods. Make `balance` private.  

### **🔹 Advanced Questions**  
3️⃣ Create an `Employee` class with `protected salary` and a `Manager` class that extends it. Display the salary.  
4️⃣ Create an **abstract class** `Vehicle` with a method `move()`. Implement it in `Car` and `Bike` classes.  

---

## **🚀 Conclusion**  
By using **Classes and OOP in TypeScript**, we can make our code **more structured, reusable, and maintainable**. Mastering these concepts will help you write **clean and scalable applications**. 🚀  

---
