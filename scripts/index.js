// Description:
//   Utility commands surrounding Hubot uptime.
'use strict';

var Twitter = require('twitter');

let client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports = (robot) => {
  robot.hear(/PING$/i, (res) => {
    res.send('PONG pong');
  });

  robot.hear('stamp', (res) => {
    console.log(res.json);
    res.send({
      stamp_set: '3',
      stamp_index: '1152921507291204314'
    });
  });

  robot.hear(/TWITTER$/i, (res) => {
    res.send('aaaaa');
    console.log(process.env.TWITTER_CONSUMER_KEY);
    console.log(process.env.TWITTER_CONSUMER_SECRET);
    console.log(process.env.TWITTER_ACCESS_TOKEN_KEY);
    console.log(process.env.TWITTER_ACCESS_TOKEN_SECRET);
    client.get('favorites/list', function(error, tweets, response) {
      if (error) {

        res.send('got twitter error');
        throw error;
      }
      console.log(tweets);
      tweets.forEach((tweet) => {
        res.send(tweet.user.name);
        res.send(tweet.text);
      })
    });
  });
}
