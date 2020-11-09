var cartArt = $("#cartArt");

var cartpainting = JSON.parse(localStorage.getItem("cartPaintings"));
if (cartpainting == null) {
    cartArt.text("Cart is empty")
} else {

    for (var i = 0; i < cartpainting.length; i++) {
        var divEl = $('<div>');
        var imgEl = $("<img>");
        divEl.attr('class', 'painting')
        imgEl.attr('src', cartpainting[i][1])
        imgEl.attr('id', 'painting');
        divEl.append(imgEl);
        cartArt.append(divEl);

        const emptyCart = $('#emptyCart')
        emptyCart.on('click', function () {
            localStorage.removeItem('cartPaintings');
            divEl.text('Cart is Empty');
            location.reload();
        })
    }

}


