//var it is used before es6, there are some drowback to use var 
//
// console.log(name,"name")
// var name = 6
// var name="maksood"
// console.log(value,"name")
let value = 6
 value = "maksood"


 //There are two types of scope in JavaScript:
//Global scope:
//Variables declared outside of a function are in the global scope. They can be accessed from anywhere in the program.
//
//Local Scope -> function scope and block scope
//
function printName(){
    var name = "Priyanka"
    console.log(name)
}
printName()
console.log(name)

// {
//     var x = 10
//     console.log(x,"inside")
// }
// console.log(x,"outside")

const  globalscope = "var become property of global object,window in browser and global in node"
console.log(window.globalscope,'this is ecuting here')



