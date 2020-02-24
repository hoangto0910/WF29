$(document).ready(function(){
	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 700) {
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

