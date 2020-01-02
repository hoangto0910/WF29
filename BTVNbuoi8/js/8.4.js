var N = prompt("Mời bạn nhập số N : ", "");
var M = prompt("Mời bạn nhập số M : ", "");
var K = prompt("Mời bạn nhập số K : ", "");
var tong = 0;
for(var i = N; i <= M; i++){
	if (i % K == 0) {
		tong = tong + i;
	}
}
document.write("Tổng các số chia hết cho k = " + tong);