let button1 = document.createElement("button");
button1.innerText = "Shop Now";
button1.style.border = "1px solid white";
button1.style.color = "white";
button1.style.background = "#eb3e32";
button1.style.padding = "7px";
button1.style.fontSize = "25px";
button1.style.width = "220px";
button1.style.height = "70px";

let section1 = document.getElementById("slider2");
let container1 = document.createElement("div");
let textContainer = document.createElement("div");
let divForText = document.createElement("div");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let p1 = document.createElement("p");
let h = document.createElement("h");
let p2 = document.createElement("p");
let image = document.createElement("img");

// css
section1.style.width = "100%";
section1.style.height = "100vh";
section1.style.display = "flex";
section1.style.justifyContent = "center";
section1.style.alignItems = "center";

container1.style.display = "flex";
container1.style.justifyContent = "center";
container1.style.alignItems = "center";
container1.style.width = "100%";
container1.style.backgroundColor = "rgb(242,242,242)";


div1.style.width = div2.style.width = '50%';
div2.style.height = '100%';
div1.style.height = '100%';
div1.style.display = div2.style.display = 'flex';
div1.style.alignItems = div2.style.alignItems = 'center';
div1.style.justifyContent = "end";
div2.style.justifyContent = 'center';

textContainer.style.height = "100%";
textContainer.style.width = "585px";
textContainer.style.display = "flex";
textContainer.style.flexDirection = "column";


p1.innerText = 'Saving 50%';
p1.style.color = "red";
p1.style.fontSize = "60px";
p1.style.margin = "0px 0px 15px 0px"

h.innerText = "All Online Store";
h.style.fontSize = "70px";
h.style.fontWeight = "bold";
h.style.margin = "0px 0px 15px 0px"


p2.innerText = "OFFER AVAILABLE ALL SHOES & PRODUCTS";
p2.style.opacity = "0.7";
p2.style.fontSize = "25px";
p2.style.margin = "0px 0px 40px 0px";


image.src = "../src/assets/image/slider2.png";
image.style.width = "100%";


button1.onmouseenter = () => {
    button1.style.border = "1px solid #eb3e32";
    button1.style.background = "rgb(242,242,242)";
    button1.style.transition = "0.6s";
    button1.style.color = "#eb3e32";
}
button1.onmouseleave = () => {
    button1.style.border = "none";
    button1.style.background = "#eb3e32";
    button1.style.transition = "0.6s";
    button1.style.color = "white";
}

textContainer.appendChild(p1);
textContainer.appendChild(h);
textContainer.appendChild(p2);
textContainer.appendChild(button1);
div1.appendChild(textContainer);
div2.appendChild(image);
container1.appendChild(div1);
container1.appendChild(div2);
section1.appendChild(container1);


