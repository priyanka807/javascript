
const ul= document.getElementById("ul")
const input = document.getElementById("input")
let  listOfTodo = JSON.parse(localStorage.getItem("todos"))||["computer",'english',"syllabus"]
let targetValue;
let editModal = false
let editIndex ;
let editList ;
let checkedCheckbox = [false,false,false]
const handleTodo = ()=>{
    ul.innerHTML = ""
listOfTodo.length>0&&listOfTodo.map((list,index)=>{
const createElement = document.createElement("li")
// createElement.innerHTML = `${editIndex===index&&editModal?`<input type="text" value=${editList} 
//     onchange="handleEditChange(event.target.value)"/><button onclick={handleEditSave()}>Save</button></button>`:
//     `<span style="width:100px">${list}</span>
// <i class="fa-regular fa-pen-to-square"  onclick="handleEdit('${list}',${index})" style="color:green;margin-left:20px"></i>
//  <i onclick="handleDelete(${index})" class="fa-solid fa-trash" style="color:red;margin-left:20px"></i>
// `}
// `
// style="${checkedCheckbox[index]?'text-decoration:line-through':''}"

createElement.innerHTML = `<input type="checkbox"  ${checkedCheckbox[index]?'checked':''} onchange="handleSelectedCheckbox(${index})" /><span   style="${checkedCheckbox[index]? 'text-decoration: line-through;' : ''}">${list}</span><i onclick="handleDelete(${index})" class="fa-solid fa-trash" style="color:red;margin-left:20px"></i>
 ${editIndex===index&&editModal?`<input type="text" value=${editList} 
    onchange="handleEditChange(event.target.value)"/><button onclick="handleEditSave()">Save</button></button>`:
    `<i class="fa-regular fa-pen-to-square"  onclick="handleEdit('${list}',${index})" style="color:green;margin-left:20px"></i>
`}
`
ul.appendChild(createElement)
    })  
}
handleTodo()

const handleChangeInputValue = (value)=>{
    targetValue = value
    if(targetValue.trim().length>0){          
listOfTodo = [...listOfTodo,targetValue]  
localStorage.setItem("todos",JSON.stringify(listOfTodo))   
        handleTodo()
    }
    input.value =  ""
}

const handleDelete=(deleteIndex)=>{
    listOfTodo = listOfTodo.filter((_,index)=>index!==deleteIndex)
    localStorage.setItem("todos",JSON.stringify(listOfTodo)) 
    handleTodo()
}

const handleEdit = (editlist,editindex)=>{
    editModal = true
    editList = editlist
    editIndex  = editindex
    handleTodo()
}

const handleEditChange = (editValue)=>{
if(editValue.trim().length>0){
    editList = editValue
}

}

const handleEditSave = ()=>{

    listOfTodo = listOfTodo.map((editItem,editindex)=>editindex===editIndex?editList:editItem)

   localStorage.setItem("todos",JSON.stringify(listOfTodo))
    editModal=false
    editList=""
    editIndex = ""
    handleTodo()  
}

const handleSelectedCheckbox = (checkedIndex)=>{
    const selectedCheckbox = document.querySelectorAll('input[type="checkbox"]')
    const isChecked = Array.from(selectedCheckbox).some((selectedcheckedbox)=>selectedcheckedbox.checked)
if(isChecked){
    let updatedCheckedCheckbox = [...checkedCheckbox]
    updatedCheckedCheckbox[checkedIndex]  = !updatedCheckedCheckbox[checkedIndex]
    checkedCheckbox = updatedCheckedCheckbox
handleTodo()
}
}


