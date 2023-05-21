var swipert = new Swiper('.swiper-container_testimonilas', {
   slidesPerView: 1,
   spaceBetween: 10,
   freeMode: false,
   loop: true,
   navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
   },
   breakpoints: {
      480: {
         slidesPerView: 1,
         spaceBetween: 10,
      },
      640: {
         slidesPerView: 1,
         spaceBetween: 10,
      }
   },


})

var swipers = new Swiper('.swiper-container_search', {
   slidesPerView: 1,
   spaceBetween: 30,
   freeMode: false,
   loop: true,
   autoplay: {
    delay: 2000,
  },
   navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
   },
   breakpoints: {
      480: {
         slidesPerView: 1,
         spaceBetween: 30,
      },
      640: {
         slidesPerView: 2,
         spaceBetween: 30,
      }
   },


})


let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
   scrollFunction();
};

function scrollFunction() {
   if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
   ) {
      mybutton.style.display = "block";
   } else {
      mybutton.style.display = "none";
   }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}
