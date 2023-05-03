$(document).ready(function () {
    
    // Password Visible

    const eye = $("#eye");
    
    $(eye).click(function () {

        const pass = $("#password").attr("type");
        const input = $("#password");

        if (pass == "password") {
            $(input).attr("type", "text");
            $(eye).attr("src", "../dist/icons/eye-off.svg");
        } else {
            $(input).attr("type", "password");
            $(eye).attr("src", "../dist/icons/eye.svg");
        }  

    });

});