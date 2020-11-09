var cartArt = $("#cartArt");
var total = $("#total");

var cartpainting = JSON.parse(localStorage.getItem("cartPaintings"));
if (cartpainting == null) {
    cartArt.text("Cart is empty")
} else {

    for (var i = 0; i < cartpainting.length; i++) {
        var divEl = $('<div>');
        var imgEl = $("<img>");
        var h1El = $('<h1>');
        var price =$('<h2>');
        divEl.attr('class', 'painting');
        h1El.text(cartpainting[i][0]);
        imgEl.attr('src', cartpainting[i][1]);
        price.text(cartpainting[i][2]);
        imgEl.attr('id', 'painting');

        divEl.append(imgEl);
        divEl.prepend(price);
        divEl.prepend(h1El);
        cartArt.append(divEl);

        const emptyCart = $('#emptyCart')
        emptyCart.on('click', function () {
            localStorage.removeItem('cartPaintings');
            divEl.text('Cart is Empty');
            location.reload();
        })
    }

}


