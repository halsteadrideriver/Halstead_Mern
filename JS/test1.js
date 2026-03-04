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
/*//ananomous function:
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
let a = ["Hals",7,false,22.7]
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
//for in loop: gives indexes of the elements.
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

//Copy and spread of array elements:
arr = ['hals','andu','powell'];
//arr2 = arr;  // passing the referance of the array arr to array arr2.
//arr2 = arr.slice(0) // copying array through slice method.
arr2 = [...arr]   //copying through speard operator[...]
arr.push("JessyVAC");
console.log(arr2);
console.log(arr)