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
  $(document).ready(function () {   
      $('.main-navigation').click(function(e) {
            e.preventDefault();
        });
    $('#toggle-nav').click(function(e) {
            e.preventDefault();
        });
      $('.introduction-link').click(function(e) {
            e.preventDefault();
        });
  });
  $(document).ready(function () { 
      $(".swiper-container").each(function(index, element){
    var $this = $(this);
    $this.addClass("instance-" + index);
    $this.find(".swiper-button-prev").addClass("btn-prev-" + index);
    $this.find(".swiper-button-next").addClass("btn-next-" + index);
    var swiper = new Swiper(".instance-" + index, {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        nextButton: ".btn-next-" + index,
        prevButton: ".btn-prev-" + index
        });
      });
});