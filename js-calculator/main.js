var buttons = document.getElementById("buttons").getElementsByTagName("button")
 for (var i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", handleClick);
 }

var display = ''
var numbers = []
var sum = 0


function handleClick(event) {
  display += ' ' + event.target.value
    // console.log(event.target.value);
    document.getElementById("display").innerHTML = display;

  // !== means if the condition is NOT equal to
//if event.target is an operation (+) then do NOT add to array.
  if (event.target.value !== '+' && event.target.value !== '=' ) {

    numbers.push(event.target.value);
  }

  if (event.target.value === '=') {
    sum = Number(numbers[0]) + Number(numbers[1])

    document.getElementById("answer").innerHTML = sum;


  }




}
