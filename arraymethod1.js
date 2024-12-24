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