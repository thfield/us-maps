//TODO move shared accessor functions into Class-type structure
//TODO add method of changing scaler values

var fociObj = {AK:{x:0.2041,y:0.7226},AL:{x:0.6404,y:0.6308},AR:{x:0.5586,y:0.5883},AZ:{x:0.2851,y:0.5796},CA:{x:0.1885,y:0.4827},CO:{x:0.3801,y:0.4846},CT:{x:0.8065,y:0.3825},DC:{x:0.7618,y:0.4612},DE:{x:0.7814,y:0.454},FL:{x:0.7156,y:0.7163},GA:{x:0.6911,y:0.6261},HI:{x:0.3548,y:0.774},IA:{x:0.5404,y:0.4204},ID:{x:0.2781,y:0.3375},IL:{x:0.5982,y:0.4642},IN:{x:0.6368,y:0.4633},KS:{x:0.4759,y:0.5044},KY:{x:0.6544,y:0.5165},LA:{x:0.5678,y:0.6775},MA:{x:0.8153,y:0.3643},MD:{x:0.7642,y:0.4572},ME:{x:0.8318,y:0.2827},MI:{x:0.6396,y:0.3581},MN:{x:0.5286,y:0.3224},MO:{x:0.5562,y:0.5071},MS:{x:0.6006,y:0.6361},MT:{x:0.3457,y:0.2892},NC:{x:0.7408,y:0.5468},ND:{x:0.4551,y:0.2941},NE:{x:0.459,y:0.4323},NH:{x:0.8116,y:0.331},NJ:{x:0.7876,y:0.423},NM:{x:0.3639,y:0.5908},NV:{x:0.2345,y:0.4455},NY:{x:0.7662,y:0.3631},OH:{x:0.6819,y:0.4468},OK:{x:0.4871,y:0.5729},OR:{x:0.204,y:0.3247},PA:{x:0.745,y:0.4187},RI:{x:0.821,y:0.3763},SC:{x:0.7244,y:0.5895},SD:{x:0.4557,y:0.3639},TN:{x:0.6431,y:0.5576},TX:{x:0.4589,y:0.6685},UT:{x:0.2995,y:0.463},VA:{x:0.7419,y:0.4996},VT:{x:0.7969,y:0.3269},WA:{x:0.2206,y:0.2476},WI:{x:0.5825,y:0.3582},WV:{x:0.7148,y:0.4791},WY:{x:0.3618,y:0.3875}};
var factorsObj = {AK: {reps:1,popDens:1.26,guns:0.58,area:1723337,walmarts:7,millionaires:12167,millionairesFreq:31.5},AL: {reps:7,popDens:94.65,guns:0.52,area:135767,walmarts:90,millionaires:72299,millionairesFreq:24.2},AR: {reps:4,popDens:56.43,guns:0.55,area:137732,walmarts:80,millionaires:40756,millionairesFreq:22.8},AZ: {reps:9,popDens:57.05,guns:0.31,area:295234,walmarts:62,millionaires:105722,millionairesFreq:30.9},CA: {reps:53,popDens:244.2,guns:0.21,area:423967,walmarts:167,millionaires:663394,millionairesFreq:35.7},CO: {reps:7,popDens:49.33,guns:0.35,area:269601,walmarts:61,millionaires:89896,millionairesFreq:31.8},CT: {reps:5,popDens:741.4,guns:0.17,area:14357,walmarts:32,millionaires:84508,millionairesFreq:41.4},DC: {reps:1,popDens:10298,guns:0.04,area:177,walmarts:null,millionaires:null,millionairesFreq:null},DE: {reps:1,popDens:470.7,guns:0.26,area:6446,walmarts:8,millionaires:17939,millionairesFreq:34.7},FL: {reps:27,popDens:360.2,guns:0.25,area:170312,walmarts:191,millionaires:369912,millionairesFreq:33.6},GA: {reps:14,popDens:172.5,guns:0.4,area:153910,walmarts:128,millionaires:141701,millionairesFreq:26.9},HI: {reps:2,popDens:216.8,guns:0.07,area:28313,walmarts:8,millionaires:29423,millionairesFreq:43.1},IA: {reps:4,popDens:54.81,guns:0.43,area:145746,walmarts:56,millionaires:50529,millionairesFreq:26.8},ID: {reps:2,popDens:19.5,guns:0.55,area:216443,walmarts:19,millionaires:20493,millionairesFreq:24.6},IL: {reps:18,popDens:231.9,guns:0.2,area:149995,walmarts:137,millionaires:243350,millionairesFreq:33.1},IN: {reps:9,popDens:182.5,guns:0.39,area:94326,walmarts:95,millionaires:104539,millionairesFreq:26.4},KS: {reps:4,popDens:35.09,guns:0.42,area:213100,walmarts:55,millionaires:47855,millionairesFreq:28.2},KY: {reps:6,popDens:110,guns:0.48,area:104656,walmarts:82,millionaires:62394,millionairesFreq:22.4},LA: {reps:6,popDens:105,guns:0.44,area:135659,walmarts:81,millionaires:64972,millionairesFreq:23.1},MA: {reps:9,popDens:852.1,guns:0.13,area:27336,walmarts:44,millionaires:141186,millionairesFreq:37.1},MD: {reps:8,popDens:606.2,guns:0.21,area:32131,walmarts:41,millionaires:132354,millionairesFreq:39.1},ME: {reps:2,popDens:43.04,guns:0.41,area:91633,walmarts:22,millionaires:22218,millionairesFreq:24.5},MI: {reps:14,popDens:174.8,guns:0.38,area:250487,walmarts:79,millionaires:190871,millionairesFreq:30.6},MN: {reps:8,popDens:67.14,guns:0.42,area:225163,walmarts:52,millionaires:99246,millionairesFreq:31},MO: {reps:8,popDens:87.26,guns:0.42,area:180540,walmarts:117,millionaires:98279,millionairesFreq:26.7},MS: {reps:4,popDens:63.5,guns:0.55,area:125438,walmarts:64,millionaires:39270,millionairesFreq:21.5},MT: {reps:1,popDens:6.86,guns:0.58,area:380831,walmarts:12,millionaires:14155,millionairesFreq:22.9},NC: {reps:13,popDens:200.6,guns:0.41,area:139391,walmarts:118,millionaires:140501,millionairesFreq:25.9},ND: {reps:1,popDens:9.92,guns:0.51,area:183108,walmarts:9,millionaires:10163,millionairesFreq:23.7},NE: {reps:3,popDens:23.97,guns:0.39,area:200330,walmarts:27,millionaires:29862,millionairesFreq:26.8},NH: {reps:2,popDens:147,guns:0.3,area:24214,walmarts:26,millionaires:26498,millionairesFreq:32.8},NJ: {reps:12,popDens:1189,guns:0.12,area:22591,walmarts:45,millionaires:207693,millionairesFreq:42.5},NM: {reps:3,popDens:17.16,guns:0.35,area:314917,walmarts:31,millionaires:30891,millionairesFreq:25.9},NV: {reps:4,popDens:24.8,guns:0.34,area:286380,walmarts:26,millionaires:42888,millionairesFreq:30},NY: {reps:27,popDens:415.3,guns:0.18,area:141297,walmarts:87,millionaires:368388,millionairesFreq:33.6},OH: {reps:16,popDens:282.5,guns:0.32,area:116098,walmarts:136,millionaires:203404,millionairesFreq:27.8},OK: {reps:5,popDens:55.22,guns:0.43,area:181037,walmarts:84,millionaires:53939,millionairesFreq:24.2},OR: {reps:5,popDens:40.33,guns:0.4,area:254799,walmarts:29,millionaires:63943,millionairesFreq:28.7},PA: {reps:18,popDens:285.3,guns:0.35,area:119280,walmarts:119,millionaires:228270,millionairesFreq:29.6},RI: {reps:2,popDens:1006,guns:0.13,area:4001,walmarts:9,millionaires:20229,millionairesFreq:30.2},SC: {reps:7,popDens:157.1,guns:0.42,area:82933,walmarts:63,millionaires:68178,millionairesFreq:25.5},SD: {reps:1,popDens:10.86,guns:0.57,area:199729,walmarts:12,millionaires:11769,millionairesFreq:23.6},TN: {reps:9,popDens:156.6,guns:0.44,area:109153,walmarts:104,millionaires:94419,millionairesFreq:24.4},TX: {reps:36,popDens:98.07,guns:0.36,area:695662,walmarts:329,millionaires:350727,millionairesFreq:27.4},UT: {reps:4,popDens:34.3,guns:0.44,area:219882,walmarts:29,millionaires:36348,millionairesFreq:30},VA: {reps:11,popDens:207.3,guns:0.35,area:110787,walmarts:87,millionaires:159395,millionairesFreq:34},VT: {reps:1,popDens:67.73,guns:0.42,area:24906,walmarts:4,millionaires:11390,millionairesFreq:28},WA: {reps:10,popDens:102.6,guns:0.33,area:184661,walmarts:45,millionaires:118132,millionairesFreq:30.3},WI: {reps:8,popDens:105.2,guns:0.44,area:169635,walmarts:77,millionaires:99976,millionairesFreq:28.1},WV: {reps:3,popDens:77.06,guns:0.55,area:62756,walmarts:34,millionaires:27302,millionairesFreq:22},WY: {reps:1,popDens:5.85,guns:0.6,area:253335,walmarts:10,millionaires:8708,millionairesFreq:25.5}};

