var tattoo = new Swiper('.tattoo', {
    loop: true,
    navigation: {
        nextEl: '.tattoo .swiper-button-next',
        prevEl: '.tattoo .swiper-button-prev',
    },
    pagination: {
        el: '.tattoo .swiper-pagination',
        clickable: false,
    },
});