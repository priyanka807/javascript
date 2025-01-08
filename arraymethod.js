//arr:arr is the collection of the elements

//foreach :only print the orginall value it can not modify the element of the original value && only make like the map method
const num =  [4,6,2,3,7,9,6]
const res = num.forEach((item)=>item)
//console.log(res,'res')  //undefined 


//modify the element of the original arr , apply all the condition what you want but return all the element even it comes in the condition or not
const num1 =  [4,6,2,3,7,9,6]
const res1 = num1.map((item)=>item*2)
const res2 = num1.map((item)=>item<5)      

//console.log(num1,res1,res2)  //******* */



//filter : provide only those data which condition is applied

//sort : arrange data in sequenuence  //lowecase,uppper,des,acces

const obj = [{
    id:2,
    name:'roshni',
    age:21
},{
    id:1,
    name:'priyanka1',
    age:22
},{
    id:3,
    name:'priyanka2',
    age:23
}]
const result = obj.sort((a,b)=>a.name.localeCompare(b.name))
const result1 = obj.sort((a,b)=>a.id-b.id)

// console.log(result1,'result')


const number = [4,2,5,1,8,6]
// console.log(number.sort())

const arr = [1, 2, 3, 4];

arr.reduce((accum,value,index)=>{
    // console.log(accum,value,index,'accum,value,index')
    return accum+value
},5)

const array = ["apple",1 ,"banana",2,"guava",3]
const filtered = array.filter((items,index)=>{
 if(items==="banana"){
  return items
 }
})
//console.log(filtered,'filtered')

// // console.log(null!==null,'true')
const numbers = [1, 2, 3, 4];
const numbers1 = numbers.map(num => num === 2); 
console.log(numbers1,'[false,true,false,false]'); 
console.log(numbers,'[1, 2, 3, 4]');

