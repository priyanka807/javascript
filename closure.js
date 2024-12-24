//closure in js is a function that has to access to variable in its outer/parents function
// even parent's function has returned (inner function has retained value of parent function and variable )
//closure are created when function is defined inside another function , inner function retain /access to variable in the outer scope
//in other language when you once returned function so value will not retained but due to closure in javascript once you called fun even value is retained 


// function sum(a){
// console.log(a,'a')
// var b = 3  //lexical variable 
//     return function(c){ //// which sum fuc has returned that we wcan get in annonyomous func // we will not lost a and c value still retained when fun will call again
// return a+b+c
//     }

// }
// const store = sum(2)  // which sum fuc has returned that we wcan get in annonyomous func
// console.log(store(4),'store')

function sum(a,b,c){

    return{
        getTwoSum:function(d){
            return a+b+d
        },
        getThreeSum:function(){
            return a+b+c
        },
    }
}
const store = sum(4,5,6)
// console.log(store.getTwoSum(4) )
const store1 = sum(2,1,0)
console.log(store1.getTwoSum(4) )