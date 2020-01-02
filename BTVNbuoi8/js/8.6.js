alert("Xin chào");
var tong = 0;
for(i = 1; i <= 20; i++){
	if (i % 2 == 0) {
		tong = tong + i;
	}
}
document.write("Tổng 10 số chẵn đầu tiên là : "+tong);