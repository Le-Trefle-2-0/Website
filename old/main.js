function closeForm() {
    document.getElementById("contact").style.display = "none";
}

function openForm() {
    document.getElementById("contact").style.display = "flex";
}

setInterval(() => {
    let largeInputs = document.getElementsByClassName("large-input");
    let largeInputsArray = Array.from(largeInputs);
    for (let i in largeInputsArray) {
        let input = largeInputsArray[i].firstChild;
        console.log(input.value);
        if (input.value.length > 0) {
            input.classList.add("text");
        } else {
            input.classList.remove("text");
        }
    }
}, 5000)