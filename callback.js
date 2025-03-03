

function sum(a,b){
return console.warn(a+b)
}


function addmoreNum(call,time){

    return  function(){
     return  setTimeout(()=>{
        call(7,7)
            console.log('this is amazing concept')
        },time)

    }
}
const result = addmoreNum(sum,1000)
console.error(result(),'result')


    

    // closure is a fun in js which take another function as an arguments . which is then execute when initially
    // function has completed at the appripriate time .
    
    // 1 callback function helps to handle asynchronous operation 
    // Avoid Blocking Code Execution (helps in non-blocking programming).
    // Control Execution Flow (run a function only after another is done).
    
    // function fetchingData(){
    //     setTimeout(()=>{
    //         return console.log('fetching data')
    //     })
    // }
    // const result1 = fetchingData()
    // console.log(result1) 
    // undefined when fetchingData fun start to run , this fun does not wait for get result of asynchrouns task (settimeout function)
    // immediately move to console and fetchData has not returned anything yet  and return undefined 
    //settimeout is asychronous , function doesno't return data in the time 


//     function fetchingData1(callback){
//         setTimeout(()=>{
//             console.log('fetching data')
//             callback('we get data successfully now we can show the data ')//once initial function has completed  (has to return data)even then callback function will execute here
//             return 
//         },2000)
//     }

// function processingData (data){
// console.log(data,'data')

// }  
//this fun wait for 2 sec onced settimeout function has completed then only execute 
// this fun will be only executed once settimeout function has completed that's why we need a callback function 
//without callback function ,function would return before fetching the data 
//callback ensure another function (display user name , display data once user filled all the data ) only run when initial function(settimeout, fetching api , read database ) has completed(data is avaiable)
    // const result2 = fetchingData1(processingData)


    // function getUserData(userId, callback) {
    //     console.log("Fetching user data...");
    //     setTimeout(() => {
    //         const user = { id: userId, name: "Pinka", email: "pinka@email.com" };
    //         console.log("User data fetched.");
    //         callback(user);
    //     }, 3000);
    // }
    
    // function displayUser(user) {
    //     console.log(`User Name: ${user.name}, Email: ${user.email}`);
    // }
    
    // // Calling function
    // getUserData(101, displayUser);
    

    
// callback is a function that take another function as an arguments which is then execute initial function has complted at the appripriate time .
// callback function helps to handle asynchronous operation 
//control execution flow run function only after another is completed

function  fetchData(){
    setTimeout(()=>{
        // console.log('fetching data ')
    },1000)
    }
    const result3 = fetchData()
    // console.log(result3,'undefined ')
    // // return undefined when js run fetchData fun , it does not wait for asynchronous operation completed  ,it immemiadetly 
    //moves to console .that'why we got undefined because func has not return anything yet .
    // in this senerio we need help of callback function since we wait for initially function completed then exceuted next function .
    
    
    function fetchApi (callback){
      return  setTimeout(()=>{
            const userDetails = {name:'priyanka',age:22}
            console.log('this is a concept of callback function ')
          callback(userDetails)
        },1000)
    }
    
    function printFetchingApiData(userDetails){
    console.log(userDetails)
    }
    //this ia a first way to pass callbackfun like this 
    const result1 = fetchApi(printFetchingApiData)
    console.error(result1(),'result')
    
    //this ia a second  way to pass callbackfun like this 
    // fetchApi(function(){
    //     console.log('you can also pass function inside the another function call this function will only call when initial function has completed and fetched the data ,easily manage async task  ')
    // })
    
    //this ia a third   way to pass callbackfun like this 
    // fetchApi(()=>{
    //     console.log('you can also pass directly arrow fun as callbackback ')
    // })
    
    
    // fetchApi(()=>{console.log('first fun for adding product to cart');
        // ()=>{
        //     console.log('sec fun for displaying cart details ')  ;
        //     ()=>{
        //         console.log('third  fun for inc count and remove items from cart')  ;
        //     }
        // }
    // })