const fs = require('fs');
fs.readFile('movie.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});

//will overide the already exisitng texts in the .txt file
fs.writeFile('movie.txt', '!!file wriiten by DInithi!!', function(err) {
    if(err) throw err;
    console.log('File saved!');
});

//will add the new texts to the exising ones
/*fs.appendFile('movie.txt', '!!file wriiten by DInithi!!', function(err) {
    if(err) throw err;
    console.log('File saved!');
});*/