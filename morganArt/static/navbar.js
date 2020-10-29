$(document).ready(function() {

    var navBar = $("#nav-bar");
    var home = $("<h3>");
    home.text("Home");
    home.attr('id', 'nav-home');
    navBar.append(home);

    home.on("click", function() {
        window.location.href = "index.html"
    });

    var gallery = $("<h3>");
    gallery.text("Gallery");
    gallery.attr('id', 'nav-gallery');
    navBar.append(gallery);

    gallery.on("click", function() {
        window.location.href = "gallery.html"
    });

    var about = $("<h3>");
    about.text("About Me");
    about.attr('id', 'nav-about');
    navBar.append(about);

    about.on("click", function() {
        window.location.href = "aboutme.html"
    });
    var contact = $("<h3>");
    contact.text("Contact");
    contact.attr('id', 'nav-contact');
    navBar.append(contact);

    contact.on("click", function() {
        window.location.href = "contact.html"
    });
    

});