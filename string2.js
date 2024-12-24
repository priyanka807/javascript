console.log("aaya")
let name = "Maksood"
let name1 = "dooskaM"

console.log(name.length)
console.log(name.charAt(2))  
console.log(name[4])
console.log(name.includes("v"))
console.log(name.lastIndexOf("o"))
console.log(name.localeCompare(name1))
const str = "Maksood is Best Frontend Developer. Maksood is Best Developer.";
console.log(str.substring(0,7))
console.log(str.slice(-10, -1));
console.log(str.split(".",1))
console.log(str.length)
console.log(str.trim().length)
let s = "anagram"; let t = "nagaram"
var isAnagram = function(s, t) {
    let result= s.localeCompare(t)
    console.log(result)
    if(result!==0){
        return false
    }
    return true
};
const inputArray = ["flower", "flow", "flight"];
console.log(isAnagram(s,t))
console.log(inputArray[1][2])

//Find the Index of the First Occurrence in a String
var strStr = function(haystack, needle) {
    let result = haystack.indexOf(needle)
    return result
};
// Reverse String
var reverseString = function(s) {
    return s.reverse()
};
//Valid Anagram
var isAnagram = function(s, t) {
    let ssorted = s.split("").sort().join("")
  let tsorted = t.split("").sort().join("")
  return ssorted === tsorted
};
//Longest Common Prefix
// var longestCommonPrefix = function(strs) {
//     if(strs.length===0){
//         return '';
//     }
//     let pre =strs[0]
//     for(let i=1; i<strs.length;i++){
//         for(let j=0; j<pre.length;j++){
//             if(pre[j]!==strs[i][j]){
//                 pre = pre.slice(0,j)
//                 break;
//             }       
//         }
//         if(pre===''){
//             break
//         }
//     }
//     return pre
// };
// ;
// console.log(mergeAlternately("abc","pqrma"))

var rotateString = function(s) {
    debugger
    let result = s.split('')
    let lengthOfArr= result.length
    console.log(lengthOfArr,"lengthOfArr")
    let i = Math.ceil((result.length-1)/2)

    for(let i;i<lengthOfArr;i++){
        let value = result.splice(i,1)
        result.shift(value)
        
    }
    return result.join('')
};
console.log(rotateString('abcde'))