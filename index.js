const http = require('http')
const md5 = require('md5')

const times_stamp = '1'
const private_key = '75267cef37ff26d9677b067cecfaac67ad54f649'
const public_key = '3187ef773dc8ab9f494de9798eec872d'

let hash = md5(times_stamp + private_key+ public_key)

var options = {
  host: 'gateway.marvel.com',
  path: 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey='+public_key+'&hash='+hash,
  headers: {
      'Referer': 'developer.marvel.com',
  }
};

