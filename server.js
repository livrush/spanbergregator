require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PropublicaApiKey = process.env.PROPUBLICA;
const NewsApiKey = process.env.NEWSAPI;
const TwitterConsumerKey = process.env.consumerKey;
const TwitterConsumerSecret = process.env.consumerSecret;
const TwitterAccessToken = process.env.accessToken;
const TwitterAccessTokenSecret = process.env.accessTokenSecret;
const TwitterCallBackUrl = process.env.callBackUrl;
const PORT = process.env.PORT;

const app = express();

app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => console.warn(`Listening on http://localhost:${PORT}`));