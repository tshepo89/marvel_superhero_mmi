const request = require('request')
const md5 = require('md5')

const times_stamp = '1'
const private_key = '75267cef37ff26d9677b067cecfaac67ad54f649'
const public_key = '3187ef773dc8ab9f494de9798eec872d'

let hash = md5(times_stamp + private_key+ public_key)

request('https://gateway.marvel.com/v1/public/characters?ts=1&apikey='+public_key+'&hash='+hash, function(err, res, body){
  console.log(body)
})

// var options = {
//   host: 'gateway.marvel.com',
//   path: 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey='+public_key+'&hash='+hash,
//   headers: {
//       'Referer': 'developer.marvel.com',
//   }
// };



// var req = http.get(options, function(res) {
//   // console.log('STATUS: ' + res.statusCode);
//   // console.log('HEADERS: ' + JSON.stringify(res.headers));
//   // res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
//   });
// });

// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });

// write data to request body
// req.write('data\n');
// req.write('data\n');
// req.end();