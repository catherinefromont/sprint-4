var buttons = document.getElementById("buttons").getElementsByTagName("button")
 for (var i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", showMessage);
 }

var display = event.target.value

function showMessage(event) {
    // console.log(event.target.value);
    document.getElementById("display").innerHTML = event.target.value
}
