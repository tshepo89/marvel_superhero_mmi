const request = require('request')
const url = require('url')
const http = require('http')
const md5 = require('md5')

const times_stamp = '1'
const private_key = '75267cef37ff26d9677b067cecfaac67ad54f649'
const public_key = '3187ef773dc8ab9f494de9798eec872d'

let hash = md5(times_stamp + private_key+ public_key)

const options = {  
  url: 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey='+public_key+'&hash='+hash,
  method: 'GET',
  headers: {
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
  }
};


// let myurl = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey='+public_key+'&hash='+hash
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   //Return the url part of the request object:
//   var q = url.parse(myurl, true);
//   console.log(q.host)
//   console.log(q.pathname);
//   console.log(q.search);

//   let qdata = q.query
//   console.log(qdata)
//   res.write(req.url);
//   res.end();
//   console.log('this is running')
// }).listen(8080);

request(options, function(err, res, body) {  
  let json = JSON.parse(body);
  console.log(json.data.results[1].name);
});