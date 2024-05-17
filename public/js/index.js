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

var swiperSave = new Swiper(".save_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    speed: 800,
})