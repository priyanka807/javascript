console.log("aaya")
//dublicate parameter name allowed before es6 version . after es6 version it is not allowed to passed dublicate parameter name
//browser are strictly forced to follow after es6 version to rule that's why it will give error dublicate parameter will not allowed in this context .
//dublicate parameter name is only allowed in non strict mode . if you use strict mode it is not allowed .arrow fun is default nature is strict mode

function name(name="khushi",name="priyanka"){
  return "maksood"
}

var name1 = (name,name)=> "maksood"


//1 syntax wise
//2 return keyword is nessary while using normal function but you can skip in arrow function
// console.log(name(),name1(),"name")
// 3

// function handleClick1(obj){
//     this.name="Maksood"
//     console.log(this,"this")
// }
const handleClick1=(obj)=>{
   this.name="Maksood"
  console.log(this,"this")
}
// const handleClick=()=>{
//  this.innerText="clicked"
//    console.log(this,"this")
// }
let obj ={
    name:'priyanaka',
    age:21
}

handleClick1.call(obj)
console.log(obj,"obj")
// document.getElementById('button').addEventListener('click',handleClick())
// console.log(name2(1,2),name3(1,2),"name")
//you can access this keyword in normal function, but u cant in arrow one



// console.log(window===this,"this")
//4 Parameter Handling
// function par(name,name){
//     return name
// }
const para =(name,name)=>name
console.log(para("maksood","maksood1"))
//Duplicate parameter name not allowed in the arrow function