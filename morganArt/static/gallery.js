$(document).ready(function() {

    localStorage.clear(selected)

    console.log("home");
    
    var selected = JSON.parse(localStorage.getItem("selected"));
        if (selected == null) {
            selected = [];
        }
    
    var selectedPainting = $(".galleryDivs")
    function featuredClick() {
        var painting = $(this).attr("src");
        var id = $(this).attr("class");
    
        selected.push(painting, id);
        localStorage.setItem("selected", JSON.stringify(selected))
    
        setTimeout(function() {
            window.location.href = "painting.html"
        }, 200);
        
    }
    
        selectedPainting.on("click", featuredClick);
    });