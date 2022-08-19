console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

// header ham-icon
$('.ham-icon').click(function(e){
  e.preventDefault();
  $('.nav-list').toggleClass('active');

})

