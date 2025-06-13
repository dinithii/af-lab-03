const fs = require('fs');
const http = require('http');
const https = require('https');
const myModule = require('./my-module');
const { rejects } = require('assert');

console.log(myModule.myFunction());
//create server
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

//create http request
//https.get(url, callback)
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
    let data = ''; //initiate empty string to store incoming data chunk
    resp.on('data', (chunk) => { //resp = response, resp comes in pieces each time chunk is recieved it will add to the data
        data += chunk;
    });
    resp.on('end', () => { //this event fires after all the chunks are recieved. 
        console.log(JSON.parse(data)); //convert JSON string into javascript object
    });
}) .on('error', (err) => {
    console.log("Error: " + err.message);
});

//promise
const myPromise = new Promise((resolve, reject) => {
    const condition = true;
    if(condition) {
        resolve('Successful');
    } else {
        reject('Fail');
    }
});

myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});

//async/await
async function myFunction(){
    try {
        const result = await myPromise;
        console.log(result);
    } catch(error){
        console.error(error);
    }
}
myFunction();

//async/await with fetch()
async function myFunction(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if(!response.ok){
            throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        console.log(result);
    } catch(error){
        console.error(error);
    }
}

myFunction();

//read file
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