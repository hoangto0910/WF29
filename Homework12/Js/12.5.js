$(document).ready(function(){
	$(window).on('scroll', function(){
		if ($(window).scrollTop()) {
			$('#box_banner').css({'width':'100%', 'left':'0', 'top':'0', 'border-radius':'0', 'transition':'.3s'});
		}
		else if ($(window).width() < 481) {
			$('#box_banner').css({'width':'80%', 'left':'50px', 'top':'148px', 'border-radius':'8px', 'transition':'.3s'});
		}
		else if($(window).width() < 781){
			$('#box_banner').css({'width':'80%', 'left':'76px', 'top':'88px', 'border-radius':'8px', 'transition':'.3s'});
		}
		else{
			$('#box_banner').css({'width':'80%', 'left':'190px', 'top':'82px', 'border-radius':'8px', 'transition':'.3s'});
		};
	});
	var swiper = new Swiper('.swiper-container', {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
		    delay: 4000,
		    disableOnInteraction: false,
		},
		pagination: {
		    el: '.swiper-pagination',
		    clickable: true,
		},
	});
	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 300) {
			$('#scroll_top').fadeIn(500);
		}
		else{
			$('#scroll_top').fadeOut(500);
		}
	});
	$('#scroll_top').on('click', function(){
		$('html,body').animate({scrollTop : 0}, 1000);
	})
})