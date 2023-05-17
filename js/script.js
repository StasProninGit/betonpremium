// const { default: axios } = require("axios");
  var swiper = new Swiper(".mySwiper", {
      speed: 600,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });



$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


const TOKEN = "6046953691:AAF_Jtj-WEKRCW64V5cKrPuhyqXsQjBCY3E";
const CHAT_ID = "-1001969074436";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const suc = document.getElementById('suc');
const suc2 = document.getElementById('suc2');

document.getElementById('tg').addEventListener('submit', function(e) {
  e.preventDefault();

  let message = 'Заявка с Сайта!\n';
  message += `Имя: ${this.name.value}\n`;
  message += `Тел: ${ this.tel.value}\n`;
  message += `Марка: ${ this.marka.value}\n`;
  message += `Кол-во: ${ this.sum.value}\n`;
  message += `Адрес: ${ this.adres.value}\n`;

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    pars_mode: 'html',
    text: message
  })
  .then((res) => {
    this.name.value ="";
    this.tel.value ="";
    this.marka.value ="";
    this.sum.value ="";
    this.adres.value ="";
    suc.innerHTML = "Сообщение отправлено";
    suc.style.display = "block";
  })
  .catch((err) => {
    console.warn(err);
  })
  .finally((res) => {
    console.log('Конец')
  })

})

document.getElementById('tg2').addEventListener('submit', function(e) {
  e.preventDefault();

  let message = 'Заявка с Сайта!\n';
  message += `Имя: ${this.name.value}\n`;
  message += `Тел: ${ this.tel.value}\n`;
  message += `Марка: ${ this.marka.value}\n`;
  message += `Кол-во: ${ this.sum.value}\n`;
  message += `Адрес: ${ this.adres.value}\n`;

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    pars_mode: 'html',
    text: message
  })
  .then((res) => {
    this.name.value ="";
    this.tel.value ="";
    this.marka.value ="";
    this.sum.value ="";
    this.adres.value ="";
    suc2.innerHTML = "Сообщение отправлено";
    suc2.style.display = "block";
  })
  .catch((err) => {
    console.warn(err);
  })
  .finally((res) => {
    console.log('Конец')
  })

})

window.addEventListener




