//TODO move shared accessor functions into Class-type structure
//TODO add method of changing scaler values
// var foci=[{state:"AK",x:.2041,y:.7226,"pop-dens":"1.26",guns:.58,area:1723337,walmarts:7,millionaires:12167,"millionaire-freq":31.5},{state:"AL",x:.6404,y:.6308,"pop-dens":"94.65",guns:.52,area:135767,walmarts:90,millionaires:72299,"millionaire-freq":24.2},{state:"AR",x:.5586,y:.5883,"pop-dens":"56.43",guns:.55,area:137732,walmarts:80,millionaires:40756,"millionaire-freq":22.8},{state:"AZ",x:.2851,y:.5796,"pop-dens":"57.05",guns:.31,area:295234,walmarts:62,millionaires:105722,"millionaire-freq":30.9},{state:"CA",x:.1885,y:.4827,"pop-dens":"244.20",guns:.21,area:423967,walmarts:167,millionaires:663394,"millionaire-freq":35.7},{state:"CO",x:.3801,y:.4846,"pop-dens":"49.33",guns:.35,area:269601,walmarts:61,millionaires:89896,"millionaire-freq":31.8},{state:"CT",x:.8065,y:.3825,"pop-dens":"741.40",guns:.17,area:14357,walmarts:32,millionaires:84508,"millionaire-freq":41.4},{state:"DC",x:.7618,y:.4612,"pop-dens":"10,298.00",guns:.04,area:177,walmarts:null,millionaires:null,"millionaire-freq":null},{state:"DE",x:.7814,y:.454,"pop-dens":"470.70",guns:.26,area:6446,walmarts:8,millionaires:17939,"millionaire-freq":34.7},{state:"FL",x:.7156,y:.7163,"pop-dens":"360.20",guns:.25,area:170312,walmarts:191,millionaires:369912,"millionaire-freq":33.6},{state:"GA",x:.6911,y:.6261,"pop-dens":"172.50",guns:.4,area:153910,walmarts:128,millionaires:141701,"millionaire-freq":26.9},{state:"HI",x:.3548,y:.774,"pop-dens":"216.80",guns:.07,area:28313,walmarts:8,millionaires:29423,"millionaire-freq":43.1},{state:"IA",x:.5404,y:.4204,"pop-dens":"54.81",guns:.43,area:145746,walmarts:56,millionaires:50529,"millionaire-freq":26.8},{state:"ID",x:.2781,y:.3375,"pop-dens":"19.50",guns:.55,area:216443,walmarts:19,millionaires:20493,"millionaire-freq":24.6},{state:"IL",x:.5982,y:.4642,"pop-dens":"231.90",guns:.2,area:149995,walmarts:137,millionaires:243350,"millionaire-freq":33.1},{state:"IN",x:.6368,y:.4633,"pop-dens":"182.50",guns:.39,area:94326,walmarts:95,millionaires:104539,"millionaire-freq":26.4},{state:"KS",x:.4759,y:.5044,"pop-dens":"35.09",guns:.42,area:213100,walmarts:55,millionaires:47855,"millionaire-freq":28.2},{state:"KY",x:.6544,y:.5165,"pop-dens":"110.00",guns:.48,area:104656,walmarts:82,millionaires:62394,"millionaire-freq":22.4},{state:"LA",x:.5678,y:.6775,"pop-dens":"105.00",guns:.44,area:135659,walmarts:81,millionaires:64972,"millionaire-freq":23.1},{state:"MA",x:.8153,y:.3643,"pop-dens":"852.10",guns:.13,area:27336,walmarts:44,millionaires:141186,"millionaire-freq":37.1},{state:"MD",x:.7642,y:.4572,"pop-dens":"606.20",guns:.21,area:32131,walmarts:41,millionaires:132354,"millionaire-freq":39.1},{state:"ME",x:.8318,y:.2827,"pop-dens":"43.04",guns:.41,area:91633,walmarts:22,millionaires:22218,"millionaire-freq":24.5},{state:"MI",x:.6396,y:.3581,"pop-dens":"174.80",guns:.38,area:250487,walmarts:79,millionaires:190871,"millionaire-freq":30.6},{state:"MN",x:.5286,y:.3224,"pop-dens":"67.14",guns:.42,area:225163,walmarts:52,millionaires:99246,"millionaire-freq":31},{state:"MO",x:.5562,y:.5071,"pop-dens":"87.26",guns:.42,area:180540,walmarts:117,millionaires:98279,"millionaire-freq":26.7},{state:"MS",x:.6006,y:.6361,"pop-dens":"63.50",guns:.55,area:125438,walmarts:64,millionaires:39270,"millionaire-freq":21.5},{state:"MT",x:.3457,y:.2892,"pop-dens":"6.86",guns:.58,area:380831,walmarts:12,millionaires:14155,"millionaire-freq":22.9},{state:"NC",x:.7408,y:.5468,"pop-dens":"200.60",guns:.41,area:139391,walmarts:118,millionaires:140501,"millionaire-freq":25.9},{state:"ND",x:.4551,y:.2941,"pop-dens":"9.92",guns:.51,area:183108,walmarts:9,millionaires:10163,"millionaire-freq":23.7},{state:"NE",x:.459,y:.4323,"pop-dens":"23.97",guns:.39,area:200330,walmarts:27,millionaires:29862,"millionaire-freq":26.8},{state:"NH",x:.8116,y:.331,"pop-dens":"147.00",guns:.3,area:24214,walmarts:26,millionaires:26498,"millionaire-freq":32.8},{state:"NJ",x:.7876,y:.423,"pop-dens":"1,189.00",guns:.12,area:22591,walmarts:45,millionaires:207693,"millionaire-freq":42.5},{state:"NM",x:.3639,y:.5908,"pop-dens":"17.16",guns:.35,area:314917,walmarts:31,millionaires:30891,"millionaire-freq":25.9},{state:"NV",x:.2345,y:.4455,"pop-dens":"24.80",guns:.34,area:286380,walmarts:26,millionaires:42888,"millionaire-freq":30},{state:"NY",x:.7662,y:.3631,"pop-dens":"415.30",guns:.18,area:141297,walmarts:87,millionaires:368388,"millionaire-freq":33.6},{state:"OH",x:.6819,y:.4468,"pop-dens":"282.50",guns:.32,area:116098,walmarts:136,millionaires:203404,"millionaire-freq":27.8},{state:"OK",x:.4871,y:.5729,"pop-dens":"55.22",guns:.43,area:181037,walmarts:84,millionaires:53939,"millionaire-freq":24.2},{state:"OR",x:.204,y:.3247,"pop-dens":"40.33",guns:.4,area:254799,walmarts:29,millionaires:63943,"millionaire-freq":28.7},{state:"PA",x:.745,y:.4187,"pop-dens":"285.30",guns:.35,area:119280,walmarts:119,millionaires:228270,"millionaire-freq":29.6},{state:"RI",x:.821,y:.3763,"pop-dens":"1,006.00",guns:.13,area:4001,walmarts:9,millionaires:20229,"millionaire-freq":30.2},{state:"SC",x:.7244,y:.5895,"pop-dens":"157.10",guns:.42,area:82933,walmarts:63,millionaires:68178,"millionaire-freq":25.5},{state:"SD",x:.4557,y:.3639,"pop-dens":"10.86",guns:.57,area:199729,walmarts:12,millionaires:11769,"millionaire-freq":23.6},{state:"TN",x:.6431,y:.5576,"pop-dens":"156.60",guns:.44,area:109153,walmarts:104,millionaires:94419,"millionaire-freq":24.4},{state:"TX",x:.4589,y:.6685,"pop-dens":"98.07",guns:.36,area:695662,walmarts:329,millionaires:350727,"millionaire-freq":27.4},{state:"UT",x:.2995,y:.463,"pop-dens":"34.30",guns:.44,area:219882,walmarts:29,millionaires:36348,"millionaire-freq":30},{state:"VA",x:.7419,y:.4996,"pop-dens":"207.30",guns:.35,area:110787,walmarts:87,millionaires:159395,"millionaire-freq":34},{state:"VT",x:.7969,y:.3269,"pop-dens":"67.73",guns:.42,area:24906,walmarts:4,millionaires:11390,"millionaire-freq":28},{state:"WA",x:.2206,y:.2476,"pop-dens":"102.60",guns:.33,area:184661,walmarts:45,millionaires:118132,"millionaire-freq":30.3},{state:"WI",x:.5825,y:.3582,"pop-dens":"105.20",guns:.44,area:169635,walmarts:77,millionaires:99976,"millionaire-freq":28.1},{state:"WV",x:.7148,y:.4791,"pop-dens":"77.06",guns:.55,area:62756,walmarts:34,millionaires:27302,"millionaire-freq":22},{state:"WY",x:.3618,y:.3875,"pop-dens":"5.85",guns:.6,area:253335,walmarts:10,millionaires:8708,"millionaire-freq":25.5}];
// function compare(a,b) {
//   if (+a[scaling] > +b[scaling])
//     return -1;
//   if (+a[scaling] < +b[scaling])
//     return 1;
//   return 0;
// }
var scaling = 'reps';
// // pop-dens .002
// // guns 1
// // area .000001
// // walmarts .005
// // millionaires .000001
// // millionaire-freq .01
// foci.sort(compare);

