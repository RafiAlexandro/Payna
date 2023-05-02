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

        $(hamburger).toggleClass("hamburger-active");

        if (mobile.matches) {
            $(navMenu).slideToggle();
        } else {
            // Tricky
            $(window).hide("#nav-menu");
        }
    });

});