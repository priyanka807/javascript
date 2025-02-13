let a = []
let b = []
// console.log(a==b) //false 
// console.log(a===b) // false object are compare by reffrence in js ,reffrence have always diffrent memory location 

let c = []
let d = c
// console.log(c==d) //true
// console.log(c===d) // true  have same  memory location 

let e = [20]
let f = [20]
// console.log(e[0]==e[0]) //true now comparing array value that time check value are same then true 
// console.log(e[0]===e[0]) // true  now comparing array value that time check value are same then true 

let g = [1,2,3]
let h = {name:'anil'}
//console.log(...g) // when you use rest spread operator without array on array element it 's return element without array


function restOperator (...argu){
    return argu
    
 }
 restOperator ("ghfjhgjhk")


const arr1 = [1,3]
const arr2 = [5,3]
const arr3 = [...arr1,...arr2]  // allow itirable to be expanded where are multiple arguments into an array 
// console.log(arr3)

// ... this is not work in obj case as an itrable and expanded , it work behave diffrently in obj case . 
// it is use object assign under the wood   , only copy properties of object instead of  expanded indivisual 
let person = { name: "John", age: 30 };
//console.log([...person]) //it won't work ,person is not itirable 
let newPerson = { ...person, city: "New York" };  
person.name = "priyanka"
// console.log(newPerson,'newPerson'); 
// console.log(person,'person'); 


// console.log(typeof NaN)
// console.log(10--10)//invalid left-hand side  expression in postfix operation
// console.log(10-(-10))  //+20 
// console.log(10+(+10))  //+20 
