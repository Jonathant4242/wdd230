// Get Elements
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#ul");

// add event listener for add button
button.addEventListener('click', () => {
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

});
