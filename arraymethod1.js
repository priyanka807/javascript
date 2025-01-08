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
console.log(result6,"result6")

let checked1 = [false,false,false]
let update = [...checked1]
update[3] = !update[3]
 checked1 = update
console.log(update,'update')
console.log(checked1,'checked1')

const game = [1,2,3,4,5]
console.log(Array(game.length).fill(false))

if(game.includes(5)){
    throw new Error('it is already exits')
}else{
    console.log('everything is fine and create new user')
}


const arrlist = []
console.log(!arrlist)