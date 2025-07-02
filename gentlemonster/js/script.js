$(function(){
    var swiper = new Swiper(".headerSwiper", {
      direction: "vertical",
      autoplay: {
        delay: 3000, // 3초마다 슬라이드
        disableOnInteraction: false, // 유저 조작 후에도 계속 자동재생
    },
    loop:true,
    });
    var swiper1 = new Swiper(".mainSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000, // 3초마다 슬라이드
        disableOnInteraction: false, // 유저 조작 후에도 계속 자동재생
    },
    
    });
    var swiper2 = new Swiper(".modelSwiper", {
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
    });

    var swiper3 = new Swiper(".modelSwiper2", {
    slidesPerView: 2,           // 동시에 보이는 큰 이미지 수
    slidesPerGroup: 1,          // 한 번에 이동할 슬라이드 수
    spaceBetween: -2,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
    });

    document.querySelectorAll('.modelSwiper .swiper-slide').forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    swiper3.slideTo(index);
  });
});

})