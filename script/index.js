// search pop up

search_menu = Document.getElementById("search_menu");
var menu = true;

function search() {
    if (menu == true) {
        search_menu.style.display = "block";
        search_menu.style.visibility = "visible";
        menu = false;

    } else {
        search_menu.style.display = "none";

        search_menu.style.visibility = "hidden";
        menu = true;
    }
}