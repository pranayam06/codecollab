    
const input = document.querySelector("textarea");
const log = document.getElementById("values");
    
input.addEventListener("input", updateValue);
    
function updateValue(e) {
    log.textContent = e.target.value;
}