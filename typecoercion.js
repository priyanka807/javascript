
// const num  = 100
// const convertIntoString = num.toString()
// console.log(convertIntoString,'convertIntoString') //return invalid ,uncaught error ,unexpected token why :
// . refres two things one is decimal and second one is object property  if you want to make normal then use () and ..

const num  = 100
const convertIntoString = (num).toString()
// console.log(convertIntoString,'first way ')
// console.log(100..toString(),'second way')

// console.log(num + "100") //output : 100100 the plus operator with string trigger as string concatnation 
// console.log(num * "100")//output : 10000  apart from plus operator ,other operator only do mathmethical 
// //so if both operand have value so it is concered into number
// console.log(num - "100")//output 0 
// console.log(num / "100")//output : 1
// console.log("string" * "100") //error : nan  perform invalid mathmatical calculation

// const number = 10
// console.log(++number,'11')//assignment to const variable 
let  number = 10
// console.log(++number)
console.log(parseInt("string788")) //nan
console.log(parseInt("108string898")) //108
console.log(parseInt("108*200")) //108
