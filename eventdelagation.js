
//event delegation provide the event to the parent , child can acceess event from parent event
//use case : 1000 paragraph - spell wrong - not correct in all pg manaually using a simple technique
// const parent = document.getElementById('parent')
// parent.onclick = function(event){
// let  event1 = event.target.innerText
//  event1 = "paragraph"
//  console.log(event1)
//  }
//innerText,innerHTML,textContent = inner value
// const parent = document.getElementById('parent').addEventListener('click',function(event){
//     const target = event.target.tagName;
//     if(target==="DIV"){
//         const clickedDiv = event.target;
//         const textContent = clickedDiv.textContent;


//         const paragraph = document.createElement('p');
//         paragraph.textContent = textContent;
        

//         clickedDiv.parentNode.replaceChild(paragraph, clickedDiv);
//         console.log(paragraph,'paragraph')
//                 console.log(clickedDiv,'clickeddiv')
//     }
 

// })

const parent = document.getElementById('parent').addEventListener('click',function(event){

 let  textContent=  event.target.innerHTML;

    textContent = 'paragraph' + textContent
    console.log(textContent,'clickeddiv')
  
    

})