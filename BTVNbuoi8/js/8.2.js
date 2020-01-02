alert('Xin Chào');
var tong = 0;
var n = prompt("Mời bạn nhập số n : ", "");
var i = 1;
do{
	tong = tong + i;
	i++;
} while (i <= n);
document.write("Tổng S = " + tong);