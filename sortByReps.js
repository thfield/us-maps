var fs = require('fs');

var inputFile = 'maps/centroids-adj.json',
    outputFile = 'maps/centroids-adj-sort.json';

var geoJson = JSON.parse(fs.readFileSync(inputFile, 'utf8'));

function compare(a,b) {
  if (+a.properties.reps > +b.properties.reps)
    return -1;
  if (+a.properties.reps < +b.properties.reps)
    return 1;
  return 0;
}
geoJson.objects.centroids.geometries.sort(compare);

//output the file
fs.writeFile(outputFile, JSON.stringify(geoJson),
  function(err) {
    if (err) { return console.log(err); }
    console.log("The file was saved as", outputFile);
  }
);
