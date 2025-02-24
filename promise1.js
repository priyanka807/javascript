let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Operation successful!');  // wait for one sec 
    }, 3000);
});

console.log(promise);  // Initially: Promise { <pending> }

const data = promise.then(result => console.log(result,'Operation successful!')); // After 1 sec: "Operation successful!"
console.log(data,'data')  ////  Promise { <pending> }
console.log('this will execute before promise fullfilled ')
