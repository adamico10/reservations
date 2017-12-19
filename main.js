var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

/*
var name = document.getElementById("nameInput");
var nameInput = nameInput[0].toUpperCase() + nameInput.slice(1).toLowerCase();
document.getElementById("yourname").innerHTML = nameInput
*/

var claimReservation = function () {
  var nameInput = document.getElementById("nameInput").value;  
  var nameInput = nameInput[0].toUpperCase() + nameInput.slice(1).toLowerCase();
  
  while (reservations[nameInput]) {
    if (reservations[nameInput].claimed) {
      alert("Welcome To The Restaurant")
      return
        ;
    }
    else {
      alert("Your reservation has been used")
      return
        ;
    }
  }
  alert("You just got a new reservation")
  reservations[nameInput] = { claimed: true }
  document.getElementById("yourname").innerHTML += "<br>" + nameInput;
}

