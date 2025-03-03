
// const flatArray = [6,7,['4',4],['6'],[1,2,3,'5'],[1,4,6,7,['8','9'],['8',8,9,6,0],[9]],[9,0],[{name:'',description:''},{name:'',description:''}],{productname:'',category:''},'10','16',true,[],{}]
// const arr = [1,2,[['3','4'],7,8,[5,6,7]]]     //1,2,[array2],7,8.[array3]
// console.log(flatArray.flat(5))


// const objentries = {name:'food',description:'pizza'}
// const objentriesInarray = [{name:'food',description:'pizza'}]
// console.log(Object.entries(objentries))
// console.log(objentries.hasOwnProperty('description'))


// const stringmap = ["javascript","dynmanic language","popular language","world wide language"]
// console.log(stringmap.map((element)=>{
// return element.split(" ")
// }).flat())                         //second method is flatMap to achieve same result


// const includesArr = [4,"6",[{name:"includes"}],true]
// //finding the index of same reference in array ,we used findIndex method ,used callback fun for checking index of refference path
// const searchSubArrIndex = [{name:"includes"}]
// console.log(includesArr.includes("6"))
// console.log(includesArr.findIndex((itemindex)=>searchSubArrIndex===itemindex))

<<<<<<< HEAD
const filterdublicate = [0,1,2,0,1,2,3,4,0,1,2,3]
const duplicates = filterdublicate.filter((value, index, self) =>{
    return self.indexOf(value)!==index
})
=======
// const filterdublicate = [0,1,2,0,1,2,3,4,0,1,2,3]
// const duplicates = filterdublicate.filter((value, index, self) =>{
//     console.log(value,index,self)
// })


// // let thick  = false

// // if(!thick){
// //     console.log(thick,'lets check what will print here 1')
// // }

// // thick = true 
// //     console.log(thick,'lets check what will print here 2')
>>>>>>> d82e74187f2fe4200281537574d0d3568f861878
