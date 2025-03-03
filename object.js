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

// Declare some variables
// const name = "John Doe";
// const email = "johndoe@example.com";
// const phone = "1234567890";

// // Use shorthand properties to create an object
// const user = {
//     name,
//     email,
//     phone
// };

// console.log(user,'user');



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