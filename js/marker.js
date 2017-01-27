window.onresize = function(event) {
	var heightElementAbove = document.querySelector('.post__all.third').offsetHeight
	var height4 = document.querySelector('.marker4').style.top = heightElementAbove + 30 + "px";
	var height2 = document.querySelector('.marker2').style.top = heightElementAbove + 30 + "px";
	console.log("resize")
};
