const socket = io('ws://localhost:3000')

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
    input.textContent = data;
    log.textContent = data; 

})
