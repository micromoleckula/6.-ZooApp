const swiper = new Swiper('.swiper', {
  loop: true,
  breakpoints: {
    0: {slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
      spaceBetween:20,
    }
  }
});