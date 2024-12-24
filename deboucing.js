let count = 0
function myfunction(){
    const input = document.getElementById("input")
 console.log(input.value,"search term")   
}

const debounce = (call,time)=>{
let timer;
    return function(){
if(timer)clearTimeout;
setTimeout(()=>{
    call()
},time)
    }
}


const betterfunction = debounce(myfunction,1000)
