$(document).ready(function(){
    $("#toggle-nav").click(function() {
        $('#menu-right').toggle(function () {
            $("#menu-right").css({right: "0%"});
        }, function () {
            $("#menu-right").css({right: "-50%"});
        });
    });
});