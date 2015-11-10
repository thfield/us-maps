function apportionForceMap() {
  var width = 1000,
      height = 600;

  var foci = [{"state":"CA","reps":53,"x":0.1885,"y":0.4827},{"state":"TX","reps":36,"x":0.4589,"y":0.6685},{"state":"FL","reps":27,"x":0.7156,"y":0.7163},{"state":"NY","reps":27,"x":0.7662,"y":0.3631},{"state":"IL","reps":18,"x":0.5982,"y":0.4642},{"state":"PA","reps":18,"x":0.745,"y":0.4187},{"state":"OH","reps":16,"x":0.6819,"y":0.4468},{"state":"GA","reps":14,"x":0.6911,"y":0.6261},{"state":"MI","reps":14,"x":0.6396,"y":0.3581},{"state":"NC","reps":13,"x":0.7408,"y":0.5468},{"state":"NJ","reps":12,"x":0.7876,"y":0.423},{"state":"VA","reps":11,"x":0.7419,"y":0.4996},{"state":"WA","reps":10,"x":0.2206,"y":0.2476},{"state":"AZ","reps":9,"x":0.2851,"y":0.5796},{"state":"IN","reps":9,"x":0.6368,"y":0.4633},{"state":"MA","reps":9,"x":0.8153,"y":0.3643},{"state":"TN","reps":9,"x":0.6431,"y":0.5576},{"state":"MD","reps":8,"x":0.7642,"y":0.4572},{"state":"MN","reps":8,"x":0.5286,"y":0.3224},{"state":"MO","reps":8,"x":0.5562,"y":0.5071},{"state":"WI","reps":8,"x":0.5825,"y":0.3582},{"state":"AL","reps":7,"x":0.6404,"y":0.6308},{"state":"CO","reps":7,"x":0.3801,"y":0.4846},{"state":"SC","reps":7,"x":0.7244,"y":0.5895},{"state":"KY","reps":6,"x":0.6544,"y":0.5165},{"state":"LA","reps":6,"x":0.5678,"y":0.6775},{"state":"CT","reps":5,"x":0.8065,"y":0.3825},{"state":"OK","reps":5,"x":0.4871,"y":0.5729},{"state":"OR","reps":5,"x":0.204,"y":0.3247},{"state":"AR","reps":4,"x":0.5586,"y":0.5883},{"state":"IA","reps":4,"x":0.5404,"y":0.4204},{"state":"KS","reps":4,"x":0.4759,"y":0.5044},{"state":"MS","reps":4,"x":0.6006,"y":0.6361},{"state":"NV","reps":4,"x":0.2345,"y":0.4455},{"state":"UT","reps":4,"x":0.2995,"y":0.463},{"state":"NE","reps":3,"x":0.459,"y":0.4323},{"state":"NM","reps":3,"x":0.3639,"y":0.5908},{"state":"WV","reps":3,"x":0.7148,"y":0.4791},{"state":"HI","reps":2,"x":0.3548,"y":0.774},{"state":"ID","reps":2,"x":0.2781,"y":0.3375},{"state":"ME","reps":2,"x":0.8318,"y":0.2827},{"state":"NH","reps":2,"x":0.8116,"y":0.331},{"state":"RI","reps":2,"x":0.821,"y":0.3763},{"state":"AK","reps":1,"x":0.2041,"y":0.7226},{"state":"DE","reps":1,"x":0.7814,"y":0.454},{"state":"DC","reps":1,"x":0.7618,"y":0.4612},{"state":"MT","reps":1,"x":0.3457,"y":0.2892},{"state":"ND","reps":1,"x":0.4551,"y":0.2941},{"state":"SD","reps":1,"x":0.4557,"y":0.3639},{"state":"VT","reps":1,"x":0.7969,"y":0.3269},{"state":"WY","reps":1,"x":0.3618,"y":0.3875}];

  function chart(selection) {
    selection.each(function(data) {
      var mult = width * .02,
          nodes = d3.range(foci.length).map(function(i) {
            return {id:i, state:foci[i].state, reps:foci[i].reps, x:foci[i].x*width, y:foci[i].y*height};
          });
      foci.forEach(function(el){
        el.x = el.x*width;
        el.y = el.y*height;
      })

      var svg = d3.select(this).append("svg")
          .attr("width", width)
          .attr("height", height);

      var force = d3.layout.force()
          .nodes(nodes)
          .links([])
          .charge(-100)
          .chargeDistance(mult*7)
          .gravity(0)
          .size([width, height])
          .on("tick", tick);

      var node = svg.selectAll("circle");

      function tick(e) {
        var k = 1 * e.alpha;
        // Push nodes toward their designated focus.
        nodes.forEach(function(o, i) {
          o.y += (foci[o.id].y - o.y) * k;
          o.x += (foci[o.id].x - o.x) * k;
        });
        node
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
      }

      var n = 500;
      force.start();
      // for (var i = 0; i < n; ++i) force.tick();
      // force.stop();


    node = node.data(nodes);
    node.enter().append("circle")
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("r", function(d,i) { return Math.sqrt(d.reps*mult); })
        .attr("class", function(d) { return d.state + ' ' + data[d.state] })
        .on("mouseover", function(d) {
          d3.select(this).classed('highlight',true)
          ttShow(d.state);
        })
        .on("mouseout", function(d){
          d3.select(this).classed('highlight', false)
          ttHide();
        });
        // .call(force.drag);

    });
  }

  function ttShow(val) {
    var xPosition = d3.event.pageX;
    var yPosition = d3.event.pageY;
    d3.select("#tooltip")
      .style("left", xPosition + "px")
      .style("top", yPosition + "px")
      .select("#tooltip .value")
      .text(val);
    d3.select("#tooltip").classed("hidden", false);
  }

  function ttHide() {
    d3.select("#tooltip").classed("hidden", true);
  }
  chart.margin = function(_) {
    if (!arguments.length) return margin;
    margin = _;
    return chart;
  };

  chart.width = function(_) {
    if (!arguments.length) return width;
    width = _;
    return chart;
  };

  chart.height = function(_) {
    if (!arguments.length) return height;
    height = _;
    return chart;
  };

  return chart;
}
