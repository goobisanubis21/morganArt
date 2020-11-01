$(document).ready(function() {

localStorage.clear(selected);

var selected = JSON.parse(localStorage.getItem("selected"));
    if (selected == null) {
        selected = [];
    }

var featuredPainting = $("#featured-painting-image")
function featuredClick() {
    console.log("clicked");
    var painting = $(this).attr("src");
    var id = $(this).attr("id");
    var name = $(this).attr("alt")
    var price = $(this).attr("price");
    var size = $(this).attr("size");

    selected.push(painting, id, name, price, size);
    localStorage.setItem("selected", JSON.stringify(selected))

    setTimeout(function() {
        window.location.href = "painting.html"
    }, 200);
    
}

    featuredPainting.on("click", featuredClick);
});