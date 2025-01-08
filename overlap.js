
const directions = document.querySelectorAll(".direction")
const pickup = document.getElementById("pickup_location")
const dropoff= document.getElementById("dropoff_location")
const select_pickup_location= document.getElementById("select_pickup_location")
const select_pickup_airport= document.getElementById("select_pickup_airport")
const select_dropoff_airport= document.getElementById("select_dropoff_airport")
const select_dropoff_location= document.getElementById("select_dropoff_location")
const show_details = document.getElementById("show_details")
const form = document.getElementById("form")
let getData = document.querySelector("input[name='select_direction']:checked").value 
const  dropoff_location = document.getElementById("dropoff_location")

directions.forEach((direction)=>{
    const airportType = direction.querySelector("input")
direction.addEventListener('click',()=>{
    document.querySelector('.active')?.classList.remove('active')
    direction.classList.add('active') 
    getData = direction.querySelector("input[type='radio']").value 
    if(airportType.id === "to_airport"){
          dropoff.style.display="none"
        pickup.style.display="block"
     }else {
    dropoff.style.display="block"
        pickup.style.display="none" 
     }  
})
})


form.addEventListener('submit',function(event){
    event.preventDefault();
    let pickuplocation ; 
    let dropofflocation
if(getData==="to_airport"){
if(select_pickup_location.value.length>0&&select_pickup_airport.value.length>0){
    pickuplocation = `You have selected  location : ${select_pickup_location.value} and airport : ${select_pickup_airport.value}`
}else{
    pickuplocation = "Please select both location and airport."
}

}else if(getData==="from_airport"){
    if(select_dropoff_airport.value.length>0&&select_dropoff_location.value.length>0){
        dropofflocation = `You have selected  location : ${select_dropoff_airport.value} and airport : ${select_dropoff_location.value}`
    }else{
        dropofflocation = "Please select both location and airport."
    }
}


})

