function unhideLightbox(lightboxID) {

	document.getElementById(lightboxID).classList.remove('hidden');
}


function unhideLightbox1() {
	
	unhideLightbox("popup1");
}

document.getElementById("case").onclick = unhideLightbox1