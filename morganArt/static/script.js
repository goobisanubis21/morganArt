$(document).ready(function() {

console.log("home");

var selected = JSON.parse(localStorage.getItem("selected"));
    if (selected == null) {
        selected = [];
    }

var featuredPainting = $("#featured-painting-image")
function featuredClick() {
    console.log("clicked");
    var painting = $(this).attr("src");
    var id = $(this).attr("id");

    selected.push(painting, id);
    localStorage.setItem("selected", JSON.stringify(selected))

    setTimeout(function() {
        window.location.href = "painting.html"
    }, 200);
    
}

    featuredPainting.on("click", featuredClick);
});