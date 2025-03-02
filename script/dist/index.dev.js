"use strict";

// search pop up
search_menu = document.getElementById("search_menu");
var menu = true;

function search() {
  if (menu == true) {
    search_menu.style.display = "block";
    search_menu.style.visibility = "visible";
    search_menu.style.opacity = "1";
    search_menu.style.animation = "slide-in 0.5s ease-in-out";
    menu = false;
  } else {
    search_menu.style.display = "none";
    search_menu.style.animation = "slide-out 5s ease-in-out";
    search_menu.style.visibility = "hidden";
    search_menu.style.opacity = "0";
    menu = true;
  }
} // function ends here
//side pop up


side_menu = document.getElementById("side-pop-up");
var side_pop_menu = true;

function Side_pop_menu_fn() {
  if (side_pop_menu == true) {
    side_menu.style.display = "block";
    side_menu.style.visibility = "visible";
    side_menu.style.opacity = "1";
    side_pop_menu = false;
  } else {
    side_menu.style.display = "none";
    side_menu.style.visibility = "hidden";
    side_menu.style.opacity = "0";
    side_pop_menu = true;
  }
} // testimonial slider


var review_1 = document.getElementById("review-1");
var review_2 = document.getElementById("review-2");
var review_3 = document.getElementById("review-3");
var review_4 = document.getElementById("review-4");
var max = 3;
var reviews = [review_1, review_2, review_3, review_4];
var start = 0;
var i;

function review_slider() {
  var i = start;

  for (var k = 0; k < 3; k++) {
    if (i > 3) {
      i = 0;
    }

    console.log(i);
    reviews[i].style.display = 'block';
    i++;
  }

  if (i > 3) {
    i = 0;
  }

  console.log("sispay none " + i);
  reviews[i].style.display = 'none';
  start++;
}

review_slider(); // start=0    i=0 1 2 3   3= dispay none start=1

review_slider(); // start=1 i=1 2 3 4    4-dispay none start=2

review_slider(); // start=2 i=2 3 4

review_slider();