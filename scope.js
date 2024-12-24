
//var : we can use same variable declaration name using var keyword in js  and value can be changed 
var name = "priyanka"
var name = "roshni"
console.log(name,'name')

//var is a function scope and global scope but not a block scope
{
    var class = '12'
}
console.log(class,'class')


var strength = "dedication"
function hobbies(){
  var hobbi = "writting"  
  console.log(strength ,'strength1')  //this is a global scope
}
console.log(strength,'strength2')


//console.log(hobbi,'hobbies is not defined whenever you define variable name with any keyword  name in function so  it  will become function scope')



