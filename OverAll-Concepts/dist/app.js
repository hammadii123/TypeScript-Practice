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
class Circle extends Shape {
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
const circle = new Circle("Red", 7);
console.log("My circle's color is " + circle.getColor() + "and its area is " + circle.calculateArea());
const rectAngle = new Rectangle("Green", 3, 4);
console.log("My rectangle's color is " + rectAngle.getColor() + " and its area is " + rectAngle.calculateArea());
