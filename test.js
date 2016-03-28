var svg = d3.select("body").append("svg")
    .attr("width",1000)
    .attr("height",500);



d3.json("http://s3-us-west-2.amazonaws.com/vida-public/geo/us.json", function(data){
    svg.selectAll(".state")
    //.feature() creates the path
    //.features returns the individual elements of the collection
	.data(topojson.feature(data,data.objects.states).features)
	.enter().append("path")
    //sets the map projection to albersUsa - how the map is displayed
	.attr("d",d3.geo.path().projection(d3.geo.albersUsa()))
	.attr("class",function(){return "state";})
    //id that corresponds to ids from tsv file
	.attr("id",function(state){return state.id;})
});
