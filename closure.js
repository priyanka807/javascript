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

//nested variable ,lexical envirment , even function has returned 

function outerfunction(){
    const outervariable = 10
    
        return function(){
            console.log(outervariable,'outervariable')
        }
        
    }
    const callouterfunction = outerfunction()
    callouterfunction()
    


    // In JavaScript, closures allow a function to "remember" and access variables from its outer (enclosing) scope,
    //  even after the outer function has finished executing (returned). 
    //  This behavior proves that closures "capture" the variables and keep them alive in memory.
    function outerFunction() {
        let count = 0;  // Outer function variable
      
        return function innerFunction() {
          count++;  // Inner function accesses outer variable
          console.log('Count:', count);
        };
      }
      
      // Call outer function and store the returned inner function in a variable
      const counter = outerFunction();
      
      // Even though outerFunction has finished, the inner function still has access to `count`
      counter();  // Output: Count: 1
      counter();  // Output: Count: 2
      counter();  // Output: Count: 3
      