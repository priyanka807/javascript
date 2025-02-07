//var keyword is used before es6 , thre are some drawbacks

console.log(name,'priyanka kumari') // value can be accessed before declaration due to hoisting in the case of var keyword
var name = "priyanka"
var name = "priyanka kumari"

// it can be used same variable name with multple time it can not give error but in the case of const and let you can't give the same variable name otherwize giving error
console.log(name,'name')


let hobbies = "writting"
//let hobbies = "writting"  //hobbies' has already been declared
// console.log(hobbies,'hobbies')
//reassign the value to the variable 

const  age = 21
//it creates read only refference to the variable // error :assignment to the const variable

//global scope declared variable outside of the fun .it can access from anywhere.

function funscope(){
    var strength = "dedication"
    console.log(strength,'trength')
}

// console.log(strength,'trength')
funscope()


{
    let x = 10
    console.log(x,"inside")  //ReferenceError: x is not defined
}
console.log(x,"outside")

{
    var x = 10
    console.log(x,"inside")   //access the value outside of the curly brace  using var keyword
}
console.log(x,"outside")


{
    let a = 10
    var b = 20
}

console.log(a,'refference error  because let is a block level scope declaration  :it means if you used let keyword inside curly and and loopit will not work not print any value from the outside of loop and curly brace')


//var has global scope
console.log(b,'print 20 because var do not perform block   if you define variable using var keyword inside loop and curly brace you can access value outside of loop and curly brace')




var globalVar = "I'm a var";
let globalLet = "I'm a let";
const globalConst = "I'm a const";
console.log(window.globalVar,'var keyword'); // Output:i am var //we can access value using var keyword because var is global property means var is property of global object in nod and browser in window       

console.log(window.globalLet);  // Output: undefined
console.log(window.globalConst); // Output: undefined