/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
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
  const $tweetBlock = createTweetElement(tweetData);
  console.log($tweetBlock);
  $('.tweet-container'). prepend($tweetBlock);
})