//defining global variables
var getPercentageChange = "";
var oldNumber = "";
var newNumber = "";

//function to check (+/-10%) of BTC value
function getPercentageChange() {
  var currentValue = oldNumber - newNumber;
  return (currentValue / oldNumber) * 100;
}

function giphyPrint() {
  let result;
  if (getPercentageChange >= 10) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}
// Adding click event listen listener to all buttons
$("button").on("click", function () {
  // Grabbing and storing the data-currency property value from the button
  var currency = $(this).attr("data-currency");

  // Constructing a queryURL using the currency name
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    currency +
    "&api_key=dc6zaTOxFJmzC&limit=10";

  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET",
  })
    // After data comes back from the request
    .then(function (response) {
      console.log(queryURL);

      console.log(response);
      // storing the data from the AJAX request in the results variable
      var results = response.data;

      // Looping through each result item
      for (var i = 0; i < results.length; i++) {
        // Creating and storing a div tag
        var currencyDiv = $("<div>");

        // Creating and storing an image tag
        var currencyImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        currencyImage.attr("src", results[i].images.fixed_height.url);

        // Appending the paragraph and image tag to the currencyDiv
        //currencyDiv.append(p);
        currencyDiv.append(currencyImage);

        // Prependng the currencyDiv to the HTML page in the "#gifs-appear-here" div
        $("#gif-here").prepend(currencyDiv);
      }
    });
});

//console.log(giphyPrint(11));
//console.log(giphyPrint);
//console.log(getPercentageChange);
