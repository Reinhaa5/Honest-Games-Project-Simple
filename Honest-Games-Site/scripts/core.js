function mobileNavDisplay() {
    let x = document.getElementById("main-nav");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
