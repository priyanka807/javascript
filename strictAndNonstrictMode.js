//use strict : the use-strict directive was new in ecmascript version 5 .
//it is not a statement but a literal expression ,ignored by earlier versions of js
//purpose : code should be execute in the strict mode 
//you can access undeclared variable in a non strict strict mode but not in strict mode 
//strict mode : restricted variant and sloppy mode , we can know in advance what will be error on run time environment 
//secure code prevent from bugs and error  , great mannner to write code , 
x = 10 
//console.log(x,'x')

"use strict"
y= 10 

//console.log(y,'y')  //error y is not defined


//dublicate paramater name not allowed in strict mode but allowed in non strict mode
//allowed in non strict mode before ecma 6 version , now browser are strictly followed to rule that's why it will return error 

// function getName(name="khushi",name="priyanka"){
// //console.log(name,'priyanka override the first ocuurence always take last occurence ')
// //dubplicate parameter name are not allowed in this context due to ecmascrimpt6 in non strict mode also 
// }
// // getName()


"use strict"
let z = 20
delete z  //Delete of an unqualified identifier in strict mode 
console.log(z,'z')  //error delete of an unqualified identifier in strict mode is not allowed 


"use strict"
function getColor(){
color = "red"
console.log(    color,'color') //error color is not defined
}
getColor()
