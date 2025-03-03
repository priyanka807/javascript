//callback hell or pyramid of doom or inversion control 
// 1 readable  and maintainable and complex functionality
// hard to manage task if one function will not executed then all the function will break 
// not easy to debug 


//callback hell happen when multiple nested callback make the code hard to read and maitain , it usually occurs 
//in asynchronous js when we have to perform multiple task in sequence (add to cart api , update to cart like inc and dec , display cart details ,
// payment to proceed ,verification)

// function getUser(callback){
//     setTimeout(()=>{
//         console.log('get user','first')  
//         const user = {id:1,name:'priyanka',age:22}
//         callback(user)
//     },1000)
// }

// function getOrdersOfSpecificUser(userId,callback){
//     console.log('get userId','third')
//     setTimeout(()=>{
//         console.log(`fetch orders of specific ${userId}` ,'fourth')
//         const orders = ["jeans","shirt","shoes"]
//         callback(orders)
//     },1000)
// }

// function paymentProcess(order , callback){
//     setTimeout(()=>{
//         console.log(`payment proceed for this ${order}`)
//         callback('payment received sucessfully !!')
//     },1000)
// }

//collback hell or pyramid of doom // inversion of control 
// problems 1 code becomes unreadable and maintainable (nested structure is cofusing)
//difficult to added new logics and hard to debug

//****  we can solve this promblems using promise and async/await
// getUser((user)=>{
//     console.log(user,'second')
//      //this will only run when callback(user) is executed inside getUser 
//     getOrdersOfSpecificUser(user.id,(orders)=>{
//         console.log(orders,'fifth')
// paymentProcess(orders[0],(paymentStatus)=>{
// console.log(paymentStatus,'paymentStatus')
// })

//     })

// })



//how to fixed callback hell issues 
//.then use because we want to execute function after promise is ressolve
//.then() ensures that the function inside it runs only after the promise is resolved.


function getUser(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    const user = {id:Math.random(10),name:'azad',age:40}  //here we will call user get api 
    resolve(user)
},1000)
    })
}


function getOrdersOfSpecificUser(userId){
    return new Promise((resolve)=>{
setTimeout(()=>{
    console.log(`here we will get first userId ${userId} after that we will match this id is exist if yes the fetch out the orders `)
    const Orders =["JEANS","SHIRTS"] //here we will call  ORDER get api of specific user 
    resolve(Orders)
},1000)
    })
}


function paymentProcess(status){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
console.log(`here we ensure first user order status ${status} payment is true  after that specific order then payment `)
           resolve("PAYMENT SUCCESS !1") 
        }, 5000);
    })
}


// getUser().then(user=>getOrdersOfSpecificUser(user.id).then(order=>
//     paymentProcess(order[0]).then(paymentStaus=>console.log(paymentStaus,'paymentStaus'))
// )).catch(error=>console.log(error,'error'))

async function handleOrder() {
    try {
        const user = await getUser();
        const orders = await getOrdersOfSpecificUser(user.id);
        const paymentStatus = await  paymentProcess(orders[0]);

        console.log(paymentStatus);
    } catch (error) {
        console.log(error);
    }
}

// Call the async function
handleOrder();
