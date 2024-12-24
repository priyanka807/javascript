
const data = document.getElementById('data')

function sum(a,b){
return console.log(a+b)
}


function addmoreNum(call,time){

    return function(){
        setTimeout(()=>{
            call(7,7)
            console.log('this is amazing concept')
        },time)

    }
}

const result = addmoreNum(sum,1000)


data.addEventListener('click',function(){
    result()
    })
    