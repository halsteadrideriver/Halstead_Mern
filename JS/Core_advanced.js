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

fun(false).then(onResolve).catch(onReject)