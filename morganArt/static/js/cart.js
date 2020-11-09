var cartArt = $("#cartArt");

var cartpainting = JSON.parse(localStorage.getItem("cartPaintings"));

var imgEl = $("<img>");
imgEl.attr('src', cartpainting[1])

cartArt.prepend(imgEl);
