
//split method in js to used to divide each character of substring into array based on specified delimitir . if the delimitir are present so
// seprating through  delimiter 

const str = "priyanka kumari"
const str1 = "priyanka kumari ansari"
const str2 = "Vishal is Best Frontend Developer. Vishal is Best Developer";
// console.log(str.split())  // if no  delimiter are passed then whole string is placed inside array ,no split 
// console.log(str.split("")) //split every single character include split 
// console.log(str1.split(" "))  //it means now you are seperating by space it will take ["priyanka","kumari","ansari"]
// console.log(str.split("."))  // if we passed  delimiter which is not exist in error so it will work like simply converted into array
// console.log(str2.split('.'))  //separated by comma 


//join method in js to used remove array from string and have argument . if the no argument  are passed
// so  take default comma argument  .
//convert into arrayback into string using specify chracter
// console.log(str.split().join()) // priyanka kumari ["priyanka kumari"]
// console.log(str.split().join("")) //priyanka kumari ["priyanka kumari"]
// console.log(str.split().join(" "))  //priyanka kumari ["priyanka kumari"]
// console.log(str.split().join(","))  //priyanka kumari ["priyanka kumari"]
// console.log(str.split().join("."))  //priyanka kumari ["priyanka kumari"]
// console.log(str.split("").join("")) // ["p","r","i","y","a","n","k","a"," ","k","u","m","a","r","i"] priyanka kumari
// console.log(str.split("").join(" ")) // ["p","r","i","y","a","n","k","a"," ","k","u","m","a","r","i"]  p r i y a n k a  k u m a r i
// console.log(str.split("").join(",")) // ["p","r","i","y","a","n","k","a"," ","k","u","m","a","r","i"]   p,r,i,y,a,n,k,a, ,k,u,m,a,r,i
// console.log(str.split("").join(".")) // ["p","r","i","y","a","n","k","a"," ","k","u","m","a","r","i"]   p.r.i.y.a.n.k.a. .k.u.m.a.r.i

// console.log(str1.split(" ").join(" "))  //priyanka kumari ansari
// console.log(str1.split(" ").join(""))  //priyankakumariansari

