// Currying is a technique in JavaScript where a function takes multiple arguments one at a time instead of all at once.
console.log("first")

function add(a,b){
    return a+b
}
console.log(add(2,4))

function curry(fn){
    return function(a){
        return function(b){
            return fn(a,b)
        }
    }
}
const curriedAdd = curry(add)
const addOne = curriedAdd(1)



const obj = {name:'ashwaani',phone:8756349642,email:'pk796395@gmail.com',message:'buy silicon machine'}
function userObj (userInfo){

    return (name)=>{
 
        return(phone)=>{
            return(email)=>{
                return(message)=>{
            return console.log( ` review your details before final submission my name is  ${userInfo[name]}  . you can contact me on this number ${userInfo[phone]}
                either email ${userInfo[email]} . my message is ${userInfo[message]} for you `)
                }
            }
        }
    }

}

const userDetails = userObj(obj)('name')('phone')('email')('message')
console.log(userDetails,'userDetails')


// 2 way to achieve this using arrow fun 
// const userObj = userInfo => name => phone => email => message =>  console.log(` review your details before final submission my name is  ${userInfo[name]}  . you can contact me on this number ${userInfo[phone]}either email ${userInfo[email]} . my message is ${userInfo[message]} for you `) 
//  userObj(obj)('name')('phone')('email')('message')


//this is a simple case to get sum of the function
// function sum (a,b){
// return a+b
// }
// sum (5,6)

// if we want all the parameter is coming from another function execution that time we will create currying fun 
// if we want  we will get all the parameter even then this function should be execute otherwize not execute this function 


// function sum(a){
//     return function (b){
//         return function (c){
//             return function(d){
//                 // return  console.log(a+b+c+d,'a+b+c+d')
//             }
//         }
//     }
// }

// const sum1 = sum(2)
// const sum2 = sum1(2)
// const sum3 = sum2(2)
//  sum3(2)

//easy way to call currying function 
// sum(3)(4)(1)(2)


// function sendAutoEmail(to){
//   return (subject)=>{
//     return (body)=>{
//         console.log(`sending email to ${to} with subject ${subject} : ${body}`)
//     }
//   }
// }

// sendAutoEmail('ashwaani@gmail.com')('this is testing purpose')('get quser query details ')
// const sendAutoEmail = to => subject => body =>   console.log(`sending email to ${to} with subject ${subject} : ${body}`)
// sendAutoEmail('ashwaani1@gmail.com')('this is testing purpose1')('get quser query details 1')


const obj = {name:'ashwaani',phone:8756349642,email:'pk796395@gmail.com',message:'buy silicon machine'}
function userObj (userInfo){

    return (name)=>{
 
        return(phone)=>{
            return(email)=>{
                return(message)=>{
            return console.log( ` review your details before final submission my name is  ${userInfo[name]}  . you can contact me on this number ${userInfo[phone]}
                either email ${userInfo[email]} . my message is ${userInfo[message]} for you `)
                }
            }
        }
    }

}

const userDetails = userObj(obj)('name')('phone')('email')('message')
console.log(userDetails,'userDetails')


// 2 way to achieve this using arrow fun 
// const userObj = userInfo => name => phone => email => message =>  console.log(` review your details before final submission my name is  ${userInfo[name]}  . you can contact me on this number ${userInfo[phone]}either email ${userInfo[email]} . my message is ${userInfo[message]} for you `) 
//  userObj(obj)('name')('phone')('email')('message')


//this is a simple case to get sum of the function
// function sum (a,b){
// return a+b
// }
// sum (5,6)

// if we want all the parameter is coming from another function execution that time we will create currying fun 
// if we want  we will get all the parameter even then this function should be execute otherwize not execute this function 


// function sum(a){
//     return function (b){
//         return function (c){
//             return function(d){
//                 // return  console.log(a+b+c+d,'a+b+c+d')
//             }
//         }
//     }
// }

// const sum1 = sum(2)
// const sum2 = sum1(2)
// const sum3 = sum2(2)
//  sum3(2)

//easy way to call currying function 
// sum(3)(4)(1)(2)


// function sendAutoEmail(to){
//   return (subject)=>{
//     return (body)=>{
//         console.log(`sending email to ${to} with subject ${subject} : ${body}`)
//     }
//   }
// }

// sendAutoEmail('ashwaani@gmail.com')('this is testing purpose')('get quser query details ')
// const sendAutoEmail = to => subject => body =>   console.log(`sending email to ${to} with subject ${subject} : ${body}`)
// sendAutoEmail('ashwaani1@gmail.com')('this is testing purpose1')('get quser query details 1')

