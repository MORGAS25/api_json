const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')


const app = express()

app.get('/', (req, res) => {
    res.json('Welcome to my API about criptocurrency')
})


app.get('/coins', (req,res) => {

    axios.get('https://pt.investing.com/crypto')
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            var list = [];
            $('div[id="list"]').find('div > div > a').each(function (index, element) {
                list.push($(element).attr('href'));
            });
            console.dir(list);
    })
})


app.listen(PORT,() => console.log("server running"))