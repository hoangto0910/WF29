$(document).ready(function(){
	$('#slide').on('click', function(){
		$('#slide_down').slideToggle(500);
	});
	$('#menu_bar').on('click', function(){
		$('#menu_respon').toggle("'slide', {direction = 'right', 500");
	});
	$('#slide_respon').on('click', function(){
		$('#slidedown_respon').slideToggle(500);
	})
})