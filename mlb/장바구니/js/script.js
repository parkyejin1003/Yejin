  // 삭제 버튼 기능
  $(document).on('click', '.removeBtn', function() {
    $(this).closest('tr').remove();
    updateTotal();
  });

  // 총 금액 업데이트 함수
  function updateTotal() {
    let total = 0;
    $('#cartItems tr').each(function() {
      const priceText = $(this).find('td').eq(2).text().replace(/[^0-9]/g, '');
      const price = parseInt(priceText, 10) || 0;
      const qty = parseInt($(this).find('td').eq(1).text(), 10) || 1;
      total += price * qty;
    });
    $('#totalPrice').text(total.toLocaleString() + '원');
  }

  // 구매하기 버튼 클릭
  $('#buyBtn').on('click', function() {
    alert('구매가 완료되었습니다!');
  });

  //menu
  $(document).ready(function() {
  $('.menu i').on('click', function() {
    $('.menu_view').toggleClass('active');
  });

  // 메뉴 바깥 클릭 시 닫기
  $(document).on('mousedown', function(e) {
    if (
      !$(e.target).closest('.menu_view').length &&
      !$(e.target).closest('.menu i').length
    ) {
      $('.menu_view').removeClass('active');
    }
  });
});