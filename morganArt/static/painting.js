$(document).ready(function() {

    var paintingDiv = $("#painting");
    var selectedPainting = localStorage.getItem("painting");
    var imgEl = $("<img>");
    var id = localStorage.getItem("id");
    imgEl.attr("src", selectedPainting);
    id.attr("id", id)
    paintingDiv.prepend(imgEl);

})