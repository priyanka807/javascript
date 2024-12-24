
let number = 10;
number = '50';
let obj = {name:'priyanka'}
console.log(number +'this is a immutable type','number')

//{name:"description"}  get different output case of obj symbol([obj Obj])
let symbol = Symbol('name');          
console.log(symbol,'symbol')


let map = new Map;
map.set("key","values")
console.log(map)

//new Set only takes itirable value like string and array
let set = new Set([{category:"category"},[{category:"category"}],[{category:"category"},{category:"category"}]])
console.log(set)            

//pass by values and pass by referrence 

const memory = "pass by value means : variable value is copied when assigned and passed to fun"
const object = {name:'pass by refferrence means pass the refference of object memory loction not passes the actual value'}
console.log(object,'object')


const immutable = {description:'description must be exceed 200 words'}
immutable.description = "highlight main keyword in your description regrading your main function"

console.log(immutable,'means:it can modefy as we need or want  benifits :predictibility,asy debugging ,avoiding  unexpected side effects ')


const indexOFMethod = [4,6,9,10]
console.log(indexOFMethod.filter((value,index,self)=>{
    console.log(indexOFMethod,'value')
    return indexOFMethod.indexOf(value)
}))
