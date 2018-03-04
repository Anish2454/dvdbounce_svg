/*
Anish Shenoy
SoftDev2 pd07
K08 -- Animation Nation
2018-03-03
*/

var animateDotButton = document.getElementById("animateDot");
var animateMovieButton = document.getElementById("animateMovie");
var stopButton = document.getElementById("stop");
var container = document.getElementById("vimage");
var state = 0;
var first = true;
var radius = 1;
var dotIncrement = 1;
var animating = false;
var id = null;
var Xanim = 237;
var Yanim = 395;
var increment = 1;
var dvdXIncrement = 1;
var dvdYIncrement = 2;

var drawDot = function(timestamp){
	if (radius == 100 || radius == 0){
		increment *= -1;
	}
	radius += increment;

	drawDotSVG(250,250,radius);
	id = window.requestAnimationFrame(drawDot);
};

var drawDotSVG = function(x, y, r){
  clear()
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", x);
	c1.setAttribute("cy", y);
	c1.setAttribute("fill", "red");
	c1.setAttribute("r", r);
	container.appendChild(c1);
};

var animateDotButtonFunc = function(e){
	if (!animating){
		//ctx.fillStyle = "green";
		animating = true;
		id = window.requestAnimationFrame(drawDot);
	}
};

var clear = function(e){
  //console.log("Clear");
  var firstChild = container.firstChild;
  while(firstChild){
    //console.log("Clearing: ");
    //console.log(firstChild);
    container.removeChild(firstChild);
    firstChild = container.firstChild;
  }
};

var stopFunc = function(e){
	window.cancelAnimationFrame(id);
  //Remove all the inner nodes of the SVG area
  clear();
	id = null;
	animating = false;
};


var movieBounce = function(timestamp){
	if (Xanim <= 0 || Xanim >= 500 - 100) dvdXIncrement *= -1;
	if (Yanim <= 0 - 20 || Yanim >= 500 - 80) dvdYIncrement *= -1;
	Xanim += dvdXIncrement;
	Yanim += dvdYIncrement;
	clear();
  var c1 = document.createElementNS("http://www.w3.org/2000/svg", "image");
	c1.setAttribute("x", Xanim);
	c1.setAttribute("y", Yanim);
	c1.setAttribute("href", "logo.png");
  c1.setAttribute("height", 100);
  c1.setAttribute("width", 100);
	container.appendChild(c1);
	id = window.requestAnimationFrame(movieBounce);
};

var animateMovieButtonFunc = function(e){
	if (!animating){
		animating = true;
		id = window.requestAnimationFrame(movieBounce);
	}
};

animateDotButton.addEventListener("click", animateDotButtonFunc);
animateMovieButton.addEventListener("click", animateMovieButtonFunc);
stopButton.addEventListener("click", stopFunc);
