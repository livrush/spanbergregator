require('dotenv').config();

const fs = require('fs');
var https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const twitterAPI = require('node-twitter-api')

const PropublicaApiKey = process.env.PROPUBLICA;
const NewsApiKey = process.env.NEWSAPI;
const TwitterConsumerKey = process.env.consumerKey;
const TwitterConsumerSecret = process.env.consumerSecret;
const TwitterAccessToken = process.env.accessToken;
const TwitterAccessTokenSecret = process.env.accessTokenSecret;
const TwitterCallBackUrl = process.env.callBackUrl;
const PORT = process.env.PORT;

const twitter = new twitterAPI({
    consumerKey: TwitterConsumerKey,
    consumerSecret: TwitterConsumerSecret,
});

// const key = fs.readFileSync('./encryption/private.key');
// const cert = fs.readFileSync('./encryption/primary.crt');
// const ca = fs.readFileSync('./encryption/intermediate.crt');

// const options = {
//     key: key,
//     cert: cert,
//     ca: ca
// };

const app = express();
app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});



app.get('/propublica', function (req, res) {
    axios({
        method: 'get',
        url: 'https://api.propublica.org/congress/v1/members/B001290/votes.json',
        headers: {
            'x-api-key': PropublicaApiKey,
        }
    }).then(function (response) {
        res.send(response.data.results[0].votes);
    });
});

app.get('/newsApi', function (req, res) {
    const query = req.query.q;
    axios({
        method: 'get',
        url: `https://newsapi.org/v2/everything?q=${query}&pageSize=100&sortBy=publishedAt`,
        headers: {
            'x-api-key': NewsApiKey,
        },
    }).then(function (response) {
        res.send(response.data.articles);
    });
});

app.get('/twitter/timeline', function (req, res) {
    twitter.getTimeline("user", {
        screen_name: 'RepDaveBrat',
    },
    TwitterAccessToken,
    TwitterAccessTokenSecret,
    function (error, data, response) {
        if (error) {
            console.error(error);
            // something went wrong
        } else {
            // data contains the data sent by twitter
            res.send(data);
        }
    }
);
});

app.listen(PORT, () => console.warn(`Listening on http://localhost:${PORT}`));
// https.createServer(options, app).listen(443);