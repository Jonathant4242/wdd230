const options = { year: "numeric" };
document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-UK", options);

document.querySelector("#modified").textContent = document.lastModified;