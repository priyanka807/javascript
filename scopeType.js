
//there are three types of scope   1 function . local  .local 2global 

////global scope 
let gs = 1
var gs2 = 1
const gs3 = 1
function globalScope(){
console.log(gs,gs2,gs3,'accessable variable declaration value because of global scope of variable ')

}
console.log(gs,gs2,gs3,'global scope')


    
// function scope  
function scope(){
    let icon1= "ice"
    var icon2 = "ice"
    const  icon3 = "ice"

    console.log(icon1,icon2,icon3,'only access this inside of this fun ')     
}
scope()
//console.log(icon1,icon2,icon3,'refference error : icon is not defined ')     



//block scope 
{
    var fruit = "grapes"   //var is not block scope if we define var inside the loop and if/else 
    //condition ,curly brace we can access var declaration value outside of curly brace but not in the let and const case

    let fruit1 = "grapes"  
    const fruit2 = "grapes"  
}

console.log(fruit,'accessable grapes  due to hoisting ')
console.log(fruit1,fruit2,'error : fruit1 is not defined ,  could  not found this  outside of curly brace')



//difference between function and local scope 

//when variable is declared within function using var keyword it has function scope 
function funscope(){
    var fun = "mostle using with var keyword"
    if(true){
       console.log(fun,'fun') 
    }
}
funscope()
//variable is declared with function using var keyword that have function scope . they are accessable within any  nested block within that fun
function outerfun(){
    var outerVar = "i am   function scope outer"
    if(true){
        var innerVar = "i am function scope inner "
        console.log(outerVar,'access this variable because of fun scope ')
        console.log(innerVar)

    }

    console.log(innerVar,'outside the braces/block access this just because of fun scope')
}

//local scope refer both fun and block scope  it is introuded es6 with let and const keyword 

if(true){
    let gazab = "gazab ka sardard hi"
    console.log(gazab)
}

