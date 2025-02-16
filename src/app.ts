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

class Circle extends Shape {
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

const circle=new Circle("Red",7)

console.log("My circle's color is "+circle.getColor()+"and its area is "+circle.calculateArea())

const rectAngle= new Rectangle("Green",3,4);

console.log("My rectangle's color is "+rectAngle.getColor()+" and its area is "+rectAngle.calculateArea())