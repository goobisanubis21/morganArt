$(document).ready(function() {

    localStorage.removeItem("selected")
    
    var selected = JSON.parse(localStorage.getItem("selected"));
        if (selected == null) {
            selected = [];
        }
    
    var selectedPainting = $(".galleryDivs")
    function featuredClick() {
        var painting = $(this).attr("src");
        var id = $(this).attr("class");
        var name = $(this).attr("alt")
        var price = $(this).attr("price");
        var size = $(this).attr("size");
    
        selected.push(painting, id, name, price, size);
        localStorage.setItem("selected", JSON.stringify(selected))
    
        setTimeout(function() {
            window.location.href = "painting.html"
        }, 200);
        
    }
    
        selectedPainting.on("click", featuredClick);
    });