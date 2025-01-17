
const navItems = document.querySelectorAll(".navitems")
const parent = document.querySelectorAll(".parent")
const parentElem = document.querySelectorAll(".parentElem")
console.log(parent,'parent')
navItems.forEach((navItem)=>{
navItem.addEventListener('click',()=>{
    for(const navlinks of navItems){
        navlinks.classList.add("inactive")
        navlinks.classList.remove("active")
        console.log(navlinks,'navlinks')
    }
    navItem.classList.remove("inactive")
    navItem.classList.add("active")
})
})

parent.forEach((parentItem)=>{
    parentItem.addEventListener('click',()=>{
        document.querySelector('.parent_active')?.classList.remove('parent_active')
        parentItem.classList.add("parent_active")
        for(const childElem of parent){
            const parentElement = childElem.parentElement
            const getAllPElement = parentElement.querySelectorAll("p")
             getAllPElement.forEach((allPElem)=>{

                allPElem.classList.remove("child_active")              
        })
           
        }

        const parentElement = parentItem.parentElement
        const getAllPElement = parentElement.querySelectorAll("p")   
        getAllPElement.forEach((childElem)=>{   
            childElem.classList.add("child_active") 
            console.log(childElem,'childElem')  
        })     
    })
    })

    parentElem.forEach((parentElemItem)=>{
        parentElemItem.addEventListener('click',()=>{
            document.querySelector('.parent_active')?.classList.remove('parent_active')
            parentElemItem.classList.add("parent_active")
            for(const childElem of parentElem){
                const parentElement = childElem.parentElement
                const getAllPElement = parentElement.querySelectorAll("p")
                 getAllPElement.forEach((allPElem)=>{
    
                    allPElem.style.visibility = "hidden"             
            })
               
            }
    
            const parentElement = parentElemItem.parentElement
            const getAllPElement = parentElement.querySelectorAll("p")   
            getAllPElement.forEach((childElem)=>{   
                childElem.style.visibility = "visible"
            })     
        })
        })