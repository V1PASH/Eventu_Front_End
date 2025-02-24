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
        search_menu.style.display = "none"
        search_menu.style.animation = "slide-out 5s ease-in-out";
        search_menu.style.visibility = "hidden";
        search_menu.style.opacity = "0"
        menu = true;
    }
}

// function ends here

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
        side_menu.style.opacity = "0"
        side_pop_menu = true;
    }
}