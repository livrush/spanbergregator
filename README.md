# Spanbergregator

A simple info aggregator for VA-07 campaign. What it does:

* Collects and displays news articles from **NewsApi** about candidate and opponent
* Collects and displays news articles from **NewsApi** about user input query
* Collects and displays tweets from opponent's **Twitter** account
  * Highlights retweets in green
  * Highlights quote replies in yellow
  * Highlights replies in red
  * Highlights self-replies in almost-indistinguishable grey
* Collect and display info from **Propublica** about opponent's vote history
  * My campaign is not for an incumbent, so it may be worth adjusting this so the votes are not automatically taken from opponent's page on Propublica

Created with `create-react-app`

Styled with `Bootstrap`, `Font-Awesome`

## To use:

1. Clone this repo

```
$ git clone git@gitlab.com:digidems/spanbergregator.git
```

2. CD into directory

```
$ cd spangregator
```

3. Install dependencies

For development purposes this project uses a proxy server, so there are two directories in which you will need to install dependencies, the `root` and `client`.

```
$ npm i
$ cd client
$ npm i
$ cd ..
```

4. Add environmental variables

    1. Make a .env file in the `root` directory
    1. You will need to get API keys for several services
        * [Twitter](https://developer.twitter.com/en/docs.html)
        * [NewsApi](https://newsapi.org/register)
        * [Propublica](https://www.propublica.org/datastore/api/propublica-congress-api)
    1. Should contain the following:

```
# General environment stuff

PORT=3001

# Propublica API

PropublicaApiKey=

# NewsApi API

NewsApiKey=

# Twitter API

TwitterConsumerKey=
TwitterConsumerSecret=
TwitterAccessToken=
TwitterAccessTokenSecret=
TwitterCallBackUrl=
```

5. Add configs for your campaign

These terms will be used to search the various APIs used in this app. 

client/src/config.js

```javascript
export default {
  candidateName: '',
  opponentName: '',
  opponentTwitter: '',
};
```

