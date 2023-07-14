function applyForm(number, display) {
    let forms = document.getElementsByClassName("forms");
    let form = forms[number];

    if (display) {
        form.style.display = "flex";
    } else {
        form.style.display = "none";
    }
}