console.log("promiss");
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("something went wrong");
  }, 5000);
});
const result = promise.then((data) => data);
console.log(result, "promise");
promise.then((data) => console.log(data)).catch((error) => console.log(error));

// function fetchApi() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// }
const fetchApi1 = async () => {
  try {
    const res = await promise;
    console.log(res, "result");
  } catch (error) {
    console.log(error);
  }
};
fetchApi1();
// async function name(){
//     return "maksood"
// }
// console.log(name())
// console.log(fetchApi())
//Async function return a promise this promise state can be either resolve or rejected
//wheres
//await suspends the called function excution unitll the promise return a result for the excution