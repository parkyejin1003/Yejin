const container = document.querySelector('.bestSwiper .swiper-wrapper'); // 슬라이드 컨테이너
let added = 0;
let addItemCount = 20; // 한 번에 추가할 개수
let allData = [];
let filterData = [];
const filter = document.querySelector('#gallery-filter');

// JSON 데이터 로드
fetch('./data/mlb.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    allData = data;
    filterData = allData;
    addItem(); // 첫 로딩

    // 필터 버튼 클릭 시
    filter.addEventListener('change', (e) => {
      if (e.target.type === 'radio') {
        filterItems(e.target.value);
      }
    });
  })
  .catch(error => console.error('Error loading JSON:', error));

// 아이템 추가 함수
function addItem() {
  let elements = [];
  const sliceData = filterData.slice(added, added + addItemCount);

  sliceData.forEach((item, index) => {
    const itemHtml = `
      <div class="img_wrap">
        <img src="${item.img}" alt="${item.title}">
        <div class="number">${added + index + 1}</div>
      </div>
      <div class="text_wrap">
        <div class="title">${item.title}</div>
        <div class="price">${Number(item.price).toLocaleString()}원</div>
      </div>
    `;

    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = itemHtml;
    elements.push(slide);
  });

  elements.forEach(el => container.appendChild(el));
  added += addItemCount;


}

// 필터링 함수
function filterItems(category) {
  added = 0;
  container.innerHTML = ''; // 초기화

  if (category === 'all') {
    filterData = allData;
    console.log(filterData)
  } else {
    filterData = allData.filter(item => item.category === category);
  }

  addItem();
}
