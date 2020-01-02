for(i = 1; i <= 7; i++){
	for(j = 1; j <= i; j++){
		document.write("*");
	}
	document.write("<br>");
}

document.write("<br><br>")

for(i = 1; i <= 7; i++){
	for(j = 1; j <= 7; j++){
		if (i == 1 || i == 7 || j == 1 || j == 7) {
			document.write("*");
		}else {
			document.write("&nbsp&nbsp");
		}
	}
	document.write("<br>");
}
document.write("<br><br>")

for(i = 1; i <= 7; i++){
	for(j = 1; j <= 7; j++){
		document.write("*");
	}
	document.write("<br>");
}

document.write("<br><br>")

for(i = 1; i <= 7; i++){
	for(j = 1; j <= 7; j++){
		if (j >= i) {
			document.write("*");
		}
	}
	document.write("<br>");
}
