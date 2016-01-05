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