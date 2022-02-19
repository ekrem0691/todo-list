let inputText = document.getElementById("input-text");

let buttonAdd = document.getElementById("input-add");

let buttonClear = document.getElementById("input-clear");

let added = document.getElementById("added");


buttonAdd.addEventListener("click", () => {
    if (inputText.value == "") {
        alert("Place, Enter Your Kanks: 'Name-Surname'...!");
        // return;
    } else {
        let li = document.createElement("li");
        li.className = "lists";
        li.innerHTML = inputText.value;
        let ol = document.createElement("ol");
        ol.className = "olists";
        ol.appendChild(li);
        added.appendChild(ol);
        inputText.value = ""
    }


})

buttonClear.addEventListener("click", () => {
    added.querySelector(".olists").remove();
})