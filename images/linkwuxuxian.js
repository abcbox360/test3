/*
Copyright by Audi 2006
http://audi.tw
http://www.carousel.com.tw
歡迎應用於無償用途散播，並請勿移除本版權宣告

*/

function clearLinkDot() {
	var i, a, main;
	for(i=0; (a = document.getElementsByTagName("a")[i]); i++) {
		if(a.getAttribute("onFocus")==null) {
			a.setAttribute("onFocus","this.blur();");
		}else{
			a.setAttribute("onFocus",a.getAttribute("onFocus")+";this.blur();");
		}
		a.setAttribute("hideFocus","hidefocus");
	}
}

clearLinkDot();
onload=clearLinkDot;