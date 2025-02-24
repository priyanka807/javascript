console.log("first")
let arr =[1,2,3,4,5]

let preson =[{
    id:3,
    name:"ritu",
    address:"faridabad"
},{
    id:1,
    name:"priya",
    address:"faridabad"
},{
    id:2,
    name:"mak",
    address:"Delhi"
}]

//map,filter,foreach, sort, reduce
const result = arr.map((item)=>item*2)
const result1 = arr.forEach((item)=>item*2)
// console.log(result1)
const result4 = arr.filter((item)=>item<5)
// console.log(result4,"result4")
const result5 = arr.map((item)=>{
    if(item<5){
       return item
    }
})
// console.log(result5,"result4")
// console.log(first)
const result6 = preson.sort((a, b) => a.address.localeCompare(b.address));
// console.log(result6,"result6")

let checked1 = [false,false,false]
let update = [...checked1]
update[3] = !update[3]
 checked1 = update
// console.log(update,'update')
// console.log(checked1,'checked1')

const game = [1,2,3,4,5]
console.log(Array(game.length).fill(false))

if(game.includes(5)){
    throw new Error('it is already exits')
}else{
    console.log('everything is fine and create new user')
}


const arrlist = []
console.log(!arrlist)
// console.log([]=="",'true') // == perform type coercion convert into same type array become string that'why return true 
// console.log([]==[],'false')     // == only convert into same type when we are using two diffrent data types that'why return false
// bjects and arrays are compared by reference, not by value
// Each empty array ([]) is a unique object with a different memory reference.
// console.log([]===[],'false') // have diffrent memory location 

let arr1 = [];
let arr2 = arr1;  // Both now reference the same array , have same reffrence memory location
console.log(arr1 === arr2);  // true



function dublicateunique(character){
    const obj = {}
    const dublicate = []
    const unique = []
    for (let char of character){
        if(obj[char]>0){
           obj[char] += 1
        }else{
            obj[char] = 1
        }
      
    }
for(const key in obj){
    if(obj[key]>1){
        
        dublicate.push(key)   
    }else{
        unique.push(key)
       
    }
   
            // {a:1}
}
    console.log( unique,'unique')
      console.log(dublicate,'dublicate')    
}
dublicateunique('abstract')
