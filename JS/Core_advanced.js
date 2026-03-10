// Asynchronous concepts:

// setTimeout()
/*
console.log("hello")
setTimeout(()=>{
    console.log("delayed string")
},0)

console.log("last string")*/

//Callback: taking one function as argument of another function
/*
function func(val){
    console.log(val)
}

function add(a,b,func)  // parameter func given inorder of function func.
{
    res = a+b;
    func(res);         // Callback function calling the func and updating the res to val.
}
add(5,10,func);
*/
//Callback hell : Nested callbacks wchich leads to unknown bugs in large cases.
/*
function func1(func)
{
    setTimeout(() => {
       console.log("Func 1"); 
       func();
    },2000);
}

function func2(func)
{
    setTimeout(()=>{
        console.log("func 2");
        func();
    },2000);
    
}

function func3(func)
{
    setTimeout(()=>{
        console.log("Func 3");
        func();
    },3000);
    

}

function func4(func)
{
    setTimeout(()=>{
        console.log("Func 4");
        func();
    },3000);
    
}

func1(function ()
{
    func2(function ()
{
    func3(function (){
        func4(function (){});
    });
    
});
    

});
*/

// Promise: the solution for callback hell mess. 
// This comes based on task being resolved(completed) and rejected.
//Example 1:
/*
function fun(task)
{
    return new Promise((resolve,reject)=>{
        if (task)
            {
                resolve("resolved");
            }
        else
            {
                reject("not resolved");

            }

        
    })
}

let onResolve = (res) => {
    console.log(res);
}
let onReject = (err) => {
    console.log(err)
}

fun(false).then(onResolve).catch(onReject)*/

//Example 2:
/*
function func1()
{
    return new Promise((resolve,reject) => {

        setTimeout(() => {
        console.log("Func 1"); 
        resolve();
    },2000);

    })
    
}

function func2()
{
    return new Promise((resolve,reject) => {

        setTimeout(() => {
        console.log("Func 2"); 
        resolve();
    },2000);
    })
}

function func3()
{
    return new Promise((resolve,reject) => {

        setTimeout(() => {
        console.log("Func 3"); 
        reject("Error : Encountered an error");
    },2000);
})
    

}

function func4()
{
    setTimeout(()=>{
        console.log("Func 4");
    },3000);
    
}

func1().then(func2).then(func3).then(func4).catch((err)=>{
    console.log(err);
})*/

//Async and await : A better way to call the 'Promise'.
/*
function func1()
{
    return new Promise((resolve,reject) => {

        setTimeout(() => {
        console.log("Func 1"); 
        resolve();
    },2000);

    })
    
}

function func2()
{
    return new Promise((resolve,reject) => {

        setTimeout(() => {
        console.log("Func 2"); 
        resolve();
    },2000);
    })
}

function func3()
{
    return new Promise((resolve,reject) => {

        setTimeout(() => {
        console.log("Func 3");
        resolve(); 
        //reject("Error : Encountered an error");
    },2000);
})
    

}

function func4()
{
    setTimeout(()=>{
        console.log("Func 4");
    },3000);
    
}

function func5()
{
    setTimeout(()=>{
        console.log("Func 5");
    },3000);
    
}

async function Ex(){
    await func1();
    await func2();
    await func3();
    func4();
}

Ex().then(func5).catch((err)=>{
    console.log(err);
})*/

// setInterval and clearInterval
/*
let num = 0;
function fun(){
    num = num+1;
    console.log(num);
}
 var inter = setInterval(fun,2000);

 setTimeout(()=>{
    clearInterval(inter)
 },10000)
 */

 //Call, apply,bind
/*
 function fun(age,gender){
    console.log(this.fname,age,gender);
 }
 var obj1 = {
    fname : "Halstead",
 }

 var obj2 = {
    fname : "Evander",
 }

 //fun.call(obj2); //call function, calling object 2.
 fun.call(obj2,12,"Male")
 //fun.apply(obj1); // 'apply' function , on object1.
 fun.apply(obj1,[12,"Male"]); 

 var a = fun.bind(obj1,[12,'Male']);
 console.log(a);
 */

 // Property flags and Descrpitor:
/*
 var object1 = {};
 object1.name = 'Halstead';

 console.log(Object.getOwnPropertyDescriptor(object1,'name'));

 Object.defineProperty(object1,"age",
    {
        value : 21,
        writable : true,
        enumerable : true,
        configurable : true
    }
 );

 object1.age = 22;
 for(let k in object1)
 {
    console.log(k);
 }
console.log(Object.getOwnPropertyDescriptor(object1,'age'));*/

// Class:
/*
class Person{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`hello ${this.name}`);
    }
}
let user = new Person("John",25);
user.greet();
console.log(user)*/

//Inheritance
/*
class Animal   // Parent class.
{
    constructor(name)
    {
        this.name = name;
        this.age = 21;
    }
    speak()   // methods no need 'function' keyword beside them.
    {
        console.log(`${this.name} is of ${this.age}`);
    }
}

class Dog extends Animal
{
    constructor(name)
    {
        super(name);    // 'super' keyword is used to refer or point to the parent class members.
    }
}

let d = new Dog('Hals');
d.speak();
*/

//Static: Can be access using that specific class only
/* Example 1:
class Animal   
{
    constructor(name)
    {
        this.name = name;
        this.age = 21;
    }
     static speak(name)
    {
        this.age = 22;
        //console.log(`${this.name} is of ${this.age}`);
        console.log(`${name} is of ${this.age}`);
    }
}

//let d = new Animal('Hals');    (or)
let d = 'Evander'
//Animal.speak(d.name)
Animal.speak(d)
*/
//Example 2
/*
class Game
{
    static score =0;
    constructor()
    {
        this.game_started = false;
    }
    start()
    {
        this.game_started = true;
        console.log('Game Started');
    }
    end()
    {
        this.game_started = false;
        console.log('Game ended.');
        Game.score_update();       // To access static members in the code than the class or into other methods , we can access it through class name.
    }
    static score_update()
    {
        Game.score++;
        console.log(`${Game.score}`);
    }
}

const g = new Game();
g.start()
Game.score_update()
g.end();
*/

// Public and Private:
/*
class Bank
{
    #balance = 0;  // private in JS is denoted as '#'.
    deposit(amt){
        this.#balance += amt;
        console.log(`${amt} is deposited. The new Bal is ${this.#balance}`);
    }
    withdraw(amt)
    {
        if (amt>this.#balance)
        {
            console.log("Insufficient amt");
        }
        else{
            this.#balance -= amt;
            console.log(`${amt} is withdrawn. The new Bal is ${this.#balance}`);
        }
    }
    bal()
    {
        console.log(`${this.#balance}`);
    }
}

const b = new Bank();
b.deposit(100);
//console.log(b.#balance);  //O/P Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class (at Core_advanced.js:406:14)
//console.log(b.balance);     // O/P Undefined.
//Correct way is to define a seperate method to print the private balance variable.
b.bal() // Calling bal() which has access to the private balance variable.
*/

//Try, catch , throw:
/*
function div(a,b)
{
    try
    {
        if (b==0)
        {
            throw new Error("Zero cannot be divided");
        }
        else{
            console.log(a/b);
        }
    }
    
    catch(err)
    {
        console.log(err.message);
    }
}
div(0,0);
*/

// Fetch Api:
