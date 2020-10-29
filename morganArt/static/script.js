$(document).ready(function() {

console.log("home");
var featuredPainting = $("#featured-painting-image")
function featuredClick() {
    console.log("clicked");
}


    featuredPainting.on("click", featuredClick);
});