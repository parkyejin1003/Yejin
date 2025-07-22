$(function(){

 $(window).on("scroll", function () {
        if ($(window).scrollTop() > 500) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });





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
      autoplay: { delay: 5000 },
      pagination: { el: '.swiper-pagination', clickable: true },

      on: {
        slideChange: function () {
          // 현재 활성화된 슬라이드 요소 가져오기
          const currentSlide = this.slides[this.activeIndex];
          const theme = currentSlide.getAttribute('data-theme');

          // 헤더에 테마에 따라 클래스 적용
          const header = document.querySelector('header');
          const mainSwiper = document.querySelector('.mainSwiper');
          if (theme === 'light') {
            header.classList.add('dark-text'); // 글자 검정색
            mainSwiper.classList.add('dark-text'); // 글자 검정색
          } else {
            header.classList.remove('dark-text'); // 글자 흰색
            mainSwiper.classList.remove('dark-text'); // 글자 흰색
          }
        }
      }
    
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


    var banner1Swiper = new Swiper(".banner1Swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: { delay: 2000 },
      loop:true,
    });

    var focusSwiper = new Swiper(".focusSwiper", {
      slidesPerView: 3,
      centeredSlides: false,
      slidesPerGroupSkip: 1,
      spaceBetween: 10,
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        769: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
      },
      pagination: {
        el: ".swiper-pagination3",
        type: "fraction",
      },
    });

    var bigSwiper = new Swiper(".bigSwiper", {});
  });

  var swiper = new Swiper(".highSwiper", {
        slidesPerView: 4,
        spaceBetween:0,
    });

    var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
    });
})