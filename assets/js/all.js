"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
}); // header ham-icon

$('.ham-icon').click(function (e) {
  e.preventDefault();
  $('.nav-list').toggleClass('active');
});
//# sourceMappingURL=all.js.map
