//active class and overlap
const navbarItems = document.querySelectorAll('li')
navbarItems.forEach((navbarItems,index)=>{
    navbarItems.addEventListener('click',()=>{
        //first way of achieving active class
    //  document.querySelector('.active')?.classList.remove('active')  
    // navbarItems.classList.add('active')


    //second way of achieving active class
// const activeItem = document.querySelector('.active')   
// console.log(activeItem,'activeitem')
// if(activeItem!==null){    
//     activeItem .classList.remove('active');
   
// }
// navbarItems.classList.add('active')



//third way of achieving active class and nonactive class
// const navbarLists = document.getElementsByTagName("li")
// for(const list of navbarLists){
//     list.classList.remove("active")  
//     list.classList.add("inactive")  
//     console.log(list,'list')
// }
// navbarItems.classList.remove("inactive") 
// navbarItems.classList.add("active")


})
})

// const headings = document.querySelectorAll(".heading")

// headings.forEach((heading)=>{

//   heading.addEventListener('click',()=>{
// document.querySelector('.gray_background')?.classList.remove('gray_background')
// heading.classList.add('gray_background')

//       const childElement = document.querySelectorAll(".child")
  
//   childElement.forEach((childelem)=>{        
   
//     childelem.classList.remove('pink_background') 
//   })
// const parentElement = heading.parentElement
// const accesschildElement = parentElement.querySelector('.child')
// accesschildElement.classList.add("pink_background")
//   })
// })

const headings = document.querySelectorAll(".headings")

headings.forEach((heading)=>{

  heading.addEventListener('click',()=>{
document.querySelector('.gray_background')?.classList.remove('gray_background')
heading.classList.add('gray_background')

      const childElement = document.querySelectorAll(".childs")
  
  childElement.forEach((childelem)=>{        
   
    childelem.style.display = "none"
  })
const parentElement = heading.parentElement
const accesschildElement = parentElement.querySelector('.childs')
accesschildElement.style.display ="block"
  })
})
 
 
