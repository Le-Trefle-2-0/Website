function applyForm(display) {
    let form = document.getElementById("form");

    if (display) {
        form.style.display = "flex";
    } else {
        form.style.display = "none";
    }
}