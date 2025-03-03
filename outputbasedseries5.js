//console.log(data) //undefined
// console.log(data1) //cannot access data1 before intialization 
var data = "var is hoisted on top of their scope due to hoisting"
let data1 = 'literial is block scope declaration means first you declare the variable and assign the value '
for (var i = 0; i < 3; i++) {
    setTimeout(()=>{
 //console.log(i); // ✅ return 3 three times because loop has finished when timeout get value after specific delay then 
   // i reffer to same value just like 2 
    })

}
// console.log(i,'also access value outside of loop in var case due to hoisting '); // ✅ Still accessible outside loop (prints 3)

// console.log(+true)
// console.log(typeof +true)
//because in js null,undefined,empty string , NAN, zero ,false are falsy value 
// console.log(!null) //convert null into true 
// console.log(!undefined) //convert undefined into true 
// console.log(!0) //convert zero into true 
// console.log(!"")//convert empty string into true 
// console.log(!false) //convert false into true 
// console.log(!NaN)//convert nan into true 
// console.log(![]) //convert array into false 
// console.log(!'priyanka') //convert string into false 

// let data2 = "size"
// let obj = {size:'small'}
// console.log(obj[data2])  // return small why obj["size"]
// console.log(obj["size"])  //small you can destruct property from obj like that
// console.log(obj.size)   // small 
// console.log(obj.data)  // undefined  you cant direct inject variable in obj 

let a = 3
let b = new Number(3)
// console.log(b,'[Number:3] typeof object')
// console.log(b.valueOf(),'valueOf only return value 3 ')
// console.log(a==b,'convert into same type before comparision in that case js automallcy add valueof method to get same data ') // number is not function 
// console.log(a===b,' dont convert into same type before comparision')


let name;
nmae = 'priyanka'  // only for confusing 
//console.log(name,'undefined')


function fruit(){

}
fruit.name = "chiku" // only for confusing 
fruit()



