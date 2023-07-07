//component
let button = document.createElement("button");
button.innerText = "Shop Now";
button.style.border = "1px solid white";
button.style.color = "white";
button.style.background = "#087cd7";
button.style.padding = "7px";
button.style.fontSize = "25px";

let section = document.getElementById('exclusive');
let box1 = document.createElement('div');
let box2 = document.createElement('div');
let describBox = document.createElement('div');
let describBox2 = document.createElement('div');
let describ = document.createElement('h2');
let describ2 = document.createElement("div");
let p = document.createElement('p');
let img = document.createElement("img");

//css
section.style.width = "100%";
section.style.height = "100vh";
section.style.display = "flex";
section.style.justifyContent = section.style.alignItems = "center";
section.style.background = "#087cd7";

box1.style.width = box2.style.width = '50%';
box1.style.height = box2.style.height = '100%';
box1.style.display = box2.style.display = 'flex';
box1.style.alignItems = box2.style.alignItems = 'center';
box1.style.justifyContent = box2.style.justifyContent = 'center';
// box1.style.border = box2.style.border = '1px solid';

describ.style.width = describ.style.height = '70%';
describ.style.fontFamily = 'Arial';
describ.style.fontSize = '75px';
describ.style.color = 'white';

describ2.style.borderRadius = "50%";
// describ2.style.border = "1px solid black";
describ2.style.width = "100%";
describ2.style.height = "100%";
describ2.style.display = "flex";
describ2.style.alignItems = "center";
describ2.style.justifyContent = "center";
describ2.style.backgroundColor = "white";

describBox.style.display = "flex";
describBox.style.flexDirection = "column";
describBox.style.alignItems = "start";
describBox.style.width = "80%";

describBox2.style.display = "flex";
describBox2.style.alignItems = "center";
describBox2.style.justifyContent = "center";
describBox2.style.width = "90%";
describBox2.style.height = "90%";

img.src = "../src/assets/image/slider.png";

p.style.fontSize = '25px';
p.style.color = 'white';
p.style.fontFamily = 'Arial';

// innerHtml 

describ.innerText = 'EXCLUSIVE NEW SHOP';
p.innerText = 'UP TO 30% OFF ALL SHOES & PRODUCTS';
// function
button.onmouseenter = () => {
    button.style.border = "1px solid rgb(191, 54, 54)";
    button.style.background = "rgb(191, 54, 54)";
    button.style.transition = "0.6s";
}
button.onmouseleave = () => {
    button.style.border = "1px solid white";
    button.style.background = "none";
    button.style.transition = "0.6s";
}
// append box1
document.body.onload = () => {
    describBox.appendChild(describ);
    describBox.appendChild(p);
    describBox.appendChild(button);
    box1.appendChild(describBox);
    section.appendChild(box1);
    describBox2.appendChild(describ2);
    box2.appendChild(describBox2);
    section.appendChild(box2);
    describ2.appendChild(img);
}