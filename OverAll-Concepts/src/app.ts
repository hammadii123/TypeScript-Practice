// Question1
interface User {
    id:number;
    name:string;
    email:string;
    isActive:boolean;


}

function createUser(){
    const user:User={
        id: 1,
        name: "Hammad Mustafa",
        email: "hammad123@example.com",
        isActive: true

    }
    return user;

}
console.log(createUser());




// Question 2
type Input= number|string;

function processInput(val :Input){
    if (typeof val === "number"){
        return `Number ${val.toString()}`;
        }
    
    else{

        return `String ${val}`;
    }
}
// return input
let a=processInput(2)
console.log(a);

let b=processInput("Hello World")

console.log(b);


// Question3
class Vehicle{
    make:string;
    model:string;
    year:number;

    constructor(make:string, model:string, year:number){
        this.make=make;
        this.model=model;
        this.year=year;
    }

    getInfo():string{
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}

class Car extends Vehicle{
    doors:number
    // super(make,model,year)
    constructor(make:string, model:string, year:number,doors:number){
     super(make,model,year)
     this.doors=doors;   
    }

    getInfo():string{
        return `doors: ${this.doors}`;
    }



}

class Motorcycle extends Vehicle{
    hasSideCar:boolean
    // super(make,model,year)
    constructor(make:string, model:string, year:number,doors:number,hasSideCar:boolean){
     super(make,model,year)
     this.hasSideCar=hasSideCar;   
    }

    getInfo():string{
        return `hasSideCar: ${this.hasSideCar}`;
    }

    
}

const myCar= new Car("Toyota","Corolla",2022,6)

console.log(myCar.getInfo());

const myMotorcycle= new Motorcycle("Harley-Davidson","F1",2020,2,true)

console.log(myMotorcycle.getInfo());






// Question5
abstract class Shape{
    protected color:string;
    constructor(color:string){
        this.color=color;
    }
     abstract calculateArea():number;
    // return Number(this.color);
    // }

    getColor():string{
        return this.color;
    }
}

class Circle1 extends Shape {
    radius:number;
    constructor(color:string, radius:number){
        super(color);
        this.radius=radius;
    }
    calculateArea(): number {
        
        return Math.PI*this.radius**2;
    }
}

class Rectangle extends Shape {
    width:number;
    height:number;
    constructor(color:string, width:number, height:number){
        super(color);
        this.width=width;
        this.height=height;
    }
    calculateArea(): number {
        
        return this.width*this.height;
    }
}

const circle=new Circle1("Red",7)

console.log("My circle's color is "+circle.getColor()+"and its area is "+circle.calculateArea())

const rectAngle= new Rectangle("Green",3,4);

console.log("My rectangle's color is "+rectAngle.getColor()+" and its area is "+rectAngle.calculateArea())




// Question 6: Types and Interfaces - Creating and Using Interfaces
// Create an interface called Product with the following properties: id (number), name (string), price (number), and category (string). Then, create a function createProduct that accepts an object of type Product and returns it. Finally, create a new product object and pass it to createProduct().

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;

}

function createProduct(prod: Product): Product {
    return prod
}

const prod1: Product = ({
    id: 12,
    name: "Bat",
    price: 122112,
    category: "Sports"
})

console.log(createProduct(prod1))


// Question 7: Class Inheritance - Extending a Base Class
// Create a base class Employee with name (string), salary (number), and a method getDetails() that returns the employee's name and salary. Then, create two subclasses: Developer with an additional property programmingLanguage (string) and an overridden getDetails() method, and Designer with an additional property toolUsed (string) and an overridden getDetails() method. Create instances of both classes and call getDetails() on each.

class Employee{
    name:string;
    salary:number;
    constructor(name:string,salary:number){
        this.name=name;
        this.salary=salary;

    }

    getDetails(){
        return `The name of Employee is ${this.name } and the salary is ${this.salary}`
    }
}

class Developer extends Employee{
    programmingLanguage:string;

    constructor(name:string,salary:number,programmingLanguage:string){
        super(name,salary);
        this.programmingLanguage=programmingLanguage;
    }

    getDetails(): string {
        return `${super.getDetails()} and works with the ${this.programmingLanguage} programming language`
    }
}


class Designer extends Employee{
   toolUsed:string[];

    constructor(name:string,salary:number,toolUsed:string[]){
        super(name,salary);
        this.toolUsed=toolUsed;
    }

    getDetails(): string {
        return `${super.getDetails()} and as a Designer he used the following tools : ${this.toolUsed} `
    }
}

const designer=new Designer("Hammad",100000,["Adobe illustrator","Photoshop","Adobe fireFly"])
designer.getDetails()



const developer1=new Developer("Hammad",100000,"JavaScript")
developer1.getDetails()



// Question 8: Access Modifiers - Using Private, Protected, and Readonly
// Create a class Student with a public property name (string), a private property grades (array of numbers), a protected property school (string), and a readonly property studentID (number) that is initialized in the constructor. Implement methods to add a grade to the grades array and get the average grade. Try accessing the properties from inside and outside the class to test access modifiers.

