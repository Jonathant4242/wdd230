document.getElementById("btn").addEventListener("click", function () {
    const input = document.querySelector("input")
    const list = document.querySelector("ul");
    let chapter = document.getElementById("favchap").value;
    console.log(chapter);
    if (chapter !== "") {
  
      const newBtn = document.createElement("button");
      newBtn.innerHTML = "\u274C";
  
      const newLI = document.createElement("li");
      newLI.textContent = chapter;
      newLI.append(newBtn);
  
      document.getElementById("list").append(newLI);
      document.getElementById("favchap").value = "";
  
      newBtn.addEventListener("click", function () {
        list.removeChild(newLI);
  
      })
      input.focus()
      input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("btn").click();
        }
      })
    }//end of if
  });