


let obj = {name:'roshni',add:'lon',hobb:'wri'}

let obj1 = Object.assign({},obj)
obj1.name = "nishu"
// console.log(obj,'obj')
// console.log(obj1,'obj1')
console.log(JSON.parse(JSON.stringify(obj)),'make both key pair value in string ')