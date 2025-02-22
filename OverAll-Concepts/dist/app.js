"use strict";
function createUser() {
    const user = {
        id: 1,
        name: "Hammad Mustafa",
        email: "hammad123@example.com",
        isActive: true
    };
    return user;
}
console.log(createUser());
function processInput(val) {
    if (typeof val === "number") {
        return `Number ${val.toString()}`;
    }
    else {
        return `String ${val}`;
    }
}
// return input
let a = processInput(2);
console.log(a);
let b = processInput("Hello World");
console.log(b);
// Question3
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    // super(make,model,year)
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    getInfo() {
        return `doors: ${this.doors}`;
    }
}
class Motorcycle extends Vehicle {
    // super(make,model,year)
    constructor(make, model, year, doors, hasSideCar) {
        super(make, model, year);
        this.hasSideCar = hasSideCar;
    }
    getInfo() {
        return `hasSideCar: ${this.hasSideCar}`;
    }
}
const myCar = new Car("Toyota", "Corolla", 2022, 6);
console.log(myCar.getInfo());
const myMotorcycle = new Motorcycle("Harley-Davidson", "F1", 2020, 2, true);
console.log(myMotorcycle.getInfo());
// Question5
class Shape {
    constructor(color) {
        this.color = color;
    }
    // return Number(this.color);
    // }
    getColor() {
        return this.color;
    }
}
class Circle1 extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle = new Circle1("Red", 7);
console.log("My circle's color is " + circle.getColor() + "and its area is " + circle.calculateArea());
const rectAngle = new Rectangle("Green", 3, 4);
console.log("My rectangle's color is " + rectAngle.getColor() + " and its area is " + rectAngle.calculateArea());
function createProduct(prod) {
    return prod;
}
const prod1 = ({
    id: 12,
    name: "Bat",
    price: 122112,
    category: "Sports"
});
console.log(createProduct(prod1));
// Question 7: Class Inheritance - Extending a Base Class
// Create a base class Employee with name (string), salary (number), and a method getDetails() that returns the employee's name and salary. Then, create two subclasses: Developer with an additional property programmingLanguage (string) and an overridden getDetails() method, and Designer with an additional property toolUsed (string) and an overridden getDetails() method. Create instances of both classes and call getDetails() on each.
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `The name of Employee is ${this.name} and the salary is ${this.salary}`;
    }
}
class Developer extends Employee {
    constructor(name, salary, programmingLanguage) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }
    getDetails() {
        return `${super.getDetails()} and works with the ${this.programmingLanguage} programming language`;
    }
}
class Designer extends Employee {
    constructor(name, salary, toolUsed) {
        super(name, salary);
        this.toolUsed = toolUsed;
    }
    getDetails() {
        return `${super.getDetails()} and as a Designer he used the following tools : ${this.toolUsed} `;
    }
}
const designer = new Designer("Hammad", 100000, ["Adobe illustrator", "Photoshop", "Adobe fireFly"]);
designer.getDetails();
const developer1 = new Developer("Hammad", 100000, "JavaScript");
developer1.getDetails();
// Question 8: Access Modifiers - Using Private, Protected, and Readonly
// Create a class Student with a public property name (string), a private property grades (array of numbers), a protected property school (string), and a readonly property studentID (number) that is initialized in the constructor. Implement methods to add a grade to the grades array and get the average grade. Try accessing the properties from inside and outside the class to test access modifiers.
class Student {
    constructor(name, studentID, school) {
        this.name = name;
        this.grades = [];
        this.school = school;
        this.studentID = studentID;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getAvgGrade() {
        if (this.grades.length === 0)
            return 0;
        let sum = 0;
        for (let grade of this.grades) {
            sum += grade;
        }
        return sum / this.grades.length;
    }
    getGrades() {
        return [...this.grades];
    }
}
class HighSchoolStudent extends Student {
    constructor(name, studentID, school) {
        super(name, studentID, school);
    }
    getSchoolName() {
        return `This student studies at ${this.school}`;
    }
}
const student1 = new Student("Hammad", 101, "ABC High School");
console.log(student1.name);
console.log(student1.studentID);
student1.addGrade(85);
student1.addGrade(90);
student1.addGrade(78);
console.log("Average Grade:", student1.getAvgGrade());
console.log("All Grades:", student1.getGrades());
const student2 = new HighSchoolStudent("Ali", 102, "XYZ School");
console.log(student2.getSchoolName());
// Question 10: Abstract Classes - Creating and Extending
// Create an abstract class Animal with a protected property species (string), a constructor that sets the species, an abstract method makeSound() that returns a string, and a concrete method getSpecies() that returns the species. Then, create two classes: Dog with a makeSound() method that returns "Woof!", and Cat with a makeSound() method that returns "Meow!". Create instances of both classes, call makeSound(), and getSpecies().
class Car2 {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    displayCar() {
        console.log(`Car: ${this.brand} ${this.model}, Price: $${this.price}`);
    }
}
const car1 = new Car2("Toyota", "Corolla", 25000);
const car2 = new Car2("Honda", "Civic", 28000);
car1.displayCar();
car2.displayCar();
//   Question 11: Generics - Creating a Generic Function with Index Search
//   Create a generic function findIndex<T>(arr: T[], value: T): number that takes an array of any type and a value to search for. The function should return the index of the value if found; otherwise, return -1. Call this function with different types of arrays (e.g., an array of numbers, an array of strings) and log the results.
function findIndex(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value)
            return i;
    }
    return -1;
}
console.log(findIndex([1, 2, 3, 4], 3));
console.log(findIndex(["apple", "banana"], "banana"));
function useVehicle(vehicle) {
    if ("drive" in vehicle) {
        console.log(vehicle.drive());
    }
    else {
        console.log(vehicle.ride());
    }
}
// Example Usage
const myCar1 = {
    drive: () => "Driving a car!"
};
const myBike = {
    ride: () => "Riding a bike!"
};
useVehicle(myCar1);
useVehicle(myBike);
function describeEmployee(emp) {
    console.log(`Name: ${emp.name}, Age: ${emp.age}, Job: ${emp.jobTitle}`);
}
const emp = { name: "Hammad", age: 25, jobTitle: "Software Engineer" };
describeEmployee(emp);
function makeSound(pet) {
    if ("bark" in pet) {
        console.log(pet.bark());
    }
    else {
        console.log(pet.meow());
    }
}
const myDog = { bark: () => "Woof!" };
const myCat = { meow: () => "Meow!" };
makeSound(myDog);
makeSound(myCat);
class Circle2 {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea1() {
        return Math.PI * this.radius * this.radius;
    }
    getType() {
        return "Circle";
    }
}
const circle1 = new Circle2(5);
console.log(circle1.getType());
console.log(circle1.calculateArea1());
