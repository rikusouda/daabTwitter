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
      stamp_index: '1›152921507291204314'
    });
  });

  robot.hear(/TIMELINE$/i, (res) => {
    client.get('statuses/home_timeline', (error, tweets, response) => {
      if (error) {
        res.send('got twitter error');
        throw error;
      }
      console.log(tweets);
      tweets.forEach((tweet) => {
        const output = tweet.user.name + '\n-------------\n' + tweet.text;
        res.send(output);
      });
    });
  });

  robot.hear(/SEARCH$/i, (res) => {
    client.get('statuses/user_timeline', {user_id: process.env.SEARCH_TARGET_ID}, (error, tweets, response) => {
      if (error) {
        res.send('got twitter error');
        throw error;
      }
      console.log(tweets);
      tweets
        .filter((tweet) => {
           return tweet.text.match(new RegExp(process.env.MESSAGE_FILTER));
         })
        .forEach((tweet) => {
          const output = tweet.user.name + '\n-------------\n' + tweet.text;
          res.send(output);
        });
    });
  });
}
