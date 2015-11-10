var fs = require('fs');

var inputFile = 'data/static.json',
    outputFile = 'data/static-conv.json';

var input = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
var output=[];

input.forEach(function(el,i){
  var obj = {};
  obj.state = el.state;
  obj.reps = el.reps;
  obj.x = Math.round(+el.x/400 * 10000) / 10000;
  obj.y = Math.round(+el.y/300 * 10000) / 10000;
  // obj.pop = +el.pop.replace(/\,/g,'');
  output.push(obj);
})

//output the file
fs.writeFile(outputFile, JSON.stringify(output),
  function(err) {
    if (err) { return console.log(err); }
    console.log("The file was saved as", outputFile);
  }
);
