import {EditorView, basicSetup} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"

const socket = io('ws://localhost:3500')

const input = document.querySelector("textarea");
const log = document.getElementById("output"); 


    
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



socket.on("rerender collaborators", (data) => {  
    let list = document.getElementById("collaborators")   
    list.innerHTML = ""; 


    for (const col of data){ 
        let newId = document.createElement("li")
        newId.innerText = "User: " + col
        list.appendChild(newId) 

    }
}
)
