$(function () {
    // 메뉴 열기
    $('.open').click(function (e) {
        e.preventDefault();
        $('.side_menu').css({ left: 0 });

        // body 클릭 이벤트 등록 (1번만 등록되도록 off 먼저 실행)
        $(document).off('click.menuClose').on('click.menuClose', function (event) {
            // 클릭된 요소가 메뉴 내부 또는 open 버튼이면 무시
            if (
                $(event.target).closest('.side_menu').length === 0 &&
                !$(event.target).closest('.open').length
            ) {
                $('.side_menu').css({ left: '-100%' });
                $(document).off('click.menuClose'); // 이벤트 제거
            }
        });
    });

    // 닫기 버튼 클릭 시
    $('.close').click(function () {
        $('.side_menu').css({ left: '-100%' });
        $(document).off('click.menuClose'); // 이벤트 제거
    });

    // 섹션 스크롤
    const sections = [
        '.section',
        '.section0',
        '.section1',
        '.section2',
        '.section3',
        '.section4',
        '.section5',
        '.section6'
    ];

    let currentIndex = 0;
   
    $('.aboutme').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.part1').offset().top }, 800);  
    });
    $('.skill').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.part2').offset().top }, 800);  
    });
    $('.website').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.par3').offset().top }, 800);  
    });
     $('.figma').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.part4').offset().top }, 800);  
    });
     $('.video').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.part5').offset().top }, 800);  
    });
     $('.portfolio').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.part6').offset().top }, 800);  
    });
     $('.mypage').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.part7').offset().top }, 800);  
    });

    const $title = $('.theme');
    /* const $title2=$('.header2'); */
    const fadeDistance = 200; // 스크롤 0 -> fadeDistance 까지 페이드 (px)

  $(window).on('scroll', function(){
    const s = $(this).scrollTop();
    let opacity = 1 - (s / fadeDistance);
    if(opacity < 0) opacity = 0;
    $title.css('opacity', opacity);
    /* $title2.css('opacity', opacity); */
    });

    //마우스 휠 스크롤 기능
    let isScrolling = false; // 스크롤 중복 방지

  $('.sec').on('wheel', function(e){
    if(isScrolling) return; // 애니메이션 중이면 무시
    e.preventDefault();

    const delta = e.originalEvent.deltaY; // 휠 방향
    const $current = $(this);

    if(delta > 0 && $current.next('.sec').length){ 
      // 휠 내릴 때
      isScrolling = true;
      $('html, body').animate({
        scrollTop: $current.next().offset().top
      }, 800, function(){ isScrolling = false; });
    } 
    else if(delta < 0 && $current.prev('.sec').length){
      // 휠 올릴 때
      isScrolling = true;
      $('html, body').animate({
        scrollTop: $current.prev().offset().top
      }, 800, function(){ isScrolling = false; });
    }
  });

var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
//ppt
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });
});