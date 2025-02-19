// search pop up

search_menu = Document.getElementById("search_menu");
var menu = false;

function search() {
    if (menu == false) {
        search_menu.style.display = "block";
        menu = true;
    } else {
        search_menu.style.display = "none";
        menu = false;
    }
}