var factors = {
      reps: {
        factor: .02,
        text:'Representatives in Congress'
      },
      popDens: {
        factor: .002,
        text:'people per square mile'
      },
      guns: {
        factor: 1,
        text:'percent gun ownership'
      },
      area: {
        factor: .000001,
        text:'square kilometers'
      },
      walmarts: {
        factor: .002,
        text:'Walmarts'
      },
      millionaires: {
        factor: .000001,
        text: 'millionaires living there'
      },
      millionairesFreq: {
        factor: .01,
        text: 'millionaires per 1000 households'
      }
    };

function apportionMap() {
  var margin = {top: 20, right: 20, bottom: 20, left: 20},
      width = 400,
      height = 250;

  var circledata=[{state:'CA',lat:37.19,long:-119.45,scaler:53},{state:'TX',lat:31.47,long:-99.32,scaler:36},{state:'FL',lat:28.62,long:-82.44,scaler:27},{state:'NY',lat:42.95,long:-75.52,scaler:27},{state:'IL',lat:40.04,long:-89.19,scaler:18},{state:'PA',lat:40.87,long:-77.79,scaler:18},{state:'OH',lat:40.28,long:-82.79,scaler:16},{state:'GA',lat:32.64,long:-83.44,scaler:14},{state:'MI',lat:44.34,long:-85.41,scaler:14},{state:'NC',lat:35.55,long:-79.38,scaler:13},{state:'NJ',lat:40.19,long:-74.67,scaler:12},{state:'VA',lat:37.52,long:-78.85,scaler:11},{state:'WA',lat:47.38,long:-120.45,scaler:10},{state:'AZ',lat:34.27,long:-111.65,scaler:9},{state:'IN',lat:39.89,long:-86.28,scaler:9},{state:'MA',lat:42.25,long:-71.8,scaler:9},{state:'TN',lat:35.86,long:-86.35,scaler:9},{state:'MD',lat:39.05,long:-76.79,scaler:8},{state:'MN',lat:46.28,long:-94.3,scaler:8},{state:'MO',lat:38.35,long:-92.45,scaler:8},{state:'WI',lat:44.62,long:-89.99,scaler:8},{state:'AL',lat:32.77,long:-86.92,scaler:7},{state:'CO',lat:38.99,long:-105.54,scaler:7},{state:'SC',lat:33.91,long:-80.89,scaler:7},{state:'KY',lat:37.53,long:-85.3,scaler:6},{state:'LA',lat:31.06,long:-91.99,scaler:6},{state:'CT',lat:41.62,long:-72.72,scaler:5},{state:'OK',lat:35.59,long:-97.49,scaler:5},{state:'OR',lat:43.93,long:-120.56,scaler:5},{state:'AR',lat:34.89,long:-92.44,scaler:4},{state:'IA',lat:42.07,long:-93.49,scaler:4},{state:'KS',lat:38.49,long:-98.38,scaler:4},{state:'MS',lat:32.73,long:-89.66,scaler:4},{state:'NV',lat:39.33,long:-116.62,scaler:4},{state:'UT',lat:39.3,long:-111.66,scaler:4},{state:'NE',lat:41.53,long:-99.79,scaler:3},{state:'NM',lat:34.4,long:-106.11,scaler:3},{state:'WV',lat:38.64,long:-80.62,scaler:3},{state:'HI',lat:20.29,long:-156.37,scaler:2},{state:'ID',lat:44.35,long:-114.6,scaler:2},{state:'ME',lat:45.37,long:-69.24,scaler:2},{state:'NH',lat:43.68,long:-71.58,scaler:2},{state:'RI',lat:41.67,long:-71.55,scaler:2},{state:'AK',lat:64.06,long:-152.23,scaler:1},{state:'DE',lat:38.98,long:-75.5,scaler:1},{state:'DC',lat:38.91,long:-77.01,scaler:1},{state:'MT',lat:47.05,long:-109.64,scaler:1},{state:'ND',lat:47.44,long:-100.46,scaler:1},{state:'SD',lat:44.44,long:-100.22,scaler:1},{state:'VT',lat:44.06,long:-72.66,scaler:1},{state:'WY',lat:42.99,long:-107.55,scaler:1}];

  function chart(selection) {
    selection.each(function(data) {
      var mult = width * .02;

      var projection = d3.geo.albersUsa()
              .scale(width)
              .translate([width/2, height/2]);
      var path = d3.geo.path().projection(projection);

      var svg = d3.select(this).append('svg')
          .attr('width', width)
          .attr('height', height);

      // var geomap = svg.append('g').attr('class', 'geo hidden');;
      var geomap = svg.append('g').attr('class', 'geo');;

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
          .attr('r', function(d) { return Math.sqrt(d.scaler*mult) })
          .on('mousedown', function(d){
            var sticky = d3.select('.sticky');
            sticky.text(d.state + ' has ' + d.scaler + ' Representatives in Congress.')
          })
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
      height = 600,
      scaling = 'reps';

  function chart(selection) {
    selection.each(function(data) {
      var mult = width * factors[scaling].factor,
          nodes = [];

      for (el in fociObj) {
        var o = {
          state : el,
          x: fociObj[el].x*width,
          y: fociObj[el].y*height,
          scaler: factorsObj[el][scaling]
        };
        nodes.push(o);
      }
      nodes.sort(compare);

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
          o.y += (fociObj[o.state].y*height - o.y) * k;
          o.x += (fociObj[o.state].x*width - o.x) * k;
        });
        node
          .attr('cx', function(d) { return d.x; })
          .attr('cy', function(d) { return d.y; });
      }

      force.start();
      var n = 1000 ;
      for (var i = 0; i < n; ++i) force.tick();
      force.stop();

      node = node.data(nodes);
      node.enter().append('circle')
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; })
        .attr('r', function(d,i) { return Math.sqrt(d.scaler*mult); })
        .attr('class', function(d) { return d.state + ' ' + data[d.state] })
        .on('click', function(d){
          var sticky = d3.select('.sticky');
          sticky.text(d.state + ' has ' + d.scaler + ' ' + factors[scaling].text);
        })
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
        .call(force.drag);

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

  chart.scaling = function(_) {
    if (!arguments.length) return scaling;
    scaling = _;
    return chart;
  };
  return chart;
}

function compare(a,b) {
  if (+a.scaler > +b.scaler)
    return -1;
  if (+a.scaler < +b.scaler)
    return 1;
  return 0;
}
