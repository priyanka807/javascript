
//values : 1 pass by  value or primitives data types or immutable  or deep copy 2 : pass by refference :mutable , non-primitives data types or mutable or shallow copy

//direct pass the value to the other variable  or deep copy of the primitives data types 
let name = 'priyanka';
let name1 = name
name1="mak"
// console.log(name1,name,'name1')


//pass the refferrrence location of the variable for the other variable  2 shalow copy


// let obj = {name:'roshni'}
let obj = {name:'roshni',add:'lon',hobb:'wri'}

// obj1 = obj
// obj1.name = "maksood"              
 //if you want to shalow copy into deep copy in the case of first key value pairs
// let obj1 = Object.assign({},obj)
// obj1 = "nishu"


obj1 =JSON.parse(JSON.stringify(obj))
obj1.hobb = "tal"


console.log(obj,obj1)