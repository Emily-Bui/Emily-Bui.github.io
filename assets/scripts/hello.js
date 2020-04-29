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

airpod1.onclick = function(){

	let graphics = document.getElementsByClassName("graphics2")
	for (let i = 0; i < graphics.length; i ++) {
    	hide_graphics(graphics[i]); 
	}

	document.getElementById("popup2").style.display = "block";
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

let popup1 = document.getElementById("popup1")

popup1.onclick = function(){
	document.getElementById("popup1").style.display = "none";

	let graphics = document.getElementsByClassName("graphics2")
	for (let i = 0; i < graphics.length; i ++) {
    	show_graphics(graphics[i]); 
	}
}


