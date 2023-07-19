function applyForm(display) {
    let form = document.getElementsByClassName("form");

    if (display) {
        form.style.display = "flex";
    } else {
        form.style.display = "none";
    }
}