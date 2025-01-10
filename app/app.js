const socket = io('ws://localhost:3500')

const input = document.querySelector("textarea");
const log = document.getElementById("values");
    
input.addEventListener("input", updateValue);
    
function updateValue(e) {
    log.textContent = e.target.value; 
    socket.emit('message', e.target.value);
}

socket.on("message", (data) => { 
    console.log("socket message recieved")
    console.log(data)
    input.value = data;
    log.textContent = data; 

}) 

socket.on("user connected", (data) => { 

    console.log(data + "user connected") 
    let list = document.getElementById("collaborators")  
    let newId = document.createElement("li")
    newId.innerText = data
    list.appendChild(newId) 


})

socket.on("rerender collaborators", (data) => {  
    let list = document.getElementById("collaborators")   
    list.innerHTML = ""; 


    for (const col of data){ 
        let newId = document.createElement("li")
        newId.innerText = col
        list.appendChild(newId) 

    }
}
)
