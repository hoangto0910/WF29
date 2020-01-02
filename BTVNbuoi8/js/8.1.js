var dem = 0;
for(i = 1; i <= 100; i++){
	if (i % 3 == 0 || i % 7 == 0) {
		dem++;
	}
}
document.write("Số lượng các số chia hết cho 3 và 7 trong khoảng từ 1 -100 là : " + dem);