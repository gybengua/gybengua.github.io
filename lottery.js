window.onload = function init()
{
	resizeBackground("turnplateBackground", 712.0, 714.0);
	alert('hello');
};
/*
window.onresize = function()
{
		resizeBackground("turnplateBackground", 712.0, 714.0);	
}*/


function resizeBackground(id, width, height)
{
	document.getElementById(id).style.width = 
		document.body.offsetWidth + "px";
	document.getElementById(id).style.height = 
		document.body.offsetHeight + "px";
	var divHeight = document.getElementById(id).clientHeight;
	var divWidth  = document.getElementById(id).clientWidth;
	var turnplateWidth  = 635.0;
	var turnplateHeight = 635.0;
	var scale = 1.0;
	if(divHeight<height || divWidth<width)
	{
		var scaleX = divWidth / width;
		var scaleY = divHeight / height;
		if(scaleX < scaleY)
			scale = scaleX;
		else
			scale = scaleY;
		var width = width * scale;
		var height = height * scale;
		document.getElementById(id).style.backgroundSize = width + "px " + height + "px";
		
		turnplateWidth  = 635.0*scale;
		turnplateHeight = 635.0*scale;
		document.getElementById("turnplate").style.backgroundSize = turnplateWidth + "px " + turnplateHeight + "px";
	}
	
	
	document.getElementById("luckybagdiv").style.width  = turnplateWidth/2.0 + "px";
	document.getElementById("luckybagdiv").style.height = turnplateHeight/2.0 + "px";	
	document.getElementById("luckybagdiv").style.left = 
		(document.getElementById("turnplate").clientWidth-turnplateWidth/2.0)/2.0;
	document.getElementById("luckybagdiv").style.top = 
		document.getElementById("turnplate").clientHeight/2.0-turnplateHeight/2.0 + turnplateHeight/4.0 - turnplateHeight/2.0*1.732/2.0;
	document.getElementById("luckybagdiv").style.transform = "rotate(45deg) skew(15deg, 15deg)";		
	var luckybagVar = document.getElementById("luckybag");
	luckybagVar.style.width  = 160 * scale;
	luckybagVar.style.height = 160 * scale;
	luckybagVar.style.transform = "skew(-15deg, -15deg) rotate(-45deg) ";	
	luckybagVar.style.top  = turnplateHeight/5.0;
	luckybagVar.style.left = turnplateWidth/5.0;
	luckybagVar.style.backgroundSize = (160*scale) + "px " + (160*scale) + "px";
	var luckybagtextVar = document.getElementById("luckybagtext");
	luckybagtextVar.style.fontSize = (18.8*scale) + "pt";
	luckybagtextVar.style.left = (10*scale) + "px";
	luckybagtextVar.style.top  = (-60*scale) + "px";
	
	
	function resizePrize(id, deg)
	{
		document.getElementById(id + "div").style.width  = turnplateWidth/2.0 + "px";
		document.getElementById(id + "div").style.height = turnplateHeight/2.0 + "px";	
		document.getElementById(id + "div").style.left = 
			(document.getElementById("turnplate").clientWidth-turnplateWidth/2.0)/2.0;
		document.getElementById(id + "div").style.top = 
			document.getElementById("turnplate").clientHeight/2.0-turnplateHeight/2.0 + turnplateHeight/4.0 - turnplateHeight/2.0*1.732/2.0;
		document.getElementById(id + "div").style.transform = "rotate(45deg) skew(15deg, 15deg)";	
		document.getElementById(id + "divbackground").style.transform = "rotate(" + deg + "deg)";
		var redbagVar = document.getElementById(id);
		redbagVar.style.width  = 160 * scale;
		redbagVar.style.height = 160 * scale;
		redbagVar.style.transform = "skew(-15deg, -15deg) rotate(-45deg) ";	
		redbagVar.style.top  = turnplateHeight/5.0;
		redbagVar.style.left = turnplateWidth/5.0;	
		redbagVar.style.backgroundSize = (160*scale) + "px " + (160*scale) + "px";
		
		var luckybagtextVar = document.getElementById(id + "text");
		luckybagtextVar.style.fontSize = (18.8*scale) + "pt";
		luckybagtextVar.style.left = (10*scale) + "px";
		luckybagtextVar.style.top  = (-60*scale) + "px";
	}
	
	resizePrize("redbag", 60);
	resizePrize("ticket", 120);
	resizePrize("gift", 180);
	resizePrize("giftbag", 240);
	resizePrize("thankyou", 300);
	
	var startVar = document.getElementById("start");	
	startVar.style.left   = 
		(document.getElementById("turnplate").clientWidth-213*scale)/2.0;
	startVar.style.top    = 
		(document.getElementById("turnplate").clientHeight-269*scale)/2.0;
	startVar.style.width  = (213*scale) + "px";
	startVar.style.height = (269*scale) + "px"; 
	startVar.style.backgroundSize = (213*scale) + "px " + (269*scale) + "px";

	var handVar = document.getElementById("hand");
	handVar.style.width = (100*scale) + "px";
	handVar.style.height = (123*scale) + "px";	
	handVar.style.backgroundSize = (100*scale) + "px " + (123*scale) + "px";
	handVar.style.left = (213*scale*0.6) + "px";
	handVar.style.top  = (269*scale*0.6) + "px";
	
	intervalId = setInterval(function()
						  {
						  	document.getElementById("turnplateBackground").style.transform= "rotate(" + rotateAng + "deg)";
						  	rotateAng += (v*30);
						  	if(rotateAng > 360)
						  		rotateAng = rotateAng-360;
						  	console.log(rotateAng);
						  }, 30);
}

var intervalId;
var rotateAng = 0.0;
var v = 360/10000;


function lottery()
{
	v = v * 10;
  
	var stopfun = function()
	{
		var stopId = setInterval(function()
							  {
							  	v = v - 360/100000*30;
							  	if(v < 0) {clearInterval(stopId); v = 0; return;}
							  }, 30);
	}
	
	setTimeout(stopfun, 2000);
	
}


function getAngle()
{
	var st = window.getComputedStyle(el, null);
var tr = st.getPropertyValue("-webkit-transform") ||
st.getPropertyValue("-moz-transform") ||
st.getPropertyValue("-ms-transform") ||
st.getPropertyValue("-o-transform") ||
st.getPropertyValue("transform") ||
"FAIL";
console.log('Matrix: ' + tr);

var values = tr.split('(')[1].split(')')[0].split(',');
var a = values[0];
var b = values[1];
var c = values[2];
var d = values[3];
var scale = Math.sqrt(a * a + b * b);
console.log('Scale: ' + scale);
// arc sin, convert from radians to degrees, round
var sin = b / scale;
// next line works for 30deg but not 130deg (returns 50);
// var angle = Math.round(Math.asin(sin) * (180/Math.PI));
var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
console.log('Rotate: ' + angle + 'deg');

}
