const li = document.getElementsByTagName("li");
for(let list of li){
    console.log(list)
}

const subTitle = document.getElementsByClassName("title");
for (let title of subTitle){
    console.log(title)
}

const style_section = document.getElementById("section-1");
style_section.style.backgroundColor = "blue"
style_section.style.color = "white"
style_section.style.padding = "10px"
style_section.style.borderRadius = "15px"
style_section.style.paddingLeft = "20px"
style_section.style.border = "3px solid tomato"



const sectionAdd = document.getElementById("main_selector");


//   const section = document.createElement("section");
//   section.innerHTML = `
//   <h1>MY fevarite frutes </h1>

//   <ul>
//   <li>Apple</li>
//   <li>banana</li>
//   <li>carrot</li>
//   <li>orange</li>

//   </ul>
  
  
//   `
//   sectionAdd.appendChild(section)


const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My feverite frouts";
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Apple";
ul.appendChild(li1)


const li2 = document.createElement("li");
li2.innerText = "Banana";
ul.appendChild(li2)


const li3 = document.createElement("li");
li3.innerText = "Orange";
ul.appendChild(li3)


const li4 = document.createElement("li");
li4.innerText = "Apple";
ul.appendChild(li4)

section.append(ul);

sectionAdd.appendChild(section)

const heasing = document.getElementById("deading-tad");
heasing.setAttribute("title", "my name is a golap")

const ullists = document.getElementById("deading-tad");
const list = document.createElement("li");
list.innerText = "JackFriute";
ullists.appendChild(list)