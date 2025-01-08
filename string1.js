const Name = ["p","r","i","y","a"]
const myArray = ["p","r","i","y","a"]
console.log(Name.indexOf([Name.length-1]))      //return false why -1
console.log(Name[Name.length-1],'will get last index')
console.log(Name[Name.length%Name.length-1],'8%8=0-1=-1 a')

let lastElement = myArray[myArray.length-1+myArray.length%myArray.length]   //0+3%9
console.log(lastElement,'lastelemnt')


Input: s = ["h","e","l","l","o"]
console.log(s.slice().reverse(),'olleh') //slice is used to create shallow copy of orginall arr

function reverseStrg(s){
let start = 0;
let end = s.length-1
console.log(end,'4')
while(start<end){
 s[start]  = s[end]         //h = 0   e-l   l-l l-e 0-h
  start++
  end--
}

}
reverseStrg(s)
console.log(s,'reverse value')
const string = "i love you meri jaan "

let currentIndex = 0;

for (let i = 0; i < string.length; i++) {
if(string[i]===' '||i===string.length-1){
console.log(currentIndex,'currentIndex')
  currentIndex++  

}
}
const splitstring = string.split((' '))
const reversestring = splitstring.reverse()
const pushinstring = reversestring.push(" ")
console.log(splitstring,'jaan meri you love i')


// const convertinArr = string.split()
// for(let i of convertinArr){
//     console.log(i,'add space using join method')
// }
const calculation = eval("7+-*8")
const password = undefined
    console.log(!password,'password')
if(!password){
    console.log('now this will run ')
}