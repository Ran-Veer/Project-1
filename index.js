
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

// --------- Moving Circle Start ----------

const dot = document.querySelector('.circle')
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    dot.style.top = y + "px";
    dot.style.left = x + "px";
    dot.style.display = "block";
})
document.addEventListener("mouseout", () => {
    dot.style.display = "none";
})

// ------- Moving Circle End -