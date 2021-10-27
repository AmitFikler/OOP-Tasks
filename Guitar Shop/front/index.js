const addGuitar = document.getElementById("openBtn")
const form = document.getElementById("add-guitar=form")
addGuitar.addEventListener("click",()=>{
    const radioForm  = 
    `
    <h5>What type of guitar would you like to add?</h5>
    <span>
        <input type="radio" id="classic" name="radio" value="classic">
        <label for="classic">Classic Guitar</label>
    </span>
    <span>
        <input type="radio" id="electric" name="radio" value="electric">
        <label for="electric">Electric Guitar</label>
    </span>
    <span>
        <input type="radio" id="bass" name="radio" value="bass">
        <label for="bass">Bass Guitar</label>
    </span>
    `
    form.innerHTML = radioForm
})


form.addEventListener("change",(e)=>{
    if (e.target.id === "classic"){
        document.getElementById("guitar-form").innerHTML = 
        `
        manufacture year:
        <input id="manufactureYear type="number" placeholder="manufacture year"><br><br>
        brand:
        <input id="brand" type="text" placeholder="brand"><br><br>
        price:
        <input id="price" type="number" placeholder="price"><br><br>
        number of strings:
        <input id="strings" type="number" placeholder="number of strings" value="6"><br><br>
        <button type="submit" id="submitBtn">submit</button>
        `
    }
    if(e.target.id === "electric"){
        document.getElementById("guitar-form").innerHTML = 
        `
        manufacture year:
        <input id="manufactureYear" type="number" placeholder="manufacture year"><br><br>
        brand:
        <input id="brand" type="text" placeholder="brand"><br><br>
        price:
        <input id="price" type="number" placeholder="price"><br><br>
        number of strings:
        <input id="strings" type="number" placeholder="number of strings" value="6"><br><br>
        long neck:
        <select id="longNeck" name="longNeck">
          <option value="true">true</option>
          <option value="false">false</option>
        </select><br><br>
        <button type="submit" id="submitBtn">submit</button>
        `
    }
    if(e.target.id === "bass"){
        document.getElementById("guitar-form").innerHTML = 
        `
        manufacture year:
        <input id="manufactureYear" type="number" placeholder="manufacture year"><br><br>
        brand:
        <input id="brand" type="text" placeholder="brand"><br><br>
        price:
        <input id="price" type="number" placeholder="price"><br><br>
        number of strings:
        <input id="strings" type="number" placeholder="number of strings" value="4"><br><br>
        <button type="submit" id="submitBtn">submit</button>
        `
    }
})

document.getElementById("guitar-form").addEventListener("submit",(ev)=>{
    ev.preventDefault()
    let obj = {}
    for (let children of document.getElementById("guitar-form").children){
        if(children.tagName === "INPUT" || children.tagName === "SELECT"){
            obj[children.id] = children.value      
        }
    }

    createNewGuitar(document.querySelector('input[name = radio]:checked').value, obj)
    getClass()
})

async function getClass(obj){
    const response = await axios.put(`http://localhost:8080/get`,obj)
    console.log(response)
}


function createNewGuitar(type,obj){
    const div = document.createElement("div")
    div.innerHTML = 
    `
    <h5>${type}</h5>
    brand:  ${obj.brand} <br>
    manufacture year:  ${obj.manufactureYear}<br>
    number of strings:  ${obj.strings}<br>
    price:  ${obj.price} <br>
    `
    document.getElementById("guitarList").append(div)
}
