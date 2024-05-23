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
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    on: {
        slideChangeTransitionStart: function() {
            if($(".museum_swiper").find(".swiper-slide-active").find(".museum_swiper_item").hasClass("pic-right")) {
                $(".museum_swiper").find(".swiper_nav").removeClass("leftside").addClass("rightside");
            }else if($(".museum_swiper").find(".swiper-slide-active").find(".museum_swiper_item").hasClass("pic-left")) {
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
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 800,
    allowTouchMove: false,
})

var swiperSave = new Swiper(".save_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
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
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
})

var swiperTransportation = new Swiper(".transportation_swiper", {
    slidesPerView: 1,
    speed: 800,
    loop: true,
    // centeredSlides: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
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
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    on: {
        slideChangeTransitionStart: function() {
            let index = $(".school_swiper").find(".swiper-slide-active").index();
            $(".school_text_tab_item").eq(index).addClass("active").siblings(".school_text_tab_item").removeClass("active");
        },
    }
})

$(".school_text_tab_item").click(function(){
    $(this).addClass("active").siblings(".school_text_tab_item").removeClass("active");
    let li_index = $(this).index();
    swiperSchool.slideTo(li_index, 1000, true);
})

var swiperClassic = new Swiper(".classic_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".classic_swiper-next",
        prevEl: ".classic_swiper-prev",
    },
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
})

function sendEmail(){
    Email.send({
        SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
        // To : "ryanlin9001@gmail.com, zhulixdesign@gmail.com, zhuli705098@gmail.com",
        To : "yl301114@gmail.com",
        From : "walayydesign@gmail.com",
        Subject : "玖都預約賞屋",
        Body : "貴賓稱謂:" + document.getElementById("name").value
                + "<br>聯絡電話:" + document.getElementById("phone").value
                + "<br>Email信箱:" + document.getElementById("email").value
                + "<br>聯繫時段:" + document.getElementById("time_from").value + "時-" + document.getElementById("time_to").value + "時"
    }).then(
        message => alert("感謝您的來信！我們很快就會和您聯繫！"),
    );
}