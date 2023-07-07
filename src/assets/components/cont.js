let productArea = document.getElementById("productArea");
let rowProd = document.createElement("div");
let sportShoes = document.createElement("div");
let latestShoes = document.createElement("div");
let officeShoes = document.createElement("div");
let sportShoesImg = document.createElement("img");
let latestShoesImg = document.createElement("img");
let officeShoesImg = document.createElement("img");

productArea.style.width = "100%";
productArea.style.height = "600px";
productArea.style.display = "flex";
productArea.style.justifyContent = "center";
productArea.style.alignItems = "center";

rowProd.style.width = "1170px";
rowProd.style.height = "400px";
rowProd.style.display = "flex";
rowProd.style.justifyContent = "space-between";

//sportShoes
sportShoes.style.width = "370px"
sportShoes.style.height = "400px"
sportShoesImg.src = "../src/assets/image/sportShoes.png";
sportShoesImg.style.width = "370px"
sportShoesImg.style.height = "400px"


//latestShoes
latestShoes.style.width = "370px"
latestShoes.style.height = "400px"
latestShoesImg.src = "../src/assets/image/latestShoes.png";
latestShoesImg.style.width = "370px"
latestShoesImg.style.height = "400px"

//officeShoes
officeShoes.style.width = "370px"
officeShoes.style.height = "400px"
officeShoesImg.src = "../src/assets/image/officeShoes.png";
officeShoesImg.style.width = "370px"
officeShoesImg.style.height = "400px"

//appends
sportShoes.appendChild(sportShoesImg);
latestShoes.appendChild(latestShoesImg);
officeShoes.appendChild(officeShoesImg);
rowProd.appendChild(sportShoes);
rowProd.appendChild(latestShoes);
rowProd.appendChild(officeShoes);
productArea.appendChild(rowProd);













