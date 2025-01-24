let preson ={
    id:3,
    name:"ritu",
    address:"faridabad",
    true:"maksood",
    true:"maksood",
    "maksood":"raja",
    undefined:"raju",
    '1':"num",

}
// console.log(preson.1)
const map = new Map()
map.set(object,preson)
console.log(map)
console.log(map.get('1'))

let timeout = null; 

if (timeout) {
    console.log('when timeout gets a value');
} else {
    console.log('this will not execute the first time');
}

timeout = 4;


const requestBody = {
    name: "ashwaanirai1",
    email: "ashwaanirai1@gmail.com",
    phone: "9773583043",
    yourrequirement: "i just want to talk to ashwaani rai",
    password: "plaintextpassword"
};


const { name, email, phone, yourrequirement, password } = requestBody;


const user = {
   name:name,
    email:email,
    phone:phone,
    yourrequirement:yourrequirement,
    password:password
};
const user1 = {
 name, email, phone, yourrequirement, password
};

console.log(user,'user');
console.log(user,'user1 both are same you can achieve from anyone');