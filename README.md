# Spanbergregator

![Screenshot](./assets/preview.png)

A simple info aggregator for VA-07 campaign. What it does:

* Collects and displays news articles from **NewsApi** about candidate and opponent
* Collects and displays news articles from **NewsApi** about user input query
* Collects and displays tweets from opponent's **Twitter** account
  * Highlights retweets in green
  * Highlights quote replies in yellow
  * Highlights replies in red
  * Highlights self-replies in grey
* Collect and display info from **Propublica** about opponent's vote history
  * My campaign is not for an incumbent, so it may be worth adjusting this so the votes are not automatically taken from opponent's page on Propublica

Created with `create-react-app`

Styled with `Bootstrap`, `Font-Awesome`

## To use:

### Clone this repo

```
$ git clone git@gitlab.com:digidems/spanbergregator.git
$ cd spanbergregator
```

### Install dependencies

For development purposes this project uses a proxy server, so there are two directories in which you will need to install dependencies, the `root` and `client`.

```
$ npm i
$ cd client
$ npm i
$ cd ..
```

### Add environmental variables

1. Make a .env file in the `root` directory
    * `/.env`
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

### Add configs for your campaign

These terms will be used to search the various APIs used in this app.

Store in:

`/client/src/config.js`

```javascript
export default {
  candidateName: '',
  candidateTwitter: '',
  candidateMemberId: '',
  candidateFECId: '',
  opponentName: '',
  opponentTwitter: '',
  opponentMemberId: '',
  opponentFECId: '',
};
```

You can find the member ID by [locating the representative here on congress.gov](https://www.congress.gov/help/field-values/member-bioguide-ids).

**ONLY REPRESENTATIVES IN OFFICE WILL HAVE IDS**, as these are literally IDs for congress. If your candidate, or opponent, do not have an ID just leave the value an empty string, or `null`.

![Member ID Location](./assets/member-id-2.png)

You can find the Federal Election Commission (FEC) ID by [searching for the representative here at fec.gov](https://www.fec.gov/) and grabbing it from their profile.

![FEC ID Location](./assets/fec-id.png)

### Contribute

My wishlist:

* Cache data from API calls to reduce call count
* Group articles that are posted to multiple sources
* Swap votes when candidate is incumbent/challenger
