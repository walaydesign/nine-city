AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 70;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

$(".btn-top").click(function(){
    $("html, body").animate({scrollTop: 0},300);
})

var swiperMuseum = new Swiper(".museum_swiper", {
    slidesPerView: 1,
    scrollbar: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    speed: 800,
    on: {
        slideChangeTransitionStart: function() {
            if($(".swiper-slide-active").find(".museum_swiper_item").hasClass("pic-right")) {
                $(".museum_swiper").find(".swiper_nav").removeClass("leftside").addClass("rightside");
            }else if($(".swiper-slide-active").find(".museum_swiper_item").hasClass("pic-left")) {
                $(".museum_swiper").find(".swiper_nav").removeClass("rightside").addClass("leftside");
            }
        },
    }
})

var swiperNature = new Swiper(".nature_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    scrollbar: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 800,
})

var swiperSave = new Swiper(".save_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    speed: 800,
})

var swiperLife = new Swiper(".life_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    scrollbar: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 800,
})

var swiperTransportation = new Swiper(".transportation_swiper", {
    slidesPerView: 3,
    speed: 800,
    loop: true,
    // centeredSlides: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
    },
})

var swiperSchool = new Swiper(".school_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    scrollbar: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 800,
})

$(".school_text_tab_item").click(function(){
    $(this).addClass("active").siblings(".school_text_tab_item").removeClass("active");
    let li_index = $(this).index();
    swiperSchool.slideTo(li_index, 1000, true);
})