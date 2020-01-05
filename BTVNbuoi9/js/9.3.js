function default_1 () {
	var thep = document.getElementsByTagName('p')[0];
	thep.style.fontSize = '18px';
}
function bigger_1 () {
	var thep = document.getElementsByTagName('p')[0];
	var s = parseInt(thep.style.fontSize.replace("px",""))*1.4;
	thep.style.fontSize = s + "px";
}
function smaller_1 () {
	var thep = document.getElementsByTagName('p')[0];
	var s = parseInt(thep.style.fontSize.replace("px",""));
	if (s > 10) {
		s = s*0.6;
	}
	thep.style.fontSize = s + "px";
}
