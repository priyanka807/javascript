
const airport_selection = document.querySelectorAll(".select_airports_section_content")
const pickup_location  = document.getElementById("pickup_location")
const dropoff_location  = document.getElementById("dropoff_location")
const  pickup_airport =  document.getElementById("pickup_airport")
const  dropoff_airport =  document.getElementById("dropoff_airport")
const pickup_location_section  = document.getElementById("pickup_location_section")
const droppoff_location_section  = document.getElementById("droppoff_location_section")
const  form=  document.getElementById("form")
let pickup_location_value  = document.getElementById("to_airport")?.value

airport_selection.forEach((airportSelect)=>{
    
airportSelect.addEventListener('click',()=>{
    document.querySelector('.active')?.classList.remove('active')
    airportSelect.classList.add('active')
    pickup_location_value = airportSelect.getElementsByTagName("input")[0]?.value
    if(pickup_location_value === "to_airport"){
        pickup_location_section.style.display ="block"
        droppoff_location_section.style.display="none"

    }else{
        pickup_location_section.style.display ="none"
         droppoff_location_section.style.display="block"
     
    }

})
})

form.addEventListener('submit',(e)=>{
e.preventDefault();
    if(pickup_location_value==="to_airport"){
        console.log(`You have selected pickup location : ${pickup_location.value} and airport : ${pickup_airport.value}`)
    }else{
        console.log(`You have selected dropoff location : ${dropoff_airport.value} and airport : ${dropoff_location.value}`)
    }
})


