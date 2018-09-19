const request = require('request')
const crypto = require('crypto')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 3000

const base_url = 'https://gateway.marvel.com:443/v1/public/characters'

const time_stamp = new Date().getTime()
const private_key = '75267cef37ff26d9677b067cecfaac67ad54f649'
const public_key = '3187ef773dc8ab9f494de9798eec872d'

const hash = crypto.createHash('md5').update(time_stamp+private_key+public_key).digest("hex")
console.log(hash)
//request('https://gateway.marvel.com/v1/public/characters?ts=1&apikey='+public_key+'&hash='+hash, function(err, res, body){
  //console.log(body)
//})

const url = `${base_url}?apikey=${public_key}&hash=${hash}&ts=${time_stamp}`
console.log(url)

// var options = {
//   host: 'gateway.marvel.com',
//   path: 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey='+public_key+'&hash='+hash,
//   headers: {
//       'Referer': 'developer.marvel.com',
//   }
// };
app.get('/', (req, res) => {
  const options = {
      url: url,
      headers: {
          'Referer': 'https://developer.marvel.com/'
      }
  };
  
  request(options, (error, response, body) => {
    if (error) {
      res.json({})
    }
    res.json(JSON.parse(body))
  })
})

app.listen(port, () => console.log(`Marvel app listening on port ${port}!`))


// var req = http.get(options, function(res) {
//   // console.log('STATUS: ' + res.statusCode);
//   // console.log('HEADERS: ' + JSON.stringify(res.headers));
//   // res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
//   });
// });

