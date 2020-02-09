$(document).ready(function(){
	$('.menuslide_1').on('mouseenter', function(){
		$('#slide_services').slideDown();
	})
	$('.menuslide_2').on('mouseenter', function(){
		$('#slide_s2').slideDown();
	})
	$('.menuslide_1').on('mouseleave', function(){
		$('#slide_services').slideUp();
	})
	$('.menuslide_2').on('mouseleave', function(){
		$('#slide_s2').slideUp();
	})
})