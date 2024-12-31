// function printName (){
//     var name1 ="priyanka"
   
// }
// console.log(name1,'name1 is not defined ')
// printName ()

{
    var name1 ="priyanka"   
}
console.log(name1,'priyanka ')

function duplicateparametername(same,same){
    console.log(same,same,'same,same')

}
duplicateparametername(1,2)


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


