var button_1 = document.getElementsByTagName('button')[0];
var button_2 = document.getElementsByTagName('button')[1];
// ***
// var input = document.getElementsByTagName('input');
// var name = document.frm.name;
// var gender = document.frm.gender;
// var email = document.frm.email;
// var phone = document.frm.phone;
// var pass = document.frm.pass;
// var confirm = document.frm.confirm;
// var span = document.getElementsByTagName('span');
// ***
button_1.addEventListener('click', function  () {
	var name = document.frm.name;
	var gender = document.frm.gender;
	var email = document.frm.email;
	var phone = document.frm.phone;
	var pass = document.frm.pass;
	var confirm = document.frm.confirm;
	var span = document.getElementsByTagName('span');
	if (name.value == "") {
		span[0].innerHTML = "Yêu cầu nhập đầy đủ họ tên";
	}
})