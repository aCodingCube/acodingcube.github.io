window.addEventListener("mousedown",MouseDown);
window.addEventListener("mouseup",MouseUp);
function MouseDown(){
    document.getElementById("Feedback").innerHTML = "Mousebutton pressed!"
}
function MouseUp(){
    document.getElementById("Feedback").innerHTML = "Mousebutton released!"
}