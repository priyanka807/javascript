
//console.log(!undefined)  //output true

const arr = [4,5,6,0,2,3,2,4,5]
const dublicate = arr.filter((current,index,self)=>self.indexOf(current)!==index)
// console.warn(dublicate,'dublicate')

const boolean = [false,true,false,true]
const makeAllTrue = boolean.map(()=>true)
const makeAllFalse = boolean.map(()=>false)

// console.log(makeAllTrue,'makeAlltrue')

const todo = ["makeup","car","travelling","looks"]
const updateOnlyElement = todo.map((items)=>items==="travelling"?"goa manali ":items)
// console.log(updateOnlyElement,'updateOnlyElement')

let  checkboxStatus = [true,false,true,false]
const updateCheckboxStatus = [...checkboxStatus]
updateCheckboxStatus[1]  = !updateCheckboxStatus[1]
checkboxStatus = updateCheckboxStatus
// console.log(checkboxStatus,'checkboxStatus')
// console.log(updateCheckboxStatus,'update')

//some method : as soon as condition fullfill truthy value it will stop to check more 
const singleCheckboxChecked = checkboxStatus.some((checked)=>checked===true)
// console.log(singleCheckboxChecked,'singleCheckboxChecked')
//in this case : if not single element satisfied the some condition if single element will not return thruthy value then only execute else condition
if(checkboxStatus.some(checked=>!checked)){
    console.log('if single  checkbox are unchecked in that scenerio this will execute ')
}else{
console.log('if all checkbox are checked in that scenerio this will execute ')
}

//every apply on each element satisfy the same condition only then use every method exx : when you need to check all checkbox are checked 
const allElementChecked = checkboxStatus.every(allchecked=>allchecked===true)
if(false){
console.log('if this will true only then execute this one ')
}else{
   // console.log('if this will execute this one because first state is false condition ')
}

const list1 = [
    { id: "1", list: "list1" },
    { id: "2", list: "list1" },
    { id: "3", list: "list1" },
    { id: "4", list: "list1" }
  ];
  
  const selectedItems = list1.filter((_, index) => true);
  //console.log(selectedItems,'selectedItems') //select all the element 
  const selectedItems1 = list1.filter((_, index) => false);
  //console.log(selectedItems1,'selectedItems1') //will not provide single element 
  const selectedCheckbox = list1.filter((_, index) => checkboxStatus[index]);
  //console.log(selectedCheckbox,'selectedCheckbox') //only return those element what  satisfy  the true condition

  const unSelectedCheckbox = list1.filter((_, index) => !checkboxStatus[index]);
//   console.log(unSelectedCheckbox,'unSelectedCheckbox')


let thick  = false

if(!thick){
    console.log(thick,'lets check what will print here 1')
}

thick = true 
    console.log(thick,'lets check what will print here 2')