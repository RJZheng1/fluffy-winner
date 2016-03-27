var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

var svg = document.getElementById("svg");
ctx.beginPath();

var projection = d3.geo.albersUsa()
	.scale(1000)

var path = d3.geo.path()
	.projection(projection)
	.context(ctx)

d3.json("http://s3-us-west-2.amazonaws.com/vida-public/geo/us.json", function(data){
	states = data.objects.states;
	ctx.fillStyle="#FFAAAA"
	for (i=0;i<states.geometries.length;i++){
		path(topojson.feature(data,states.geometries[i]));
		ctx.fill();
	}
	ctx.stroke();
});