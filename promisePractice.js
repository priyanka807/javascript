
let promise = new Promise((resolve,reject)=>reject("get data successfylly !"))
// console.log(promise,'promise')   // Promise {'get data successfylly !' }
// promise.then((res)=>console.log(res,'result')).catch((error)=>console.log(error,'error'))  // 'get data successfully'


async function fetchData (){
try{
const res =await  promise
console.log(res,'res in try block')
}catch(error){
    console.log(error,'error in catch block')
}
} fetchData ()