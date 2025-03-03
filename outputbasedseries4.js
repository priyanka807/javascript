const data = {age:22}
//console.log(delete data) // can't delete  variable in js  
//console.log(delete data.hobbies) // even property has not existed in object , delete operation still return true , 
// nothing to delete but still return true   , it 's not behave like error 
// console.log(delete undefined,'true because trying to delete  undefined ')

const frdName = ["gungun","sunali","reshma","anjali"]
const [bestFrd,bestFrdTwo] = frdName
const [,secElem] = frdName//how to get sec element 
const [,,thirdElem] = frdName//how to get third element 
//console.log(secElem,thirdElem)

let a = 1
let b = (a, a+1)
//comma operator is useful when you run multiple expression but return only last one 
//console.log((a++,a+1))  //first expression  will  not consider , it means a hold two value  plus 1 is 3
//console.log((10, 20, 30))  // 30

const obj1 = {name:'priyanak'}
const obj2 = {age :22}

const newObj = {...obj1,...obj2}
// console.log(newObj)

//if you use same key then it take sec one while copying the property in js using spread operator 
let userdata = {name:'priyanka',age:22, skill:'react'}
const info = {contact:9773583040,mail:'pk796395@gmail.com',skill:'javascript'}
const userobj = {...userdata,...info}
// console.log(userobj)

const variableCall = 'variable call then it return error '
//console.log(variableCall()) //variableCall is not function 



//or operator evalutes each expression left to right and return truthy value 
// if all expression left to right is false then return last expression 
// in js empty string , null ,undefined , zero , nan , false all are consider false value 
// but empty obj and empty array are consider true value in js 

const auroperator = false || {}||null
//console.log(auroperator) //empty obj why 
//console.log(false||null||{}||"hello") //return {} ,aur operator return first truthy value 
//console.log(false||null||""||0||undefined || NaN)//return nan because all expression left to right are falsy then return last one  
//console.log([]||null||{}||"hello") //RETURN ARRAY
const result = null||false||""
console.log(result ,'nothing ')
console.log(typeof result ,'string  ')


