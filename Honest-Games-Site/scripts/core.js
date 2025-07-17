function mobileNavDisplay() {
    let x = document.getElementsByClassName("topNav");
    if (x.className === "topNav") {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}
