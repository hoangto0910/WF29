$(document).ready(function(){
	var content_1 = $('.content_1');
	for(var i = 0; i < content_1.length; i++){
		content_1.eq(i).css({'display' : 'none'});
	}
	function showtab (n) {
		content_1.eq(n).css({'display' : 'block'});
	}
	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}
	var numslide = 0;
	content_1.eq(0).css({'display' : 'block'});
	$('#next').on('click', function(){
		// slide_1
		var dem = 0;
		if ($('#name').val() == "") {
			$('span').eq(0).text('Yêu cầu nhập họ tên');
			dem++;
		}
		else{
			$('span').eq(0).text('');
		}

		if ($('#pass').val() == "") {
			$('span').eq(1).text('Yêu cầu nhập password');
			dem++;
		}
		else{
			$('span').eq(1).text('');
		}

		if ($('#confirm').val() == "") {
			$('span').eq(2).text('Yêu cầu xác nhận password');
			dem++;
		}
		else if ($('#confirm').val() != $('#pass').val()) {
			$('span').eq(2).text('Yêu cầu nhập đúng password để xác nhận');
			dem++;
		}
		else{
			$('span').eq(2).text('');
		}
		if (dem == 0) {
			numslide++;
			for(var i = 0; i < content_1.length; i++){
				content_1.eq(i).css({'display' : 'none'});
			}
			if (numslide > 1) {
				numslide = 1;
			}
			content_1.eq(numslide).css({'display' : 'block'});		
		}
		// slide_2
		var dem_2 = 0;
		if ($('#firstname').val() == "") {
			$('span').eq(3).text('Yêu cầu nhập firstname');
			dem_2++;
		}
		else{
			$('span').eq(3).text('');
		}

		if ($('#lastname').val() == "") {
			$('span').eq(4).text('Yêu cầu nhập lastname');
			dem_2++;
		}
		else{
			$('span').eq(4).text('');
		}

		if ($('#email').val() == "") {
			$('span').eq(5).text('Yêu cầu nhập email');
			dem_2++;
		}
		else if(!validateEmail($('#email').val())){
			$('span').eq(5).text('bạn chưa nhập đúng định dạng email');
			dem_2++;
		}
		else{
			$('span').eq(5).text('');
		}

		if ($('#address').val() == "") {
			$('span').eq(6).text('Yêu cầu nhập address');
			dem_2++;
		}
		else{
			$('span').eq(6).text('');
		}

		if ($('#age').val() == "") {
			$('span').eq(7).text('Yêu cầu nhập age');
			dem_2++;
		}
		else{
			$('span').eq(7).text('');
		}
		if (dem_2 == 0 && parseInt($('#age').val()) <= 18) {
			numslide++;
			for(var i = 0; i < content_1.length; i++){
				content_1.eq(i).css({'display' : 'none'});
			}
			if (numslide > 2) {
				numslide = 2;
			}
			content_1.eq(numslide).css({'display' : 'block'});		
		}
		else if (dem_2 == 0 && parseInt($('#age').val()) > 18){
			for(var i = 0; i < content_1.length; i++){
				content_1.eq(i).css({'display' : 'none'});
			}
			numslide++;
			content_1.eq(3).css({'display' : 'block'});
			$('#next').text('Finish');
		}
		if ($('.check').is(':checked')) {
			swal("Good job!", "You clicked the button!", "success");
		}
	})
	$('#pre').on('click', function(){
		numslide--;
		for(var i = 0; i < content_1.length; i++){
			content_1.eq(i).css({'display' : 'none'});
		}
		if (numslide < 0) {
			numslide = 0;
		}
		content_1.eq(numslide).css({'display' : 'block'});
	})
})