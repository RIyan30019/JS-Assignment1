// https://github.com/RIyan30019/JS-Assignment1



// function converts Kilometers into meters
function kilometerToMeter(kilometerValue) {
  if (kilometerValue <=0 || typeof kilometerValue == 'string') {
    console.log("Sorry length can not be negative or string value or zero");
    return -1;
  }
  else {
    var toMeters = kilometerValue * 1000; //1kilometer=1000meters
    return toMeters;
  }

}
var measurement = kilometerToMeter(0);
console.log(measurement);


//budget calculator calculate total price of Watch mobile and Laptop

function budgetCalculator(quantityOfWatch, quantityOfPhone, quantityOfLaptop) {
  if (typeof quantityOfWatch == 'string' || typeof quantityOfPhone == 'string' || typeof quantityOfLaptop == 'string') {
    console.log("Price can not be a string value ");
  }

  else if (quantityOfWatch >= 0 && quantityOfPhone >= 0 && quantityOfLaptop >= 0) {
    const priceOfWatch = 50;
    const priceOfPhone = 100;
    const priceOfLaptop = 500;

    var totalPrice = quantityOfWatch * priceOfWatch + quantityOfPhone * priceOfPhone + quantityOfLaptop * priceOfLaptop;
    return totalPrice;
  }

  else {
    console.log("Wrong value,Please try again");
  }

}
var sumOfPrices = budgetCalculator(3, 0, 1);
console.log(sumOfPrices);

//calculating hotel cost

function hotelCost(numberOfDays) {
  if (numberOfDays < 0 || typeof numberOfDays == 'string') {
    console.log("Days or months cannot be negative or string value");
  }


  else if (numberOfDays <= 10) {
    var totalCost = 100 * numberOfDays;

  }
  else if (numberOfDays > 10 && numberOfDays <= 20) {
    var firstTenDays = 10 * 100;
    var remainingDays = numberOfDays - 10;
    var nextTenDays = remainingDays * 80;
    var totalCost = firstTenDays + nextTenDays;

  }
  else {
    var firstTenDays = 10 * 100;
    var nextTenDays = 10 * 80;
    var remainingDays = numberOfDays - 20;
    var nextDays = remainingDays * 50;
    var totalCost = firstTenDays + nextTenDays + nextDays;

  }
  return totalCost;
}


var totalHotelBill = hotelCost(90);
console.log(totalHotelBill);

// calculating largest string  in a array

function megaFriend(listOfFriends) {

  if (!listOfFriends.length) { //Checking Empty Array
    console.log("This array is empty");
  }
  else {
    var temp = 0;
    var max;
    for (var i = 0; i < listOfFriends.length; i++) {
      if (listOfFriends[i].length > temp) {
        var temp = listOfFriends[i].length;
        max = listOfFriends[i];
      }
    }
    return max;

  }
}
var friends = ["shamonti", "ratri", "rifat", "rimon", "cameliya"];
var arr = megaFriend(friends);
console.log(arr);






