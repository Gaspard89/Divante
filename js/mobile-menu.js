$(document).ready(function() {
    var shouldMenuAnimate = true;
    $("#toggle-nav").click(function() {
    var menuRight = document.getElementById('menu-right');

        if(shouldMenuAnimate)
        {
            shouldMenuAnimate = false;
            $(menuRight).animate({right: "0%"}, 500);
        }
        else
        {
            $(menuRight).animate({right: "-50%"}, 500);
            shouldMenuAnimate = true;
        }
    });
});