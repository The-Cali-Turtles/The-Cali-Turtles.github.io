function moveImgLeft() {

    var current = document.getElementById("select");
    var next = current.nextElementSibling;
    var button = document.querySelector("right-button");
    var first = document.getElementById("first");

    if(next == button) {
        current.removeAttribute("id");
        first.id = "select";
    } 
    
    current.removeAttribute("id");
    current.style.background = "lightgray";
    next.id = "select";
    current.style.background = "white";

}