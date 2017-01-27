var selectcolor = document.querySelector('.button-color');

selectcolor.addEventListener("click", function() {
	var sectioncolor = document.querySelector('.selectcolor');
	if (sectioncolor.style.display === "block"){
		sectioncolor.style.display = "none"
	}else {
		sectioncolor.style.display = "block"
	}
});
