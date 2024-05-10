const slide = new Swiper('.main-visual-slide', {
    loop: true,
    pagination: {
        el: '.main-visual-slide .page',
        clickable: true,
    },
    navigation: {
        nextEl: '.main-visual-slide .arrows .prev',
        prevEl: '.main-visual-slide .arrows .next',
    },

});




$('.to_top').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 1000)
})

$('.popup .btn').on('click', function () {
    $('.popup').toggle()
})