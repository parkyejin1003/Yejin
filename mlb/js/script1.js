$(function(){
    var swiper = new Swiper(".mainSwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

 $(".tab_content > div").hide();
  $(".tab_content > div").eq(0).show();

  $(".tab_wrap>ul>li").click(function(e){
      e.preventDefault();

      // 탭 메뉴 활성화
      $(".tab_wrap ul li").removeClass("active");
      $(this).addClass("active");

      // 탭 콘텐츠 보여주기
      let idx = $(this).index();
      $(".tab_content > div").hide();
      $(".tab_content > div").eq(idx).show();
  });
  var swiper = new Swiper(".bestSwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      slidesPerView:5,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

})