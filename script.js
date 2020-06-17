// Adding click event listen listener to all buttons
$("button").on("click", function () {
  // Grabbing and storing the data-currency property value from the button
  var currency = $(this).attr("data-currency");

  // Constructing a queryURL using the currency name
  var queryURL =
    "https://api.bitcoincharts.com/v1/markets.json" + currency + "";

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


//function to check (+/-10%) of BTC value
function getPercentageChange() {
    var currentValue = oldNumber - newNumber;
    return (currentValue / oldNumber) * 100;
  }
  
  //function to print gif happy/sad
  function giphyPrint() {
    let result;
    if (getPercentageChange >= 10) {
      result = "http://api.giphy.com/v1/gifs/search?q=money+laughing+cash+rich+startup&api_key=9VZTsKtrM0yPVEY7JlmcICxPTh31NxSQ&limit=1";
    } else {
      result = "http://api.giphy.com/v1/gifs/search?q=spongebob squarepants+sad+spongebob&api_key=9VZTsKtrM0yPVEY7JlmcICxPTh31NxSQ&limit=1";
    }
    return result;
  }
      // We will not be looping through anything? Looping through each result item
      //for (var i = 0; i < results.length; i++) {
        
      // Creating and storing a div tag
        var currencyDiv = $("<div>");

        // Creating and storing an image tag
        var currencyImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        currencyImage.attr("src", results[i].images.fixed_height.url);

        // Appending the paragraph and image tag to the currencyDiv
        currencyDiv.append(currencyImage);

        // Prependng the currencyDiv to the HTML page in the "#gifs-appear-here" div
        $("#gif-here").prepend(currencyDiv);
      }
    });
});

//console.log(giphyPrint(11));
//console.log(giphyPrint);
//console.log(getPercentageChange);
