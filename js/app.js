function apportionMap() {
  var mult = 7,
      margin = {top: 20, right: 20, bottom: 20, left: 20},
      width = 400,
      height = 250;

  var circledata = [{state: "CA",lat: 37.19,long: -119.45,reps: 53}, {state: "TX",lat: 31.47,long: -99.32,reps: 36}, {state: "FL",lat: 28.62,long: -82.44,reps: 27}, {state: "NY",lat: 42.95,long: -75.52,reps: 27}, {state: "IL",lat: 40.04,long: -89.19,reps: 18}, {state: "PA",lat: 40.87,long: -77.79,reps: 18}, {state: "OH",lat: 40.28,long: -82.79,reps: 16}, {state: "GA",lat: 32.64,long: -83.44,reps: 14}, {state: "MI",lat: 44.34,long: -85.41,reps: 14}, {state: "NC",lat: 35.55,long: -79.38,reps: 13}, {state: "NJ",lat: 40.19,long: -74.67,reps: 12}, {state: "VA",lat: 37.52,long: -78.85,reps: 11}, {state: "WA",lat: 47.38,long: -120.45,reps: 10}, {state: "AZ",lat: 34.27,long: -111.65,reps: 9}, {state: "IN",lat: 39.89,long: -86.28,reps: 9}, {state: "MA",lat: 42.25,long: -71.8,reps: 9}, {state: "TN",lat: 35.86,long: -86.35,reps: 9}, {state: "MD",lat: 39.05,long: -76.79,reps: 8}, {state: "MN",lat: 46.28,long: -94.3,reps: 8}, {state: "MO",lat: 38.35,long: -92.45,reps: 8}, {state: "WI",lat: 44.62,long: -89.99,reps: 8}, {state: "AL",lat: 32.77,long: -86.92,reps: 7}, {state: "CO",lat: 38.99,long: -105.54,reps: 7}, {state: "SC",lat: 33.91,long: -80.89,reps: 7}, {state: "KY",lat: 37.53,long: -85.3,reps: 6}, {state: "LA",lat: 31.06,long: -91.99,reps: 6}, {state: "CT",lat: 41.62,long: -72.72,reps: 5}, {state: "OK",lat: 35.59,long: -97.49,reps: 5}, {state: "OR",lat: 43.93,long: -120.56,reps: 5}, {state: "AR",lat: 34.89,long: -92.44,reps: 4}, {state: "IA",lat: 42.07,long: -93.49,reps: 4}, {state: "KS",lat: 38.49,long: -98.38,reps: 4}, {state: "MS",lat: 32.73,long: -89.66,reps: 4}, {state: "NV",lat: 39.33,long: -116.62,reps: 4}, {state: "UT",lat: 39.3,long: -111.66,reps: 4}, {state: "NE",lat: 41.53,long: -99.79,reps: 3}, {state: "NM",lat: 34.4,long: -106.11,reps: 3}, {state: "WV",lat: 38.64,long: -80.62,reps: 3}, {state: "HI",lat: 20.29,long: -156.37,reps: 2}, {state: "ID",lat: 44.35,long: -114.6,reps: 2}, {state: "ME",lat: 45.37,long: -69.24,reps: 2}, {state: "NH",lat: 43.68,long: -71.58,reps: 2}, {state: "RI",lat: 41.67,long: -71.55,reps: 2}, {state: "AK",lat: 64.06,long: -152.23,reps: 1}, {state: "DE",lat: 38.98,long: -75.5,reps: 1}, {state: "DC",lat: 38.91,long: -77.01,reps: 1}, {state: "MT",lat: 47.05,long: -109.64,reps: 1}, {state: "ND",lat: 47.44,long: -100.46,reps: 1}, {state: "SD",lat: 44.44,long: -100.22,reps: 1}, {state: "VT",lat: 44.06,long: -72.66,reps: 1}, {state: "WY",lat: 42.99,long: -107.55,reps: 1}];

  function chart(selection) {
    selection.each(function(data) {

      var projection = d3.geo.albersUsa()
              .scale(width)
              .translate([width/2, height/2]);
      var path = d3.geo.path().projection(projection);

      var svg = d3.select(this).append("svg")
          .attr("width", width)
          .attr("height", height);

      // d3.json("maps/usa-simple.json", function(us) {
      //   svg.append("path")
      //         .datum(topojson.feature(us, us.objects.states))
      //         .attr("d", path)
      //         .attr("class", "geo");
      //   d3.select("#force-map svg").append("path")
      //         .datum(topojson.feature(us, us.objects.states))
      //         .attr("d", path)
      //         .attr("class", "geo");
      // });

      // d3.json("data/colors.json", function(data) {
          var state = svg.selectAll("state")
              .data(circledata)
            .enter().append("g").attr("class", "state")
              .attr("transform", function(d) { return "translate(" + projection([d.long,d.lat]) + ")"; });

          state.append("circle")
              .attr("class", function(d) { return d.state + ' ' + data[d.state] })
              .attr("r", function(d) { return Math.sqrt(mult * +d.reps) })
              .on("mouseover", function(d) {
                d3.select(this).classed('highlight',true)
                ttShow(d.state);
              })
              .on("mouseout", function(d){
                d3.select(this).classed('highlight', false)
                ttHide();
              });

          // state.append('text')
          //     .text(function (d){return d.state })
          //     .attr("y",  mult/4 );
        // })
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
