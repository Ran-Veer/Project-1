
// ---------- Swiper Js Start ---------------------
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination"
    }
});
// ------ Swiper Js End -----------------