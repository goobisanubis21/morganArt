$(document).ready(function () {

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
    backBtn.on("click", function () {
        localStorage.removeItem("selected");
        window.history.back();
    })

    imgEl.on("click", function () {
        imgEl.toggleClass("zoomed")
    })

    var cartBtn = $("#addToCart");
    var src = imgEl.attr("src");
    var cartPainting = title.text();
    var cartPrice = price.text();

    function cart() {
        console.log(cartPainting);
        console.log(src);
        console.log(cartPrice);

        var paintingPrice = JSON.parse(localStorage.getItem("paintingPrice"));
        if (paintingPrice == null) {
            paintingPrice = [];
        }

        paintingPrice.push(cartPrice)
        localStorage.setItem("paintingPrice", JSON.stringify(paintingPrice));

        var cartPaintings = JSON.parse(localStorage.getItem("cartPaintings"));
        if (cartPaintings == null) {
            cartPaintings = [];
        }

        cartPaintings.push([cartPainting, src, cartPrice])
        localStorage.setItem("cartPaintings", JSON.stringify(cartPaintings));
        setTimeout(function () {
            window.location.href = "cart.html"
        }, 200);
    }

    cartBtn.on("click", cart);

})