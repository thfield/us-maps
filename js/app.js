//TODO move shared accessor functions into Class-type structure
//TODO add method of changing scaler values

function apportionMap() {
  var mult = 7,
      margin = {top: 20, right: 20, bottom: 20, left: 20},
      width = 400,
      height = 250;

var circledata=[{state:'CA',lat:37.19,'long':-119.45,scaler:53},{state:'TX',lat:31.47,'long':-99.32,scaler:36},{state:'FL',lat:28.62,'long':-82.44,scaler:27},{state:'NY',lat:42.95,'long':-75.52,scaler:27},{state:'IL',lat:40.04,'long':-89.19,scaler:18},{state:'PA',lat:40.87,'long':-77.79,scaler:18},{state:'OH',lat:40.28,'long':-82.79,scaler:16},{state:'GA',lat:32.64,'long':-83.44,scaler:14},{state:'MI',lat:44.34,'long':-85.41,scaler:14},{state:'NC',lat:35.55,'long':-79.38,scaler:13},{state:'NJ',lat:40.19,'long':-74.67,scaler:12},{state:'VA',lat:37.52,'long':-78.85,scaler:11},{state:'WA',lat:47.38,'long':-120.45,scaler:10},{state:'AZ',lat:34.27,'long':-111.65,scaler:9},{state:'IN',lat:39.89,'long':-86.28,scaler:9},{state:'MA',lat:42.25,'long':-71.8,scaler:9},{state:'TN',lat:35.86,'long':-86.35,scaler:9},{state:'MD',lat:39.05,'long':-76.79,scaler:8},{state:'MN',lat:46.28,'long':-94.3,scaler:8},{state:'MO',lat:38.35,'long':-92.45,scaler:8},{state:'WI',lat:44.62,'long':-89.99,scaler:8},{state:'AL',lat:32.77,'long':-86.92,scaler:7},{state:'CO',lat:38.99,'long':-105.54,scaler:7},{state:'SC',lat:33.91,'long':-80.89,scaler:7},{state:'KY',lat:37.53,'long':-85.3,scaler:6},{state:'LA',lat:31.06,'long':-91.99,scaler:6},{state:'CT',lat:41.62,'long':-72.72,scaler:5},{state:'OK',lat:35.59,'long':-97.49,scaler:5},{state:'OR',lat:43.93,'long':-120.56,scaler:5},{state:'AR',lat:34.89,'long':-92.44,scaler:4},{state:'IA',lat:42.07,'long':-93.49,scaler:4},{state:'KS',lat:38.49,'long':-98.38,scaler:4},{state:'MS',lat:32.73,'long':-89.66,scaler:4},{state:'NV',lat:39.33,'long':-116.62,scaler:4},{state:'UT',lat:39.3,'long':-111.66,scaler:4},{state:'NE',lat:41.53,'long':-99.79,scaler:3},{state:'NM',lat:34.4,'long':-106.11,scaler:3},{state:'WV',lat:38.64,'long':-80.62,scaler:3},{state:'HI',lat:20.29,'long':-156.37,scaler:2},{state:'ID',lat:44.35,'long':-114.6,scaler:2},{state:'ME',lat:45.37,'long':-69.24,scaler:2},{state:'NH',lat:43.68,'long':-71.58,scaler:2},{state:'RI',lat:41.67,'long':-71.55,scaler:2},{state:'AK',lat:64.06,'long':-152.23,scaler:1},{state:'DE',lat:38.98,'long':-75.5,scaler:1},{state:'DC',lat:38.91,'long':-77.01,scaler:1},{state:'MT',lat:47.05,'long':-109.64,scaler:1},{state:'ND',lat:47.44,'long':-100.46,scaler:1},{state:'SD',lat:44.44,'long':-100.22,scaler:1},{state:'VT',lat:44.06,'long':-72.66,scaler:1},{state:'WY',lat:42.99,'long':-107.55,scaler:1}];

  function chart(selection) {
    selection.each(function(data) {

      var projection = d3.geo.albersUsa()
              .scale(width)
              .translate([width/2, height/2]);
      var path = d3.geo.path().projection(projection);

      var svg = d3.select(this).append('svg')
          .attr('width', width)
          .attr('height', height);

      var geomap = svg.append('g').attr('class', 'geo hidden');;

      d3.json('maps/usa-simple.json', function(us) {
        geomap.append('path')
          .datum(topojson.feature(us, us.objects.states))
          .attr('d', path);
      });

      var state = svg.selectAll('state')
          .data(circledata)
        .enter().append('g').attr('class', 'state')
          .attr('transform', function(d) { return 'translate(' + projection([d.long,d.lat]) + ')'; });

      state.append('circle')
          .attr('class', function(d) { return d.state + ' ' + data[d.state] })
          .attr('r', function(d) { return Math.sqrt(mult * +d.scaler) })
          .on('mouseover', function(d) {
            var tt = d3.select(this)
            tt.classed('highlight',true)
            ttFollow(tt,d.state);
          })
          .on('mouseout', function(d){
            d3.select(this).classed('highlight', false)
            ttHide();
          });
      });
    }

    function ttFollow(element, d, options) {
      element.on('mousemove', null);
      element.on('mousemove', function() {
        var position = d3.mouse(document.body);
        d3.select('#tooltip')
          .style('top', ( (position[1] + 30)) + "px")
          .style('left', ( position[0]) + "px")
          .select('#tooltip .value')
          .text(d);
      });
      d3.select('#tooltip').classed('hidden', false);
    };

  function ttHide() {
    d3.select('#tooltip').classed('hidden', true);
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

function apportionForceMap() {
  var width = 1000,
      height = 600;

  var foci=[{state:'CA',scaler:53,x:.1885,y:.4827},{state:'TX',scaler:36,x:.4589,y:.6685},{state:'FL',scaler:27,x:.7156,y:.7163},{state:'NY',scaler:27,x:.7662,y:.3631},{state:'IL',scaler:18,x:.5982,y:.4642},{state:'PA',scaler:18,x:.745,y:.4187},{state:'OH',scaler:16,x:.6819,y:.4468},{state:'GA',scaler:14,x:.6911,y:.6261},{state:'MI',scaler:14,x:.6396,y:.3581},{state:'NC',scaler:13,x:.7408,y:.5468},{state:'NJ',scaler:12,x:.7876,y:.423},{state:'VA',scaler:11,x:.7419,y:.4996},{state:'WA',scaler:10,x:.2206,y:.2476},{state:'AZ',scaler:9,x:.2851,y:.5796},{state:'IN',scaler:9,x:.6368,y:.4633},{state:'MA',scaler:9,x:.8153,y:.3643},{state:'TN',scaler:9,x:.6431,y:.5576},{state:'MD',scaler:8,x:.7642,y:.4572},{state:'MN',scaler:8,x:.5286,y:.3224},{state:'MO',scaler:8,x:.5562,y:.5071},{state:'WI',scaler:8,x:.5825,y:.3582},{state:'AL',scaler:7,x:.6404,y:.6308},{state:'CO',scaler:7,x:.3801,y:.4846},{state:'SC',scaler:7,x:.7244,y:.5895},{state:'KY',scaler:6,x:.6544,y:.5165},{state:'LA',scaler:6,x:.5678,y:.6775},{state:'CT',scaler:5,x:.8065,y:.3825},{state:'OK',scaler:5,x:.4871,y:.5729},{state:'OR',scaler:5,x:.204,y:.3247},{state:'AR',scaler:4,x:.5586,y:.5883},{state:'IA',scaler:4,x:.5404,y:.4204},{state:'KS',scaler:4,x:.4759,y:.5044},{state:'MS',scaler:4,x:.6006,y:.6361},{state:'NV',scaler:4,x:.2345,y:.4455},{state:'UT',scaler:4,x:.2995,y:.463},{state:'NE',scaler:3,x:.459,y:.4323},{state:'NM',scaler:3,x:.3639,y:.5908},{state:'WV',scaler:3,x:.7148,y:.4791},{state:'HI',scaler:2,x:.3548,y:.774},{state:'ID',scaler:2,x:.2781,y:.3375},{state:'ME',scaler:2,x:.8318,y:.2827},{state:'NH',scaler:2,x:.8116,y:.331},{state:'RI',scaler:2,x:.821,y:.3763},{state:'AK',scaler:1,x:.2041,y:.7226},{state:'DE',scaler:1,x:.7814,y:.454},{state:'DC',scaler:1,x:.7618,y:.4612},{state:'MT',scaler:1,x:.3457,y:.2892},{state:'ND',scaler:1,x:.4551,y:.2941},{state:'SD',scaler:1,x:.4557,y:.3639},{state:'VT',scaler:1,x:.7969,y:.3269},{state:'WY',scaler:1,x:.3618,y:.3875}];

  function chart(selection) {
    selection.each(function(data) {
      var mult = width * .02,
          nodes = d3.range(foci.length).map(function(i) {
            return {id:i, state:foci[i].state, scaler:foci[i].scaler, x:foci[i].x*width, y:foci[i].y*height};
          });
      foci.forEach(function(el){
        el.x = el.x*width;
        el.y = el.y*height;
      })

      var svg = d3.select(this).append('svg')
          .attr('width', width)
          .attr('height', height);

      var force = d3.layout.force()
          .nodes(nodes)
          .links([])
          .charge(-100)
          .chargeDistance(mult*7)
          .gravity(0)
          .size([width, height])
          .on('tick', tick);

      var node = svg.selectAll('circle');

      function tick(e) {
        var k = 1 * e.alpha;
        // Push nodes toward their designated focus.
        nodes.forEach(function(o, i) {
          o.y += (foci[o.id].y - o.y) * k;
          o.x += (foci[o.id].x - o.x) * k;
        });
        node
          .attr('cx', function(d) { return d.x; })
          .attr('cy', function(d) { return d.y; });
      }

      force.start();
      // var n = 500;
      // for (var i = 0; i < n; ++i) force.tick();
      // force.stop();

      node = node.data(nodes);
      node.enter().append('circle')
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; })
        .attr('r', function(d,i) { return Math.sqrt(d.scaler*mult); })
        .attr('class', function(d) { return d.state + ' ' + data[d.state] })
        .on('mouseover', function(d) {
          var tt = d3.select(this)
          tt.classed('highlight',true)
          // ttShow(d.state);
          ttFollow(tt,d.state);
        })
        .on('mouseout', function(d){
          d3.select(this).classed('highlight', false)
          ttHide();
        })
        //.on('click', function(d){
        //   ...dosomething...
        // })
        .call(force.drag);

    });
  }

  // function ttShow(val) {
  //   var position = d3.mouse(document.body);
  //   var xPosition = d3.event.pageX;
  //   var yPosition = d3.event.pageY;
  //   d3.select('#tooltip')
  //     .style('left', xPosition + 'px')
  //     .style('top', yPosition + 'px')
  //     .select('#tooltip .value')
  //     .text(val);
  //   d3.select('#tooltip').classed('hidden', false);
  // }

  function ttFollow(element, d, options) {
    element.on('mousemove', null);
    element.on('mousemove', function() {
      var position = d3.mouse(document.body);
      d3.select('#tooltip')
        .style('top', ( (position[1] + 30)) + "px")
        .style('left', ( position[0]) + "px")
        .select('#tooltip .value')
        .text(d);
    });
    d3.select('#tooltip').classed('hidden', false);
  };

  function ttHide() {
    d3.select('#tooltip').classed('hidden', true);
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
