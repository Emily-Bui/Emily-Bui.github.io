let case1 = document.getElementById("case");


function hide_graphics(i) {
	i.style.display = "none";
}

case1.onclick = function(){

	let graphics = document.getElementsByClassName("graphics2")
	for (let i = 0; i < graphics.length; i ++) {
    	hide_graphics(graphics[i]); 
	}

	document.getElementById("popup1").style.display = "block";
}

let airpod1 = document.getElementById("airpod");

function hide_graphics(i) {
	i.style.display = "none";
}

function show_graphics(i) {
	i.style.display = "block"
}

airpod1.onclick = function(){

	let graphics = document.getElementsByClassName("graphics2")
	for (let i = 0; i < graphics.length; i ++) {
    	hide_graphics(graphics[i]); 
	}

	document.getElementById("popup2").style.display = "block";
}

let backpack1 = document.getElementById("backpack2");

function hide_graphics(i) {
	i.style.display = "none";
}
backpack1.onclick = function(){

	let photos = document.getElementsByClassName("slick")
	for (let i = 0; i < photos.length; i ++) {
    	show_graphics(photos[i]); 
	}
	document.getElementById("slideshow").style.display = "block";

	let graphics = document.getElementsByClassName("graphics2")
	for (let i = 0; i < graphics.length; i ++) {
    	hide_graphics(graphics[i]); 
	}

	document.getElementById("popup3").style.display = "block";

	
}


function show_graphics(i) {
	i.style.display = "block"
}

let popup2 = document.getElementById("popup2")

popup2.onclick = function(){
	document.getElementById("popup2").style.display = "none";

	let graphics = document.getElementsByClassName("graphics2")
	for (let i = 0; i < graphics.length; i ++) {
    	show_graphics(graphics[i]); 
	}
}

function show_graphics(i) {
	i.style.display = "block"
}

let popup3 = document.getElementById("popup3")

popup3.onclick = function(){
	document.getElementById("popup3").style.display = "none";
	document.getElementById("popup4").style.display = "none";

	let photos = document.getElementsByClassName("slick")
	for (let i = 0; i < photos.length; i ++) {
    	hide_graphics(photos[i]); 
	}


	let graphics = document.getElementsByClassName("graphics2")
	for (let i = 0; i < graphics.length; i ++) {
    	show_graphics(graphics[i]); 
	}
}





function show_graphics(i) {
	i.style.display = "block"
}

let popup1 = document.getElementById("popup1")

popup1.onclick = function(){
	document.getElementById("popup1").style.display = "none";

	let graphics = document.getElementsByClassName("graphics2")
	for (let i = 0; i < graphics.length; i ++) {
    	show_graphics(graphics[i]); 
	}
}



