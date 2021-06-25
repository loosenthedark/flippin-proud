const animateNavToggler = document.getElementById("nav-toggler");
const navTogglerIcons = document.querySelectorAll(".nav-toggler-icon");

$(document).ready(function () {

  // Custom nav toggler icon animation on click - code block adapted from https://www.youtube.com/watch?v=g7v4BB9IMRw
  $(animateNavToggler).click(function () {
    $(navTogglerIcons).toggleClass("active");
    $(animateNavToggler).toggleClass("no-border");
  });

});