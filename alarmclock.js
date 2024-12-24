
const time = document.getElementById("time")
const currentDate = document.getElementById("date")
const getTime = document.getElementById('appt')
console.log( getTime,'getTime')

const form = document.getElementById('form')
const alarmAudio = document.getElementById('alarm-audio')
const alarmTime = document.getElementById('alarmTime')

let meredian =""
let hours
let min
let sec
console.log(getTime.value,'getTime')
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const dayNames = ["Sun","Mon","Tue","Wed","Thu","fri","Sat" ]

function setCurrentTime(){
    const date = new Date()
    const currHours = date.getHours()
    const currMin = date.getMinutes()
    const currSec = date.getSeconds()
    const year = date.getFullYear()
    const month = date.getMonth()

    const  monthDate= date.getDate();
    const day = date.getDay()
  
    meredian = currHours >=12 ? "PM" : "AM"
    hours = currHours <10 ? "0" + currHours : currHours
    min = currMin < 10 ? '0'+ currMin : currMin
    sec = currSec < 10 ? '0' + currSec : currSec

    
 time.innerHTML = `${hours>12?hours-12:hours}:${min} :${sec}${meredian}`


 currentDate.innerHTML = `${dayNames[day]} - ${monthNames[month]} ${monthDate} . ${year}`
}

function getTimeDiff(userTime){
	console.log(userTime,"useTime")
    let timeDiff
    const date = new Date()
    const currHours = date.getHours()
    const currMin = date.getMinutes()
    const userTimeInSec = Number(userTime[0])*3600 + Number(userTime[1])*60;
    const curreTimeInSec = currHours*3600 + currMin*60;
    timeDiff = userTimeInSec - curreTimeInSec;
    alarmTime.innerHTML = `You Have Set The Alarm At :${userTime.join(":")} ${userTime[0]>=12?"PM":"AM"}`;
   return timeDiff*1000;
}

function callAlarm(value){
   
alarmAudio.src = "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3";
alarmAudio.load();
  setTimeout(()=>{
    alarmAudio.play();
  },value)
}


function handleClear(){
    alarmAudio.src = " ";
    alarmTime.innerHTML =" "
}
form.addEventListener("submit",(e)=>{
e.preventDefault()

 const leftSecond = getTimeDiff(getTime.value.split(":"))

 
  callAlarm(leftSecond)
  document.forms[0].reset();
})
setCurrentTime()
setInterval(setCurrentTime,1000)