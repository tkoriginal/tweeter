/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
}
const createTweetElement = (tweetObj) => {
  return (
    `<article class="tweet">
    <header class="tweet__header">
      <img class="tweet__image" src=${tweetObj.user.avatars.small} alt="user-image">
      <h2 class="tweet__name">${tweetObj.user.name}</h2>
      <p class="tweet__handle">${tweetObj.user.handle}</p>
    </header>
    <p class="tweet__text">${tweetObj.content.text}</p>
    <footer class="tweet__footer">
      <p class="tweet__posted">${Date(tweetObj.created_at)}</p>
      <div class="tweet__icon">
        <i class="fas fa-flag tweet__flag"></i>
        <i class="fas fa-retweet tweet__retweet"></i>
        <i class="fas fa-heart tweet__retweet"></i>
      </div>
    </footer>
  </article>`
  )
}

$(document).ready(function() {
  data.forEach(tweet => {
    const $tweetBlock = createTweetElement(tweet);
    console.log($tweetBlock);
    $('.tweet-container'). prepend($tweetBlock);
  })
})