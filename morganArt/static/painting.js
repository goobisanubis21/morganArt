$(document).ready(function() {

    var paintingDiv = $("#painting");
    var selectedPainting = JSON.parse(localStorage.getItem("selected"));
    var imgEl = $("<img>");
    imgEl.attr("src", selectedPainting[0]);
    imgEl.attr("class", selectedPainting[1]);
    paintingDiv.prepend(imgEl);

    backBtn = $("#backBtn")
    backBtn.on("click", function() {
        localStorage.clear("selected");
        window.history.back();
    })

    imgEl.on("click", function() {
        if (imgEl.attr("class") === ".zoomed") {
            imgEl.removeClass("zoomed")
        } else {
            imgEl.addClass("zoomed");
        }
    })

})