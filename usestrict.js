
//when we use strict mode then we are instructed to follow this rule then only variable ,function will work correctly ,
// they provide you error in advance what you get on runtime environment 

"use strict"
// harpreet = "harpreet"  
//console.log(harpreet,'harpreet2 ') //ReferenceError: harpreet is not defined

// function dublicateParemeter (name,name){

//     //return console.log(name,'ashwaani') //overright the first occurrence and take end same dublicate parameter name it happens before es6 
//     //after es6 using strict mode it will provide error dublicate parameter name not allowed in this context 
// }

// dublicateParemeter ("priyanka","ashwaani")

function getProducts (){

    products = ["all products listed on flipkart and amozon"]

    return console.log( products,' products is not defined due to strict mode ')
}
getProducts()