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