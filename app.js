document.getElementById("container")
const firstDiv = document.querySelector("#container");
document.querySelectorAll(".second")
document.querySelector("ol .third")
const footer = document.querySelector(".footer")
const newLi = document.createElement("li");
const ul = document.querySelector("ul");
const liInsideOl = document.querySelectorAll("ol li");


footer.classList.add("main");

newLi.innerText = "Four";
ul.appendChild(newLi);

for( let i=0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}
firstDiv.innerHTML = "Hello!";





