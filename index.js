const http = require('http')
const express = require('express')
const app = express()
const md5 = require('md5')

const times_stamp = '1'
const private_key = '75267cef37ff26d9677b067cecfaac67ad54f649'
const public_key = '3187ef773dc8ab9f494de9798eec872d'

let hash = md5(times_stamp + private_key+ public_key)

var options = {
  host: 'gateway.marvel.com',
  path: 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey='+public_key+'&hash='+hash,
  setHeaders: {
      'Referer': 'developer.marvel.com',
  }
};

app.use(express.static('public', options))
app.get('')



var req = http.get(options, function(res) {
  // console.log('STATUS: ' + res.statusCode);
  // console.log('HEADERS: ' + JSON.stringify(res.headers));
  // res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });

// write data to request body
// req.write('data\n');
// req.write('data\n');
req.end();