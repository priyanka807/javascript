//var is global scope means it is property of window  in js and  browser in js 
var data = {age:22}
//console.log(window.data)  // return {age:22} //window property work in only browser 

let  data2 = {age:22}
//console.log(window.data2,'window is not defined ') //return  undefined (let and const )because of block scope 

//2 case 

//console.log(name)//undefined due to hoisting we can access value before the delclaration using var keyword in js 
var name ="priyanka"

//console.log(name1) // name1 is not defined ,first we declare variable in hte let and const case then access the value 
let name1 = "khushboo"


for(var i = 0 ; i<5;i++){
     //console.log(i ,'inside') //return 4 five times hold last value due to var (global variable)
}
//console.log(i, 'i outside')
// var i = 0
// var i = 1
// var i = 2
// var i = 3
// var i = 4
//console.log(i,'4 ') // we acn assign same variable name due to hosting in js 

for(let i = 0 ; i<5;i++){
   // console.log(i ,'i') //return hold diffrent value to due block scope declaration ;
}

var fruit  = {name:'apple'}
function fruit(){
//console.log('access of fruits ')
}
fruit.name = "chiku" 
//fruit()  // if you call function here you will get ->fruit is not function 
//console.log(fruit,'chiku') // you can use same variable name 


let fruit  = {name:'apple'}
function fruit(){
//console.log('access of fruits ')
}
fruit.name = "chiku" 
//fruit()  // if you call function here you will get ->fruit is not function 
//console.log(fruit,'chiku') // fruit has already  been  declared 