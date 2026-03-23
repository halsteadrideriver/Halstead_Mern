//to get elements by tagnames
/*
a = document.getElementsByTagName("li");
console.log(a);*/

// to get element by class name:
/*
a = document.getElementsByClassName("hero");
console.log(a);*/

// to get element by ID:  gets unique ID 

// a = document.getElementById("yy");
// console.log(a);

// to get element by queryselector: selects only one element of any config .

// a = document.querySelector(".hero");
// console.log(a);

//to get data by selectall : selects all the tags or anything.
// a = document.querySelectorAll("li");
// console.log(a);

// Parent and Child: 
//Parent:
// var par = document.querySelector('li');
// var p = par.parentElement;
// console.log(p);

//Child:
//var chil = document.querySelector('ul');
//console.log(chil.children);  // gets the all the children objects as the O/P.
//console.log(chil.children[0]); // gets the particular index children object .
//console.log(chil.childNodes); // O/P  nodelist of all the nodes of children.
//console.log(chil.childNodes[0]);

// Previous element finding : Sibiling element or object.

//var par = document.querySelector('.hero');
//var p = par.previousSibling; // previous sibling.
//var p = par.previousElementSibling; // previous element sibling
//var p = par.nextSibling;
//console.log(p);

// Append child:

// var app = document.querySelector('ul');
// var newE = document.createElement('li');
// newE.textContent = "joshua";    // to feed text into the element.
// app.appendChild(newE);


// Remove :
// var app = document.querySelector('ul');
// app.remove();

//Replace child:
// var app = document.querySelector('ul');
// var newE = document.createElement('li');
// //var childToChange = app.childNodes[0];
// var childToChange = app.children[0];
// newE.textContent = "GOD";
// app.replaceChild(newE,childToChange);

//first child :

// var app = document.querySelector('ul');
// console.log(app.firstChild);  // return the first object node of the config.
// console.log(app.firstElementChild); // returns the first element of the config.

// last child:
// var app = document.querySelector('ul');
// console.log(app.lastChild);  // return the last object node of the config.
// console.log(app.lastElementChild); // returns the last element of the config.

//Inner HTML:
// let app = document.querySelector('.hero');
//app.innerHTML = '<i>GOD</i>'; //replace the tag content with class 'hero' with 'GOD' in italic script.
// app.innerHTML += 'GOD'; // appends 'GOD' next to the first '.hero ' class tag.

// Outer HTML:

// let app = document.querySelector('.hero');
//app.outerHTML = 'GOD'; // removes the first 'hero' class tag from the nodelist and repalces with 'GOD' but not included in the list.
// app.outerHTML = '<li>GOD</li>'; // by externally adding the list tags we can again include in the list.

//Inner Text :

// let a = document.querySelector('h1').innerText; // Dispays the inner text inside a tag. When the span content is none in display tag , it will not be visible in the O/p as well.
// console.log(a);

// let b = document.querySelector('h1').textContent; //When the span content is none in display tag , it will be visible in the O/p.
// console.log(b);

// Insert adjacent HTML:

// var target = document.querySelector('.hero');
// var newE = '<b>Inner HTML</b>';
// target.insertAdjacentHTML("beforebegin",newE); // Inserts string before the 'div' tag starts.
// target.insertAdjacentHTML("beforeend",newE);  // Inserts string before the 'div' tag ends.
// target.insertAdjacentHTML("afterbegin",newE); // Inserts string right after the 'div' tag starts.
// target.insertAdjacentHTML("afterend",newE); // Inserts string after the 'div' tag ends.

//Styling.
// document.body.style.backgroundColor = "red"; // page color
// let a = document.querySelector('div'); 
// a.style.color = "orange"; // tagged color
// a.style.backgroundColor = "white"; // tagged background color.
// a.style.border = "5px solid black";

//get and set attributes.
// let a = document.querySelector('#hero');
//console.log(a.getAttribute('about'));
// a.setAttribute("example",123);
// console.log(a.outerHTML);

// for(let att of a.attributes)
// {
//     console.log(`${att.name} = ${att.value}`);
    
// }


