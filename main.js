var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}


var name = prompt('Please enter the name for your reservation');
var name = name[0].toUpperCase() + name.slice(1).toLowerCase();

var claimReservation = function () {
  while (reservations[name]) {
    if (reservations[name].claimed) {
      alert("Welcome To The Restaurant")
      return;
    }
    else {
      alert("Your reservation has been used")
      return;
    }
  }
  alert("You just got a new reservation")
  reservations.push({x:name , { claimed: true }})
  }

      claimReservation();