var tong = 0;
var n = prompt("Mời bạn nhập số n : ", "");
for(i = 1; i <= n; i++){
	tong = tong + 1/i;
}
document.write("Tổng S = "+ tong);