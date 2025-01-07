console.log("app.js is loaded");

const socket = new WebSocket('ws://localhost:3000')   

var textarea = document.querySelector("textarea");
var p = document.querySelectoruerySelector("p")

function deltaCode(e) { 

    p.innerText = e.target.value; 
    console.log(e.target.value)

}

textarea.addEventListener('input', deltaCode);
