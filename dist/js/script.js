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

    var list = $(".menu_link");

    for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");

        if (current.length > 0) {
        current[0].className = current[0].className.replace("active", "");
        }

        this.className += "active";
    });
    }

});