class Student {
    public name: string;      
    private grades: number[]; 
    protected school: string; 
    readonly studentID: number; 
    constructor(name: string, studentID: number, school: string) {
        this.name = name;
        this.grades = []; 
        this.school = school;
        this.studentID = studentID;
    }

   
    addGrade(grade: number): void {
        this.grades.push(grade);
    }

    
    getAvgGrade(): number {
        if (this.grades.length === 0) return 0; 

        let sum = 0;
        for (let grade of this.grades) {
            sum += grade;
        }

        return sum / this.grades.length;
    }

 
    getGrades(): number[] {
        return [...this.grades]; 
    }
}



class HighSchoolStudent extends Student {
    constructor(name: string, studentID: number, school: string) {
        super(name, studentID, school);
    }

    getSchoolName(): string {
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
  
 
  const car1 = new Car2("Toyota", "Corolla", 25000);
  const car2 = new Car2("Honda", "Civic", 28000);
  
  car1.displayCar(); 
  car2.displayCar();
  







//   Question 11: Generics - Creating a Generic Function with Index Search
//   Create a generic function findIndex<T>(arr: T[], value: T): number that takes an array of any type and a value to search for. The function should return the index of the value if found; otherwise, return -1. Call this function with different types of arrays (e.g., an array of numbers, an array of strings) and log the results.


  function findIndex<T>(arr: T[], value: T): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}

console.log(findIndex([1, 2, 3, 4], 3));        
console.log(findIndex(["apple", "banana"], "banana"));


// Question 12: Type Guards - Checking Object Types
// Create two interfaces: Car with a property drive() that returns "Driving a car!", and Bike with a property ride() that returns "Riding a bike!". Then, create a function useVehicle(vehicle: Car | Bike) that calls drive() if it's a Car and calls ride() if it's a Bike, using a type guard to differentiate between the two. Create instances of Car and Bike, and pass them to useVehicle().
interface Car1 {
    drive(): string;
}

interface Bike {
    ride(): string;
}

function useVehicle(vehicle: Car1 | Bike): void {
    if ("drive" in vehicle) {
        console.log(vehicle.drive());
    } else {
        console.log(vehicle.ride());
    }
}

// Example Usage
const myCar1: Car1 = { 
    drive: () => "Driving a car!" 
};

const myBike: Bike = {
     ride: () => "Riding a bike!" 
    };

useVehicle(myCar1);  
useVehicle(myBike);






// Question 13: Interface Intersection - Merging Multiple Interfaces
// Create two interfaces: Person with properties name (string) and age (number), and Employee with property jobTitle (string). Then, create a new type FullTimeEmployee that combines both interfaces using intersection (&). Write a function describeEmployee(emp: FullTimeEmployee) that logs the name, age, and jobTitle. Create a FullTimeEmployee object and pass it to the function.

interface Person {
    name: string;
    age: number;
}

interface Employee1 {
    jobTitle: string;
}

type FullTimeEmployee1 = Person & Employee1;

function describeEmployee(emp: FullTimeEmployee1): void {
    console.log(`Name: ${emp.name}, Age: ${emp.age}, Job: ${emp.jobTitle}`);
}


const emp: FullTimeEmployee1 = { name: "Hammad", age: 25, jobTitle: "Software Engineer" };
describeEmployee(emp); 






// Question 14: Interface Union - Handling Multiple Object Types
// Create two interfaces: Dog with a method bark() returning "Woof!", and Cat with a method meow() returning "Meow!". Then, create a type Pet that can be either a Dog or a Cat. Write a function makeSound(pet: Pet) that calls bark() if it's a Dog and calls meow() if it's a Cat, using a type guard to determine the correct method. Create instances of Dog and Cat, and call makeSound() on both.


interface Dog {
    bark(): string;
}

interface Cat {
    meow(): string;
}

type Pet = Dog | Cat;

function makeSound(pet: Pet): void {
    if ("bark" in pet) {
        console.log(pet.bark());
    } else {
        console.log(pet.meow());
    }
}


const myDog: Dog = { bark: () => "Woof!" };
const myCat: Cat = { meow: () => "Meow!" };

makeSound(myDog); 
makeSound(myCat); 



// // Question 15: Implementing an Interface in a Class
// // Create an interface Shape with a method calculateArea(): number and a method getType(): string. Then, create a class Circle that implements Shape with a property radius (number), implements calculateArea() to return the area of the circle, and implements getType() to return "Circle". Create an instance of Circle, set the radius, and call both methods.

interface Shape1 {
    calculateArea1(): number;
    getType(): string;
}

class Circle2 implements Shape1 {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea1(): number {
        return Math.PI * this.radius * this.radius;
    }

    getType(): string {
        return "Circle";
    }
}


const circle1 = new Circle2(5);
console.log(circle1.getType());    
console.log(circle1.calculateArea1());  
