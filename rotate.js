window.resize = adjustOvalLayout;
window.onload = adjustOvalLayout;

function adjustOvalLayout()
{
	var bodyEle = document.getElementsByTagName("body")[0];
	var bodyClientWidth  = bodyEle.clientWidth;
	var bodyClientHeight = bodyEle.clientHeight;
	
	var scale = 1.0;
	if(bodyClientWidth<(400*Math.sqrt(2)) || bodyClientHeight<(400*Math.sqrt(2)))
	{
		var scaleX = bodyClientWidth  / (400*Math.sqrt(2));
		var scaleY = bodyClientHeight / (400*Math.sqrt(2));
		if(scaleX > scaleY)
			scale = scaleY;
		else
			scale = scaleX;
	}
	console.log("scale: " + scale);
	console.log("bodyClientWidth: " + bodyClientWidth + " bodyClientHeight: " + bodyClientHeight);
	
	var ovalEle = document.getElementById("oval");
	ovalEle.style.width  = (400*scale) + "px";
	ovalEle.style.height = (400*scale) + "px";
	ovalEle.style.left   = (bodyClientWidth-400*scale)/2;
	ovalEle.style.top    = (bodyClientHeight-400*scale)/2;
	ovalEle.style.background = "url(\"oval400X400.png\") no-repeat center";
	ovalEle.style.backgroundSize = (400*scale) + "px " + (400*scale) + "px";
	
	var refreshInterval = 30;
	var rotateAng = 0;
	var rotateV   = 360 / 10000;
	function rotate()
	{
		ovalEle.style.transform = "rotate(" + rotateAng + "deg)";
		
		rotateAng += rotateV*refreshInterval;
		if(rotateAng >= 360)
			rotateAng -= 360;
	}
	setInterval(rotate, refreshInterval);
}