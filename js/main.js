var map, paper, pageWidth = 800;
var instances = [];

var drawIt = function(){
	paper = new ScaleRaphael('plot-map-container', 950, 650);
	map = paper.USMap();
	paper.scaleAll(pageWidth/map.width);
}

$(document).ready(function(){
	drawIt();

	$.getJSON('js/instances.json', function(data){
		instances = data.features;

		$.each(instances, function(){
			map.plot(this.geometry.coordinates[0], this.geometry.coordinates[1], this.geometry.properties["site-name"]);
			map.darkenState(this.geometry.properties["place-state"], .1);
		});
	});

});
