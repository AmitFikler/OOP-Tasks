// import { v4 as uuidv4 } from 'uuid';


const SubmitBtn = document.getElementById("submit")
const form = document.getElementById("form")
form.addEventListener("submit", async (e)=>{
    e.preventDefault()
    await createParson()
})



async function createParson(){
    const response =  await axios.put("http://localhost:8080/player/add",{
        firstName: document.getElementById("inputName").value,
        lastName: document.getElementById("inputLastName").value,
        salary: document.getElementById("inputSalary").value,
        age: document.getElementById("inputAge").value,
        id: document.getElementById("inputId").value
    })
    console.log(response)
}


async function getParsonFullname(){
    const response =  await axios.put("http://localhost:8080/player/add",{
        firstName: document.getElementById("inputName").value,
        lastName: document.getElementById("inputLastName").value,
        salary: document.getElementById("inputSalary").value,
        age: document.getElementById("inputAge").value,
        id: document.getElementById("inputId").value
    })
    console.log(response.data)
}



// async function getFullName(){
//     const response = await axios.get("http://localhost:8080/player/getFullName")
// }