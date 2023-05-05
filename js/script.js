var swiper = new Swiper(".mySwiper", {});


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
