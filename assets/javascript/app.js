//initial array
var muppetArray = ["Scooter", "Miss Piggy", "Fozzie Bear", "Beaker", "Dr. Bunsen Honeydew", "Rizzo the Rat", "Gonzo"];

//for loop to append buttons for each string

function renderButtons() {
    $("#muppets-view").empty();

    for (var i = 0; i < muppetArray.length; i++) {
        var a = $("<button>");
        a.addClass("muppet");
        a.attr("data-muppet", muppetArray[i]);
        a.text(muppetArray[i]);
        $("#muppets-view").append(a);
        console.log(a);
    }
}
//input box that adds value to muppetArray (new string)

$("#add-muppet").on("click", function (event) {
    event.preventDefault();
    var muppet = $("#muppet-input").val().trim();
    muppetArray.push(muppet);
    renderButtons();

});

//click on buttons created above to get static gifs in place them in a div

$(document).on("click", ".muppet", function () {
    var muppet = $(this).attr("data-muppet");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + muppet + "&api_key=8kjNAFewbq0qL2LlvwhNFDgchG6bXk9B&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var muppetImage = $("<img>");
                muppetImage.attr("src", results[i].images.fixed_height.url);
                // ?.addClass("gif");
                // ?.attr("data-animate");
                // ?.attr("data-still");
                // ?.attr("data-state");
                gifDiv.append(p);
                gifDiv.append(muppetImage);
                $("#gifs-appear-here").prepend(gifDiv);
            }
        }

    });
});
//click on gifs to animate/still



// $(document).on("click", ".gif", function () {
//     var state = $(this).attr("data-state");
//     console.log(this);

//     if (state === "still") {
//         var animateURL = $(this).attr("data-animate");

//         $(this).attr("src", animateURL);
//         $(this).attr("data-state", "animate");
//     }
//     else {
//         var stillURL = $(this).attr("data-still");

//         $(this).attr("src", stillURL);
//         $(this).attr("data-state", "still");
//     }




// });

renderButtons();









