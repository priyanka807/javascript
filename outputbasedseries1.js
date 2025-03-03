//console.log(1++'1') //invalid left side expression in the postfix operation
// console.log(1++1,'2') //invalid left side expression in the postfix operation

// console.log(1+'1','get 11 due to string concatnation means whenever we use + plus with number and string so it convert number into string ')  
// console.log( 1+'name','string concatnation ')
// console.log(1+'-1','1-1  "-1 is a valid number in any operator (*,/,- )" if second operand is valid number then it will convert into number ')
// console.log(1*'-1','-1  convert into number is number is valid ')
// console.log(1-"-1",'* ,/ ,- in every case got 1-1 convert into number is number is valid ')
//console.log(4==="4")  //===  strict equaly ,do not perform type cocericion means (convert into same type) , must operand be same type 
//console.log(4=="4")  // == perform type cocericion convert into same time before comparision 
// console.log( '1'/'1','excluding plus if you use any operation with string if no. is valid so it will convert into number  ')

//console.log(true===true) //true
//console.log(true!==true)  //false
// let num = 10
// console.log(num++,'10')  //++ post inc operator 
// console.log(num,'11')
// console.log(++num,'12')
// console.log(num,'12')


// console.log(["value compare"]===["value compare"]) //false because it reffrence the diffrent memory location even they are empty , object are compare by reffrence 

const promise = new Promise((ressolve,reject)=>{return ressolve("send error status")})
// console.log(promise,'promise')