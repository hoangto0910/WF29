// var checktr = document.getElementsByClassName('check_sp');
// for(i = 0; i < check_sp.length ; i++){
// 	checktr[i].addEventListener('click', function  () {
// 		var t = this.firstElementChild;
// 		t.checked = 1 - t.checked;
// 	})
// }
function AutoCheck(){
	var check = document.getElementsByClassName("check");
	console.log(check)
	for(var i = 0; i < check.length; i++){
		check[i].checked = true;
	}
}
function AutoUnCheck(){
	var check = document.getElementsByClassName("check");
	console.log(check)
	for(var i = 0; i < check.length; i++){
		check[i].checked = false;
	}
}