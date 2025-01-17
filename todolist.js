const form = document.getElementById("form")
const input = document.getElementById("input")
const ul = document.getElementById("ul")
const selectAllCheckbox = document.getElementById("selectAllCheckbox")
const select_all_checkbox= document.getElementById("select_all_checkbox")
let todolist = JSON.parse(localStorage.getItem("todolist")) || ["frontend", "fullstack", "ai learning", "master in communication"]
let updateTodoList;
let searchTerm = ""
localStorage.setItem("todolist", JSON.stringify(todolist))
let editModal = false
let editItems ;
let editIndex;
let checkboxStatus = Array(todolist.length).fill(false)
let selectALlCheckboxStaus = false
const handleTodolist = () => {


    selectAllCheckbox.innerHTML = `<input type="checkbox"  ${selectALlCheckboxStaus?'checked':''} onchange="handleSelectAllCheckbox(event.target.value)" id="select_all_checkbox"/><label for="all_select_checkbox">Select All</label>`
    ul.innerHTML = ""
    todolist.map((list, index) => {
        const createLi = document.createElement("li")
        createLi.style.listStyle = "none"
        createLi.innerHTML = `<input type="checkbox"  ${checkboxStatus[index]?'checked':''}  onchange="handleCheckboxStatus(${index})"/>
        <span style="text-decoration:${checkboxStatus[index]?'line-through':''}">${list}</span>
        <button onclick="handleDelete(${index})">Delete</button>
         
        ${editModal&&editIndex===index?`<input type="text"   value='${editItems}' onchange="handleEditItems(event.target.value)"/><button onclick="handleEditSave()">Save</button></div>`:
            `<button onclick="handleEdit(${index},'${list}')">Edit</button>`}`
        ul.appendChild(createLi)

    })

    input.value = ""

}
handleTodolist()
const handleSearchTerm = (seacrhterm) => {
    searchTerm = seacrhterm
    if (seacrhterm.trim().length > 0) {
        todolist = [...todolist, seacrhterm]
        localStorage.setItem("todolist", JSON.stringify(todolist))

        handleTodolist()
    }
}
form.addEventListener("submit",(event)=>{
event.preventDefault()
handleTodolist()
})
const handleDelete = (id) => {
    const filterTodolist = todolist.filter((_, index) => index !== id)
    todolist = filterTodolist

    localStorage.setItem("todolist", JSON.stringify(todolist))
    handleTodolist()
}
const handleEdit = (id, item) => {
   
    editModal = true
    editIndex = id
    editItems = item
    handleTodolist()
   
}


const handleEditItems  = (editvalue)=>{
    if(editvalue.trim().length>0){
    editItems = editvalue
}

}
const handleEditSave =  ()=>{  
        const updateTodolist = todolist.map((updatetodo,index)=>index===editIndex?editItems:updatetodo)
        todolist = updateTodolist
        localStorage.setItem("todolist", JSON.stringify(todolist))
editModal=false
editItems= ""
editIndex=""
handleTodolist()

}

const handleCheckboxStatus =(checkboxIndex)=>{
   
const  updateCheckboxStaus = [...checkboxStatus]
updateCheckboxStaus[checkboxIndex] = !updateCheckboxStaus[checkboxIndex]
checkboxStatus = updateCheckboxStaus
handleTodolist()
// [true,true,true,false,false,true]  5 checked and one unchecked make one unchecked false to true and provide selectallcheckbox to false 
if(updateCheckboxStaus.some((status)=>!status)){  
    selectALlCheckboxStaus = false
    handleTodolist()
}else{
    selectALlCheckboxStaus = true
    handleTodolist()
}
}


const handleSelectAllCheckbox=()=>{
    const allchecked = !selectALlCheckboxStaus
    selectALlCheckboxStaus = allchecked
    const allcheckbox = checkboxStatus.map(()=>allchecked)
    checkboxStatus = allcheckbox
    handleTodolist()
    console.log(allcheckbox,'allcheckbox')
}



