$(document).ready(function() {
  $('textarea').on('input', function (){
    let counter = $(this).siblings('.new-tweet__submit').find('.counter');
    let limit = 140;
    let textLength = $(this).val().length;
    counter.text(limit - textLength);
    limit - textLength < 0 ? counter.addClass('limit-reached') : counter.removeClass('limit-reached');
  })
});