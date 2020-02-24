var owl = $('.owl-one');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    dots :true,
    pagination : true,
    paginationNumbers: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true
        },
        576:{
            items:2,
            nav:false,
            loop:true
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    },
    autoplayHoverPause:true
});
$('.owl-two').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    pagination : true,
    dots: true,
    paginationNumbers: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true
        },
        576:{
            items:2,
            nav:false,
            loop:true
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        }
    },
    autoplayHoverPause:true
});
$('.owl-three').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    pagination : true,
    dots :false,
    paginationNumbers: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true
        },
        576:{
            items:2,
            nav:false,
            loop:true
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        }
    },
    autoplayHoverPause:true
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
$('.owl-two').on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        $('.owl-two').trigger('next.owl');
    } else {
        $('.owl-two').trigger('prev.owl');
    }
    e.preventDefault();
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})