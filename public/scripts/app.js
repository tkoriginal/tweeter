/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function renderTweets(tweets) {
  $('.tweet-container').empty();
  tweets.forEach(tweet => {
    const $tweetBlock = createTweetElement(tweet);
    $('.tweet-container'). prepend($tweetBlock);
  })
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
    <p class="tweet__text">${escape(tweetObj.content.text)}</p>
    <footer class="tweet__footer">
      <p class="tweet__posted">${moment(tweetObj.created_at).fromNow()}</p>
      <div class="tweet__icon">
        <i class="fas fa-flag tweet__flag"></i>
        <i class="fas fa-retweet tweet__retweet"></i>
        <i class="fas fa-heart tweet__retweet"></i>
      </div>
    </footer>
  </article>`
  )
}

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
 
const loadTweets = () => {
  $.get('/tweets', (data, status) => {
    if (status === 'success'){
      renderTweets(data);
    }
  })
}

const isInvalidMessage = (text) => {
  if(text === null || text === ''){
    return 'There is nothing to tweet'
  }
  if (text.length > 140) {
    return 'The tweet is too long'
  }
  return false;

}

const newTweet = () => {
  $('form').on('submit', function (e) {
    e.preventDefault();
    const form = $(this);
    const data = form.serialize();
    const textArea = form[0][0]
    if (isInvalidMessage(textArea.value)){
      setTimeout($('.new-error').text(isInvalidMessage(textArea.value)), 3000);
      $('.new-error').slideDown('medium');
    } else {
      $('.new-error').slideUp()
      $.post('/tweets',
        data, 
        (data) => {
          loadTweets();
          $(textArea).val('');
          $('.counter').text(140)
        });
      }
    })
}

$('.nav-bar__compose').on('click', () =>{
  $('.new-tweet').slideToggle('medium')
  $('.textarea').focus();
})

$(document).ready(function() {
  $('.new-error').hide()
  loadTweets();
  newTweet();
  
})