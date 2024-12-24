
const input = document.getElementById('input')
const data = document.getElementById('data')

function searchQuery(query){
  console.log(query,'query')  
}

function debounce(fun,delay){
 
    let timer;
return function (...args){
    console.log(args,'args')  

    clearTimeout(timer);
    timer = setTimeout(()=>{
    fun.apply(this,args);
    console.log('debouncing')
    },delay)


}
}

const   debounceInnerFun  = debounce(searchQuery,1000)

input.addEventListener('input',function(event){
const query =event.target.value
debounceInnerFun(query)
})


