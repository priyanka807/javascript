
//charCodeAt,charCodePoint,matchAll
const Name = "priyanka"
const Name4 = "vaishali"
const Name5 = "vishal"
const Name6 = "vishal"
const Name1 = "    roshni    "
console.log(Name.length,'8')
console.log(Name.charAt(4),'a')
console.log(Name[0],'p')
console.log(Name.charCodeAt(3),'y')
console.log(Name[2],'i')

console.log(Name.includes('t'),'-1')
console.log(Name.includes('a'),'true')
console.log(Name.indexOf('a'))
console.log(Name4.lastIndexOf('i'),'7')

console.log(Name.trim(),'remove space from both side')
console.log(Name.trimStart(),'remove space from start')
console.log(Name.trimEnd(),'end')

const Name2 = 'mukesh'
console.log(Name.localeCompare(Name2),'m<p,,p>m =true1 , badda')
console.log(Name2.localeCompare(Name),'chhotta otherwise -1')
console.log(Name4.localeCompare(Name5),'chhotta otherwise -1 false both are not same')
console.log(Name5.localeCompare(Name6),'equal,return 0, both are  same')


console.log(Name.startsWith('p'),'true or 1')
console.log(Name.endsWith('r'),'false or -1')
console.log(Name.concat(Name1))
console.log(Name.match('a'),'provide us to index,input,group of that field')
console.log(Name.matchAll(['priyanka']),'false')
console.log(Name.replace('r','a'))
console.log(Name.replaceAll('priyanka','kumari'))
console.log(Name.length,'8')
const string = 'priyanka'
console.log(string.charAt(string.length-1),'-1 is used to define last iteme of element of string and arr','')
const Name7 = ["p","r","i","y","a"]   //last index with element items


for(let inx in Name7){
   console.log(inx,'inx')
    const accessstring = Name7[inx]
    const arr = [6,7,8,9,3]
    const sort = arr.sort()
    console.log( accessstring,'index')
}

console.log(Name7.indexOf("p"),'aknayirp')

//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
//or -1 if needle is not part of haystack.

Input: haystack = "sadbutsad", needle = "sad"
console.log(haystack.indexOf(needle),'0 first occurence are the same then return 0 ')
console.log(haystack.indexOf("s"),'0')

Input :haystack="leetCode",needle="leete"
console.log(haystack.indexOf(needle),'-1 ')

console.log(Name.substring(4,-1),'substring')  //substring does not support - intergers value it is sililar to slice 
console.log(Name.split("",5),'split')  //empty string take integer value
console.log(Name.split(",",5),'split')  // take combine integer do not support interger value
