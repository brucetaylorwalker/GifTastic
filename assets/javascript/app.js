var muppetArray = ["Scooter", "Miss Piggy", "Fozzie Bear", "Beaker", "Dr. Bunsen Honeydew", "Rizzo the Rat", "Gonzo"];

function renderButtons() {
    $("#muppets-view").empty();

    for (var i = 0; i < muppetArray.length; i++) {
        var a = $("<button>");
        a.addClass("muppet");
        a.attr("data-name", muppetArray[i]);
        a.text(muppetArray[i]);
        $("#muppets-view").append(a);
    }
}

$("#add-muppet").on("click", function(event) {
    event.preventDefault();
    var muppet = $("#movie-input").val().trim();
    muppetArray.push(muppet);
    renderButtons();
});

renderButtons();

