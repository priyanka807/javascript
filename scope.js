// scope : scope refers to the context in which variable ,function and object are accessible in the code . 
//where variable can be accesses and modified . and  1 local 2 block 3 globle 4 function scope 

//global scope : variable declared outside any function and block are accessible from anywhere . 
const globalVariable = "global variable "
function globalScope(){
//console.log(globalVariable,'inside the function')
}
//console.log(globalVariable,'outside  the function')

{
  var accessfromanywhere = "inside the curly brace using var keyword"
}
//console.log(accessfromanywhere,'accessfromanywhere')

// *********why is  var  function and global scope 

//why is var  global scope ?

var globalObj = 'var variable  becomes property of  global object .(window in browser and global in node ) '
//console.log(window.globalObj,'output : var variable  becomes property of  global object .(window in browser and global in node ')

//why is var  function  scope ? : ignore block scope ,hoisted , acesss from anywhere within the function(access the value before declaration)

function funScope(){
//console.log(myVar,'undefined')
var myVar = "due to hoisting, var is hoisted at the top of the function"
//console.log(myVar,'value ')
if(true){
  var varVariable = "varVariable"
  let letVariable = "letVariable"
  const constVariable ="constVariable"
}
//console.log(varVariable,'varVariable ')  //  this is function scoped and due to hoisting ,it is hoisted on the top of their scope
//console.log(letVariable,constVariable,'not defined') // not useable before declaration (temporal dead zone)
}
// console.log(myVar,'myVar is not defined  ')
funScope()



// function scope : variable declared inside the fun using any keyword are accessible within the function .

function functionScoped (){
  var myVarFunScoped = "var is functioned scope "
    let  myLetFunScoped = "let is block scope "
     const  myConstFunScoped = "var is block scope "
     console.log(myVarFunScoped,myLetFunScoped,myConstFunScoped,'function scoped ')
}
functionScoped ()
// console.log(myVarFunScoped,myLetFunScoped,myConstFunScoped,'are not defined')

//block scope : variable declared inside block , are only accessiable witin that block , let and const are block scope , introduced in es6
{
  let blockLetVariable = "blockLetVariable"
}

//local scope is variable that are declalared and accessible  only within specific function and scope .Refers to any scope that is not global (if,for,function with any variable)
function example() {
  let x = 10; // Local to the function
  if (true) {
      let y = 20; // Block-scoped to the `if` block
      const z = 30; // Block-scoped to the `if` block
      console.log(x); // Output: 10 (accessible)
      console.log(y); // Output: 20 (accessible inside block)
      console.log(z); // Output: 30 (accessible inside block)
  }
  console.log(x); // Output: 10 (accessible in function scope)
  console.log(y); // Error: y is not defined (block scope)
  console.log(z); // Error: z is not defined (block scope)
}
example();
