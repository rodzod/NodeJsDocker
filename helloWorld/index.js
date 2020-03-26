const express = require('express')
const app = express()
const axios = require('axios')
const port = 3000

app.get('/', (req, res) => {
    return res.send('Hello World!')
})

app.get('/starwars-films', (req, res) => {
    axios.get('https://swapi.co/api/films')
        .then(function (response) {
            // handle success
            console.log('Success!!');
            let getJustNames = response.data.results.map(e => e.title)
            res.send(getJustNames)
        })
        .catch(function (error) {
            // handle error
            console.log('ERROR =(');
        })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})