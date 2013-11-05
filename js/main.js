var map, paper, pageWidth = 800;

var drawIt = function(){
	paper = new ScaleRaphael('plot-map-container', 950, 650);
	map = paper.USMap();
	paper.scaleAll(pageWidth/map.width);
}

document.onload = drawIt();