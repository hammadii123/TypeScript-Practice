// 📝 Practice Questions
// 🔹 Basic Questions
// 1️⃣ Create an object type for a "Book" with title (string), author (string), and pages (number).

type Book={
    titile:string;
    author:string;
    pages:number;
}

let book:Book={
    titile:"Harry potter",
    author:"John",
    pages:43
}
console.log(book)



// 2️⃣ Define an interface for a "Student" with name (string), age (number), and an optional grade (string).
interface Student{
    name:string;
    age:number;
    grade?:string
}

let stud:Student={
    name:"Hammad",
    age:20,
    
}
console.log(stud.age)

// 🔹 Advanced Questions
// 3️⃣ Create an Employee interface that extends Person and adds a salary (number). Define an object based on this interface.

interface Person{
    name:string;
}
interface Employee extends Person{
    salary:number;
}

let emp1:Employee={
    name:"Ali",
    salary:30000
}
console.log(emp1)

// 4️⃣ Define an index signature interface for a "Config" object where keys are strings and values are numbers. Create an object using this interface.

interface Config{
    [keys:string]:number;
}
const conf:Config={
    maxUsers:30,
    minUsers:10,
    timeOut:20
}
console.log(conf)
