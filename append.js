const placesList = document.getElementById("places");
placesList.style.textAlign = "center";
const li = document.createElement("li");
li.innerText = "DOM DE RE BABA";
placesList.appendChild(li)

const li2 = document.createElement("li");
li2.innerText = "My Name Is Golap";
placesList.appendChild(li2)


const main = document.getElementById("main-containar");

const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "add section"
section.appendChild(h1);



const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "red"
ul.appendChild(li1)

const li4 = document.createElement("li");
li4.innerText = "blue"
ul.appendChild(li4)

const li3 = document.createElement("li");
li3.innerText = "white"
ul.appendChild(li3)

section.appendChild(ul)
main.appendChild(section)


// section add

const addSection = document.createElement("section");
addSection.innerHTML = `

 <h1>My name is a golap </h1>

 <ul>
 <li>Golap</li>
 <li>Raj</li>
 <li>Tahmid</li>

 </ul>


`
main.appendChild(addSection)