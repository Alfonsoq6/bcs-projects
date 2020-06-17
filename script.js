//defining global variables
var getPercentageChange = "";
var oldNumber = "";
var newNumber = "";

//function to check (+/-10%) of BTC value
function getPercentageChange() {
  var currentValue = oldNumber - newNumber;
  return (currentValue / oldNumber) * 100;
}

// Performing an AJAX request with the queryURL
$.ajax({
  url: queryURL,
  method: "GET",
});

function giphyPrint() {
  let result;
  if (getPercentageChange >= 10) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}

console.log(giphyPrint(11));
console.log(giphyPrint);
console.log(getPercentageChange);
