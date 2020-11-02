$(document).ready(function() {

    var paintingDiv = $("#painting");

    var selectedPainting = JSON.parse(localStorage.getItem("selected"));
    var imgEl = $("<img>");
    var title = $("#name");
    var size = $("#size");
    var price = $("#price");
    imgEl.attr("src", selectedPainting[0]);
    imgEl.attr("class", selectedPainting[1]);
    title.text(selectedPainting[2]);
    price.text(selectedPainting[3]);
    size.text(selectedPainting[4]);
    paintingDiv.prepend(imgEl);
    paintingDiv.prepend(title);
    paintingDiv.append(size);
    paintingDiv.append(price);

    backBtn = $("#backBtn")
    backBtn.on("click", function() {
        localStorage.clear("selected");
        window.history.back();
    })

    imgEl.on("click", function() {
        imgEl.toggleClass("zoomed")
    })

    var cartBtn = $("#addToCart");

    function cart() {
        console.log(title.text());
        console.log(price.text());
    }

    cartBtn.on("click", cart);

})