// PORTFOLIO 클릭 이벤트
  const portfolio = document.getElementById("portfolio");
  const portfolioSub = portfolio.querySelector("ul");

  portfolio.addEventListener("click", function(e) {
    e.stopPropagation();
    portfolioSub.style.display = portfolioSub.style.display === "block" ? "none" : "block";
  });

  // 나의 정보 클릭 이벤트
  const myInfo = document.getElementById("myInfo");
  const myInfoSub = myInfo.querySelector("ul");

  myInfo.addEventListener("click", function(e) {
    e.stopPropagation();
    myInfoSub.style.display = myInfoSub.style.display === "block" ? "none" : "block";
  });

  // 페이지 다른 부분 클릭하면 모든 하위 메뉴 닫기
  document.addEventListener("click", function() {
    portfolioSub.style.display = "none";
    myInfoSub.style.display = "none";
  });

 var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

document.querySelectorAll('section3 ul li a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

  const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.scrollTo({ top: 0, behavior: 'smooth' });
});
