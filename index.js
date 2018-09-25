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

const url = `${base_url}?apikey=${public_key}&hash=${hash}&ts=${time_stamp}`
console.log(url)

app.get('/getCharacterNameList', (req, res) => {
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
    
    var data = res.json(JSON.parse(body).data.results
                  .map(character => {
         return {name: character.name, id: character.id}
       }))
     
  })
})


// app.get('/getCharacter:id', (req, res) => {
//   const options = {
//       url: url,
//       headers: {
//           'Referer': 'https://developer.marvel.com/'
//       }
//   };
  
//   request(options, (error, response, body) => {
//     if (error) {
//       res.json({})
//     }
//     let jsondata =
    
//     res.json(JSON.parse(body).data.results[0].name)
//   })
// })

app.listen(port, () => console.log(`Marvel app listening on port ${port}!`))