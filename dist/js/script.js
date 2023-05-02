$(document).ready(function () {

    // Navbar Fixed

    const header = $("header").offset();
    const fixedNav = header.top;

    $(window).scroll(function () {

        if (window.pageYOffset > fixedNav) {
            $("header").addClass("navbar-fixed");
        } else {
            $("header").removeClass("navbar-fixed");
        }
    });


    // Hamburger
    
    const hamburger = $("#hamburger");
    const navMenu = $("#nav-menu");
    const mobile = window.matchMedia("(max-width: 640px)");
    
    $(hamburger).click(function () {

        if (mobile.matches) {
            $(navMenu).slideToggle();
        } else {
            // Tricky
            $(window).hide("#nav-menu");
        }
    });

    // Active

    // Get all buttons with class="btn" inside the container
    var list = $(".menu_link");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
    }
});
