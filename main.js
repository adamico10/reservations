var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

/*
var name = document.getElementById("nameInput");
var nameInput = nameInput[0].toUpperCase() + nameInput.slice(1).toLowerCase();
document.getElementById("yourname").innerHTML = nameInput
*/


// we can use filter
// reservation.filter(function(name){ toLowerCase})
// search key in an object in js


// class
// 
/*
function findClient(clientName) {
  for(var name in reservations) {
    if(name.toLowerCase() == clientName.toLowerCase()) {
      return reservations[Name];
    }
  }
  return null;
}


var obj = findClient(clientName);
if (obj == null) {
  //add new reservations
}
else {
  // say welcome or tell he it is claimed
}
*/

///////////////////////////////////////////////////////////


// my solution

var claimReservation = function () {
  var nameInput = document.getElementById("nameInput").value;  
  var nameInput = nameInput[0].toUpperCase() + nameInput.slice(1).toLowerCase();
  
  if (reservations[nameInput] && reservations[nameInput].claimed) {
      alert("Welcome To The Restaurant")
        ;
    } else if(reservations[nameInput] && !reservations[nameInput].claimed) {
      alert("Your reservation has been used")
        ;
    }
  else {
  alert("You just got a new reservation")
  reservations[nameInput] = { claimed: true }
  document.getElementById("yourname").innerHTML += "<br>" + nameInput;
}
}

