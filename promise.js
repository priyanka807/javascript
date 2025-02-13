//a promise in js is an obj that represents eventally compltion or falure of aschronous code . it allow to handle async code effenctvely 
// solve the issues of colback hill (async : callback, settimeout ,setinterval , api , promise , read file ,perform i/0 operation )
// promise has three states 1 pending 2 fullfilled 3 rejection (ressolve ,reject)
let promise = new Promise((ressolve ,reject )=>{
let success = true 
if(success){
ressolve("data recieved successfully")
}else{
reject("failed to get data ") 
//This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "failed to get data 

}

})
//console.log(promise ,'promise ')  // Promise {'data recieved successfully '}


const promise1 = new Promise((resolve, reject) => {
  resolve("success !!");  // withiout settimeout return Promise {"sucess !!"}
  // setTimeout(() => {
  //   resolve("something went wrong");  // with settimeout return pending state
  // }, 100);
});
//console.log(promise1,'promise1')  // without catch block 

const result = promise1.then((data) => data);
// console.log(result, "this will go in pending state because we did not use await  ");
// promise1.then((data) => console.log(data,'data')).catch((error) => console.log(error,'error'));


 //When we use try...catch in an async function, 
 // JavaScript automatically "catches" any error that occurs inside the try block. 
//Async function return a promise this promise state can be either resolve or rejected
//wheres
//await suspends the called function excution unitll the promise return a result for the excution

const fetchApi1 = async () => {
  console.log('hello function ')
  try {
    const res = await promise;
    console.log(res, "result");
  } catch (error) {
    console.log(error);
  }
};
fetchApi1();



const resolve = new Promise((resolve,reject)=>{return resolve("data recieved successfully!")})
console.log(resolve,'resolve')  //Promise {'data rec succcessfully'}
const reject = new Promise((resolve,reject)=>{
    try{
console.log('resolve one ')
    }catch(error){
        reject("failed to get data !!")}
    }
    )
console.log(reject,'reject ')
 



