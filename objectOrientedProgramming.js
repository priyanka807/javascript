// //object oriented programm is style that organize the code into object procediral.
// //variable and function with oops .  


// const baseSalary= 20000
// const rate = 800
// const hours = 8
// const day = 30 
// const totalDayWorking = 25

// function employeeSalaryCalculation (){
//     // return console.log(baseSalary / day *totalDayWorking,'salary')
// }
// employeeSalaryCalculation ()

// const employee = {
//     baseSalary:20000,
//     day: 30 ,
//     totalDayWorking :25,

//     calcaluteSalary:function(){
//   return console.log(baseSalary / day *totalDayWorking,'.........salary')
//     },

//     calculateTotalSunday:function(){
//         const findSunday = 5 //find sunday from calender
//          console.log(findSunday,'findSunday')
//        return  findSunday
//     },


//     calculateExtraWorkingSalary:function(){
//         const getExtraDay = day-employee.calculateTotalSunday()

        
//         return console.log(getExtraDay,'.........salary')
//     }


// }

// employee.calcaluteSalary()
// employee.calculateTotalSunday()
// employee.calculateExtraWorkingSalary()



const baseSalary = 30_000
const overtime = 10
const rate = 20

function getWage (baseSalary,overtime,rate){
    // return console.log(baseSalary+overtime+rate,'first ')
}

getWage(baseSalary,overtime,rate)


const employee = {  // variable are property and functions are method this is called encapusalation 
    baseSalary:30_000,  // without passing this variable we can access in this function using this keyword this is called encapulation
    overtime:10,
    rate:20,
    getWage:function(){
        // return console.log(this.baseSalary+this.overtime+this.rate,'second')
    }
}

employee.getWage()

class Employee {  // variable are property and functions are method this is called encapusalation 
    baseSalary=30_000;  // without passing this variable we can access in this function using this keyword this is called encapulation
    overtime=10;
    rate=20;
    getWage(){
        return console.log(this.baseSalary+this.overtime+this.rate,'third')
    }
}

const employee1  = new Employee()
const employeeTwo = new Employee()
const employeeThree = new Employee()
employee1.getWage()
employeeTwo.getWage()