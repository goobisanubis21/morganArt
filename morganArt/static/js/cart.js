var cartArt = $("#cartArt");

var cartpainting = JSON.parse(localStorage.getItem("cartPaintings"));

var imgEl = $("<img>");
imgEl.attr('src', cartpainting[1])
imgEl.attr('id', 'painting');
cartArt.prepend(imgEl);
