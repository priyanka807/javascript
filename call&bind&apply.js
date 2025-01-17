
//call : invoke function immediately , allowing us to use this context and indivisual arguments (seperated by the comma),borrrow the function of another object 
//apply : '' , take arguments as an array 
//bind : return new fun with this context permanetaly bound 

function callfun(quality){
//     console.log(quality,'quality')
// console.log(`hello my name is ${this.name}.${quality}`)
}

const student = {name :'priyanka'}
const student1 = {name :'muskan'}
callfun.call(student,'this is a brillant girl')   // this reffer to the  object 
callfun.call(student1,'she is fabulous at dancing')  // this reffer to the  object of student1

function applyfun(greeting,punctuation){
    // console.log(`${greeting} ${this.name} ${punctuation}`)
    } 
    applyfun.apply(student,['good morinng','!'])   // this reffer to the  object 

    function bindfun(greeting,punctuation){
        // console.log(`${greeting} ${this.name} ${punctuation}`)
        } 
   const callbindfun = bindfun.bind(student1,'good morinng','!')   // this reffer to the  object 
callbindfun()


const studentA = {
    name:"priyanka",
    totalMarks:600,
    calculateTotalMarks:function(hindi,english,math){
const total = hindi+english+math
        // return  console.log(`total marks of ${this.name} is ${total}`)
    }
}
const studentB = {
    name:"gungun",
    totalMarks:600,   
}
// studentA.calculateTotalMarks(93,120,130)
studentA.calculateTotalMarks.call(studentB,108,198,78)  // without call reffering priyanka marks when you want to show other name then use call 


const sum = {
    getTwoSum : function(a,b){
        console.log(this,'this keyword')
       return console.log(this.name,a+b)
    },
    getThreeSum : function(a,b,c){
        return console.log(this.name,a+b+c)
    }
}

const studentC = {name:'neha'}
sum.getTwoSum.call(studentC,7,8)
sum.getThreeSum.call(studentC,7,8,5)



//call,bind,apply is a property of object , use to borrow fun  of a ob to the another obj  ,apply : take data in arr from other obj,
//bind : return borrow fun not return the output of borrow fun

//this is a old way to get obj property updata and delete and add
function borrowfun(obj,up){
    obj.priyanka = up  
    console.log(obj.priyanka,'update obj')
  console.log('borrow fun from other obj')
  }
  
  const obj = {
    kiran:'typea' ,
    mukesh:'typeb',
    priyanka:'typec'
  
  
  }
  borrowfun(obj,'typed')
  
  
  
  function borrowfun1(){
     
    }
    borrowfun1(obj,'typed')
  
  //   const stud1 = {
  // id:1,
  // name:'priyanka',
  // address:'delhi',
  // pass:function(pass){
  //  return console.log(pass,'pass')
  // }
  //   }
  
  //   stud1.pass('toiletpass')
  
    const stud1 = {
      id:1,
      name:'priyanka',
      address:'delhi',
     updateaddress:function(up){
       return console.log(up,'up')
      }
        }
      
  
    stud1.updateaddress('london')
    console.log(stud1,'stud1')
  
    const stud2 = {
      id:2,
      name:'roshni',
     address:'jharkhand',
     nameupdate:function(upName){
      this.name = upName
     }
  }
  
  stud1.updateaddress.apply(stud2,['purani delhi'])
  
  console.log(stud2,'stud2')
  
  const stud3 = {
  id:3,
  name:'mukesh',
  address:'nangloi',
  
    
    }
  stud2.nameupdate.call(stud3,'maksood')
  


// const studentA = {
//     name:"priyanka",
//     marks:450,
//     totalMarks : function(bio,chem){
//       return bio+chem
//     }
// }
// studentA.totalMarks(56,97)
// const studentB = {
//     name:"gungun ",
//     marks:444,  
// }

// studentA.totalMarks.call(studentB,87,8)

//
// const obj = {
//   a: 1,
//   b: 2,
//   sum() {
//     return this.a + this.b;
//   }
// };
//   // sum()
// const newObj = obj.sum; //when you obj.sum assign to newobj ,you are copying methed itself.  newobj   will not bound for obj , this is standalone function , newobj will no longer bound for obj .it become default behaviour of this globally 
// console.log(newObj());  


let count = 0
const obj = {

  count: 1,
  increment() {
    this.count++;
    console.log(this.count);
  }
};

const increment = obj.increment
increment();
obj.increment();


    //var is func and global scope scope declaration  we can access value outside of block of scope . 