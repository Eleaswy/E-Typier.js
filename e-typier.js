function write(word, ele, fast) {
    "use strict";
	var fullTime = (fast / word.length),
		myEle = document.getElementById(ele),
		x = -1;
	setInterval(function () {
		if (x < word.length - 1) {
			x = x + 1;
			myEle.innerHTML = myEle.innerHTML + word.charAt(x);
		}
	}, fullTime);
}


