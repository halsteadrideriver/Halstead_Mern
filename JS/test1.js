/*let a = 1;
let b = "five";
console.log(a++);
console.log("%s %s",a,b);
a = String(a)
console.log(typeof a,",",typeof b)

// Switch statement
let a = 2;
switch (a){
    case 1:
        console.log("1");
        break;

    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;

    default:
        console.log("no number");
        break;
        
}


// for loop:
for (var a = 0;a<5;a++){
    console.log(`Hello ${a}`); // ` is left side of 1 button .
}


// While loops:

let a = 1;
while(a<10){
    console.log(`hello ${a}`);
    a++;
}

//Do While
let a=1 ;
do{
    console.log("Hello ", a);
    a++;
}while(a<=10)
*/
// Functions
/*
let a =4;
function demo(){
    let b = 5;
    return b;
}

console.log(a);
console.log(demo());
*/
/*//anonymous function:
let func = function(){
    console.log("River");
}
func();*/
/*
//function called immediately or self initialized
(function(){
    console.log("hello");
})();*/
/*
//Arrow function:
let a = (a,b)=>{
    return a+b
}

console.log("the ans :",a(5,9))*/

// Arrays: In JS array is same as list from python ,Can store multiple data types.
// array elements are sorted using the unicode values i.e the first character of an element in an array.
//let a = ["Hals",7,false,22.7]
//a.push(1);  // appends an element
//a.unshift("evander");  // inserts element to the 0th index.
//a.splice(1,1); //deleting index in array
//a.splice(2,2,7); // deleting and inserting in array.
//console.log(a.length); // length of array.
//console.log(a)

// Alternate form of traversing into array
// ForEach -> easy coding + does not allow to store this array being traversed into another array.
/*a.forEach((value,index,array) => {
    console.log(value+ " " + index + " " + array)
});*/
//Map array: Allows array to be stored in another array.
/*let b = a.map((value,index,array) =>{
    return value + 7
});
console.log(b)*/
// concatenate arrays
/*let c =[1,2,3,4]
console.log(a.concat(c))*/

//console.log(a.indexOf(false)) // index of a known element.
//console.log(a.reverse()) // reversing the elements in an array.
//console.log(a.sort())
//console.log(a.slice(0,1)) // gets us data which are deleted 
//t d = a.splice(1,1)
//t d = a.slice(1,2)
//console.log(d);
//console.log(a);
/* //Filter 
let e = [10,20,30,40,50,60]

let ee = e.filter((value,index,array) => {
    if(value <60 && value >20){
        return value
    }
});

console.log(ee)*/
//Split and join
/*
let f = '1,2,3'

let arr = f.split(',');
arr.forEach((value,index,array) =>{
    console.log(value);

});

console.log(arr);
let jo = arr.join(' , ');
console.log(jo);*/
//'for in' loop: gives indexes of the elements in array , and properties of object.
//let arr = [10,20,30,40];
/*for(let ar in arr)
{
    console.log(ar + "->" + arr[ar]);
}*/
// for of loop: gives the elements itself
/*for(let ar of arr)
{
    console.log(ar);
}*/
// multidimensional array:
/*
let arr = [
    ["hals",25],["Andu",23],["Powell",23]
]

for(let i=0; i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++)
    {
        console.log(arr[i][j]);
    }
}*/
/*
//Copy and spread of array elements:
arr = ['hals','andu','powell'];
//arr2 = arr;  // passing the referance of the array arr to array arr2.
//arr2 = arr.slice(0) // copying array through slice method.
arr2 = [...arr]   //copying through speard operator[...]
arr.push("JessyVAC");
console.log(arr2);
console.log(arr)*/

//Array destructing: used to get elements from array easily
/*
let array1 = [11,22,33,44]
let [item1,item2,...item3] = array1
console.log(item1)
console.log(item2)
console.log(item3)*/

//Object : an object is a fundamental data structure that allows you to store and organize related data and functionality
// The contained informations is called properties and can be stored different data types
//It has key and value pairs.
/*
let obj = {
    "name" : "Halstead",
    age : 29,
    "place" : "ooty",
    func : function()
    {
        return 'function';
    },
    arr : [1,2,3,4],
}
console.log(obj.name);
console.log(obj["age"]);
console.log(obj["place"]);
console.log(obj.func())
console.log(obj.arr)
for(i in obj)
{
    console.log(i,"->",obj[i]);
}
for(i of Object.keys(obj))
{
    console.log(i+" of "+obj[i]);
}*/

//funtion inside function
/*
function fun()
{
    console.log("Function1");
    function fun2(){
        console.log("Function2");
    };
    fun2();
}
fun()*/

// debugger : to debug the code 
/*
function fun()
{
    debugger;
    for(let i = 1; i<=5;i++)
    {
        console.log(i);
    }
}
fun();*/

// Set() : same as array , but allows only unique values.
// length of a set has to calculated manually .
/*
let arr = [1,2,3,4,5];
console.log(`Arr Length : ${arr.length}`);
let s = new Set([1,2,3,4,5]);
s.add(33);

len = 0;
for(i of s)
{
    len++;
    console.log(i)
}
console.log(`Set Length : ${len}`);
*/

//Maps : same key-value pair like object , but key can be of any data type.
//
/*let map1 = new Map([[1,"halstead"],
    ["second","Andu"],
    ["Third","Powell"]
])
console.log(map1.get(1));
console.log(map1.get("Third"));
map1.set("parent1","Dad"); // set keys and values to the map
map1.set("parent2","mom"); // set keys and values to the map
console.log(map1);

var k = map1.keys();
console.log(k);
for(let key of k)
{
    console.log(key);
}*/

//This keyword: to access object properties inside itself.
// empty this keyword gives windows object as output.
/*
var obj = {
    fname : "Hals",
    age : "8",
    fun : function(){
        console.log(this.fname); // O/P-> Hals
        console.log(obj.fname);  // O/P-> Hals
    },
}
obj.fun();*/

// new Keyword: Creates new empty object.
/*
function fun(){
    fname = "Hals";
    this.fname = fname;
}

var obj = new fun();
console.log(this.fname);
console.log(obj.fname);*/

// Constructor: same as function but has to have Caps letter at start.
// Always should be created with 'new' keyword.
/*
// method 1:
function User(name){
    this.name = name;
}

var obj = new User("Hals");
console.log(obj.name);

// method 2: constructor object can be created even inside the constructor function also.
function User2(name){
    if(!new.target)
    {
        return new User2(name);
    }
    this.name = name;
}
var obj2 = User2("Evander");
console.log(obj2.name);
*/

//Symbol:
/*
let sym = Symbol("id");
let obj = {
    name : "Hals",
    age : "26",
}

obj[sym] = 1;

console.log(obj);
for(let key in obj)
{
    console.log(key);
}*/

// 
