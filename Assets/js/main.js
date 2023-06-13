// // Lấy tham chiếu đến danh sách các thẻ li
// var listItems = document.querySelectorAll('.navbar_items--list li');

// // Đặt lớp CSS "current-page" cho thẻ li của trang hiện tại
// function setCurrentPage() {
//   var currentPath = window.location.pathname;

//   listItems.forEach(function(item) {
//     var link = item.querySelector('a');
//     var href = link.getAttribute('href');

//     if (href === currentPath) {
//       item.classList.add('current-page');
//     } else {
//       item.classList.remove('current-page');
//     }
//   });
// }
// bắt sự kiện khi người dùng cuộn trang
window.addEventListener('scroll', function() {
  var headerNavbar = document.querySelector('.header_navbar');
  var homeBtn = document.querySelector('.home_background--btn');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
      headerNavbar.style.position = 'fixed';
      headerNavbar.style.top = '0px';
      homeBtn.style.marginTop = '500px';
  } else {
      headerNavbar.style.position = 'relative';
      headerNavbar.style.top = 'auto';
      homeBtn.style.marginTop = '380px';
  }
});

// bắt sự kiện bật tắt input search
// Gọi hàm setCurrentPage khi trang được tải
window.addEventListener('DOMContentLoaded', HideShowSearch);

// Bắt sự kiện bật btn search
function HideShowSearch() {
  var input = document.getElementById('navbar_search--input');

  if (input.style.display === 'none') {
    input.style.display = 'block'; // Hiển thị input nếu nó đang ẩn
  } else {
    input.style.display = 'none'; // Ẩn input nếu nó đang hiển thị
  }
}
  