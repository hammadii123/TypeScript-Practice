// ✅ Practice Questions
// 🔹 Basic Questions
// 1️⃣ Create a Book class with title and author properties and a method displayInfo().

class Book{
    title:string;
    author:string;

    constructor(title:string,author:string){
        this.title=title
        this.author=author
    }

    displayInfo():void{
        console.log(`The books title is ${this.title} and its auhtor is ${this.author}`)
    }
}

const book1=new Book("Harry Poter","Henry");
book1.displayInfo()


// 2️⃣ Create a BankAccount class with deposit() and getBalance() methods. Make balance private.

class BankAccount{
    private balance:number

    constructor(balance:number){
        this.balance=balance;
    }

    deposit(num:number):void{
        console.log(this.balance+=num)
    }

    getBalance():void{
        console.log(this.balance)
    }

}

const bal1=new BankAccount(100)
bal1.deposit(100) //200
bal1.getBalance() //100



// 🔹 Advanced Questions
// 3️⃣ Create an Employee class with protected salary and a Manager class that extends it. Display the salary.


class Employee{
    protected salary:number=0
}
class Manager extends Employee{
    constructor() {
        super();
        this.salary = 10000; // Accessing protected property inside child class
    }
    displaySalary() {
        console.log(`Salary: ${this.salary}`);
    }
}

const per = new Manager();
per.displaySalary(); // ✅ Works: Salary: 10000

// console.log(per.salary); // ❌ Error: Property 'salary' is protected and only accessible within class 'Employee' and its subclasses.



// 4️⃣ Create an abstract class Vehicle with a method move(). Implement it in Car and Bike classes.

abstract class Vehicle{
    move(){

    }
}

class Bike implements Vehicle{
    move(){
        return `Bike is moving`
    }
}


class Car implements Vehicle{
    move(){
        return `Car is moving`
    }
}

const car=new Car();
car.move()

const bike =new Bike();
bike.move()