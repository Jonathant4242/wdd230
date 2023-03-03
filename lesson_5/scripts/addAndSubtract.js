// Get Elements
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
// function to add chapter
function addChapter() {
    if(input.value !== "") {
        let chapter = input.value;

        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');

        li.textContent = chapter;
        deleteBtn.textContent = "❌"; 
        deleteBtn.addEventListener('click', () => {
            list.removeChild(li);
        });

        li.appendChild(deleteBtn);
        list.append(li);
    }
    input.value = "";
    input.focus();
}



// add event listener for add button
button.addEventListener('click', addChapter);

// add event listener for enter key
document.getElementById("favchap").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addChapter();
    }
})

