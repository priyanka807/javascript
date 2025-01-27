
//fetch and axios are used to make http request .they are diffe in functionality and ease of use 
//fetch and axios  defination :  built in js api for http request  and : popular http  client library for for js 
//fetch and axios ease of use : requires more manual handling of response and simpler syntax, automatic json parsing
// browser support : native and widly supported in browser and requires additional library installation .
// error handling : only handle error for network issues , check manually http status and automatically handle http request 
//feature  :rquires need  extra work for timeout and retries and include advanced fetaures like timeout ,interception and  more.

fetch("https://jsonplaceholde.typicode.com").then((response)=>{
    if(!response.ok){
        console.log(response,'response.status')
        throw new Error(`HTTP Error: ${response.status}`)
        
    }
    return  response.json()
}).then((data)=>console.log(data,'data in fetch')).catch((error)=>console.error(error,"error in fetch"))


axios.get("https://jsonplaceholde.typicode.com").then((data)=>console.log(data,'data in axios'))
.catch((error)=>console.log(error,'error in axios'))