function apportionMap() {
  var mult = 7,
      margin = {top: 20, right: 20, bottom: 20, left: 20},
      width = 400,
      height = 250;

  var circledata=[{state:'CA',lat:37.19,long:-119.45,scaler:53},{state:'TX',lat:31.47,long:-99.32,scaler:36},{state:'FL',lat:28.62,long:-82.44,scaler:27},{state:'NY',lat:42.95,long:-75.52,scaler:27},{state:'IL',lat:40.04,long:-89.19,scaler:18},{state:'PA',lat:40.87,long:-77.79,scaler:18},{state:'OH',lat:40.28,long:-82.79,scaler:16},{state:'GA',lat:32.64,long:-83.44,scaler:14},{state:'MI',lat:44.34,long:-85.41,scaler:14},{state:'NC',lat:35.55,long:-79.38,scaler:13},{state:'NJ',lat:40.19,long:-74.67,scaler:12},{state:'VA',lat:37.52,long:-78.85,scaler:11},{state:'WA',lat:47.38,long:-120.45,scaler:10},{state:'AZ',lat:34.27,long:-111.65,scaler:9},{state:'IN',lat:39.89,long:-86.28,scaler:9},{state:'MA',lat:42.25,long:-71.8,scaler:9},{state:'TN',lat:35.86,long:-86.35,scaler:9},{state:'MD',lat:39.05,long:-76.79,scaler:8},{state:'MN',lat:46.28,long:-94.3,scaler:8},{state:'MO',lat:38.35,long:-92.45,scaler:8},{state:'WI',lat:44.62,long:-89.99,scaler:8},{state:'AL',lat:32.77,long:-86.92,scaler:7},{state:'CO',lat:38.99,long:-105.54,scaler:7},{state:'SC',lat:33.91,long:-80.89,scaler:7},{state:'KY',lat:37.53,long:-85.3,scaler:6},{state:'LA',lat:31.06,long:-91.99,scaler:6},{state:'CT',lat:41.62,long:-72.72,scaler:5},{state:'OK',lat:35.59,long:-97.49,scaler:5},{state:'OR',lat:43.93,long:-120.56,scaler:5},{state:'AR',lat:34.89,long:-92.44,scaler:4},{state:'IA',lat:42.07,long:-93.49,scaler:4},{state:'KS',lat:38.49,long:-98.38,scaler:4},{state:'MS',lat:32.73,long:-89.66,scaler:4},{state:'NV',lat:39.33,long:-116.62,scaler:4},{state:'UT',lat:39.3,long:-111.66,scaler:4},{state:'NE',lat:41.53,long:-99.79,scaler:3},{state:'NM',lat:34.4,long:-106.11,scaler:3},{state:'WV',lat:38.64,long:-80.62,scaler:3},{state:'HI',lat:20.29,long:-156.37,scaler:2},{state:'ID',lat:44.35,long:-114.6,scaler:2},{state:'ME',lat:45.37,long:-69.24,scaler:2},{state:'NH',lat:43.68,long:-71.58,scaler:2},{state:'RI',lat:41.67,long:-71.55,scaler:2},{state:'AK',lat:64.06,long:-152.23,scaler:1},{state:'DE',lat:38.98,long:-75.5,scaler:1},{state:'DC',lat:38.91,long:-77.01,scaler:1},{state:'MT',lat:47.05,long:-109.64,scaler:1},{state:'ND',lat:47.44,long:-100.46,scaler:1},{state:'SD',lat:44.44,long:-100.22,scaler:1},{state:'VT',lat:44.06,long:-72.66,scaler:1},{state:'WY',lat:42.99,long:-107.55,scaler:1}];

  function chart(selection) {
    selection.each(function(data) {

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
          .attr('r', function(d) { return Math.sqrt(mult * +d.scaler) })
          .on('click', function(d){
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
      height = 600;

  var foci=[{state:'CA',reps:53,x:.1885,y:.4827},{state:'TX',reps:36,x:.4589,y:.6685},{state:'FL',reps:27,x:.7156,y:.7163},{state:'NY',reps:27,x:.7662,y:.3631},{state:'IL',reps:18,x:.5982,y:.4642},{state:'PA',reps:18,x:.745,y:.4187},{state:'OH',reps:16,x:.6819,y:.4468},{state:'GA',reps:14,x:.6911,y:.6261},{state:'MI',reps:14,x:.6396,y:.3581},{state:'NC',reps:13,x:.7408,y:.5468},{state:'NJ',reps:12,x:.7876,y:.423},{state:'VA',reps:11,x:.7419,y:.4996},{state:'WA',reps:10,x:.2206,y:.2476},{state:'AZ',reps:9,x:.2851,y:.5796},{state:'IN',reps:9,x:.6368,y:.4633},{state:'MA',reps:9,x:.8153,y:.3643},{state:'TN',reps:9,x:.6431,y:.5576},{state:'MD',reps:8,x:.7642,y:.4572},{state:'MN',reps:8,x:.5286,y:.3224},{state:'MO',reps:8,x:.5562,y:.5071},{state:'WI',reps:8,x:.5825,y:.3582},{state:'AL',reps:7,x:.6404,y:.6308},{state:'CO',reps:7,x:.3801,y:.4846},{state:'SC',reps:7,x:.7244,y:.5895},{state:'KY',reps:6,x:.6544,y:.5165},{state:'LA',reps:6,x:.5678,y:.6775},{state:'CT',reps:5,x:.8065,y:.3825},{state:'OK',reps:5,x:.4871,y:.5729},{state:'OR',reps:5,x:.204,y:.3247},{state:'AR',reps:4,x:.5586,y:.5883},{state:'IA',reps:4,x:.5404,y:.4204},{state:'KS',reps:4,x:.4759,y:.5044},{state:'MS',reps:4,x:.6006,y:.6361},{state:'NV',reps:4,x:.2345,y:.4455},{state:'UT',reps:4,x:.2995,y:.463},{state:'NE',reps:3,x:.459,y:.4323},{state:'NM',reps:3,x:.3639,y:.5908},{state:'WV',reps:3,x:.7148,y:.4791},{state:'HI',reps:2,x:.3548,y:.774},{state:'ID',reps:2,x:.2781,y:.3375},{state:'ME',reps:2,x:.8318,y:.2827},{state:'NH',reps:2,x:.8116,y:.331},{state:'RI',reps:2,x:.821,y:.3763},{state:'AK',reps:1,x:.2041,y:.7226},{state:'DE',reps:1,x:.7814,y:.454},{state:'DC',reps:1,x:.7618,y:.4612},{state:'MT',reps:1,x:.3457,y:.2892},{state:'ND',reps:1,x:.4551,y:.2941},{state:'SD',reps:1,x:.4557,y:.3639},{state:'VT',reps:1,x:.7969,y:.3269},{state:'WY',reps:1,x:.3618,y:.3875}];

  function chart(selection) {
    selection.each(function(data) {
      var mult = width * .02,
          nodes = d3.range(foci.length).map(function(i) {
            return {id:i, state:foci[i].state, scaler:foci[i][scaling], x:foci[i].x*width, y:foci[i].y*height};
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
        .on('click', function(d){
          var sticky = d3.select('.sticky');
          sticky.text(d.state + ' has ' + d.scaler + ' Representatives in Congress.')
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
