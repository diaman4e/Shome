let data = [
    {
        id: Math.trunc(Math.random() * 10000),
        image: "https://htmldemo.net/shome/shome/assets/img/shop/1.webp",
        for: "Men/Women",
        describ: "Leather Mens Slipper",
        price: "240.00",
        count: "12"
    },
    {
        id: Math.trunc(Math.random() * 10000),
        image: "https://htmldemo.net/shome/shome/assets/img/shop/2.webp",
        for: "Men/Women",
        describ: "Quickiin Mens shoes",
        price: "140.00",
        count: "12"
    },
    {
        id: Math.trunc(Math.random() * 10000),
        image: "https://htmldemo.net/shome/shome/assets/img/shop/3.webp",
        for: "Men/Women",
        describ: "Rexpo Womens shoes",
        price: "260.00",
        count: "12"
    },
    {
        id: Math.trunc(Math.random() * 10000),
        image: "https://htmldemo.net/shome/shome/assets/img/shop/4.webp",
        for: "Men/Women",
        describ: "Hollister V-Neck Knit",
        price: "880.00",
        count: "12"

    },
    {
        id: Math.trunc(Math.random() * 10000),
        image: "https://htmldemo.net/shome/shome/assets/img/shop/5.webp",
        for: "Men/Women",
        describ: "Primitive Mens shoes",
        price: "500.00",
        count: "12"

    },
    {
        id: Math.trunc(Math.random() * 10000),
        image: "https://htmldemo.net/shome/shome/assets/img/shop/6.webp",
        for: "Men/Women",
        describ: "New Womens High Hills",
        price: "333.00",
        count: "12"

    },
    {
        id: Math.trunc(Math.random() * 10000),
        image: "https://htmldemo.net/shome/shome/assets/img/shop/7.webp",
        for: "Men/Women",
        describ: "Simple Fabric Shoe",
        price: "133.00",
        count: "12"

    },
    {
        id: Math.trunc(Math.random() * 10000),
        image: "https://htmldemo.net/shome/shome/assets/img/shop/8.webp",
        for: "Men/Women",
        describ: "Exclusive mens shoe",
        price: "420.00",
        count: "12"

    },
]

async function checkBasket() {
    let basket = await fetch("https://6436c2f73e4d2b4a12db0a38.mockapi.io/Basket").then( res => res.json());
    if(basket.length > 0){
        cardArr = basket;
        getCardProduct();
    }
}checkBasket();

let cardArr = [];

let container = document.getElementById("shoesList");
let titleContainer = document.createElement("div");
let h1 = document.createElement("h1");
let pi = document.createElement("p");
let listContainer = document.createElement("div");

container.style.width = "100%";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";

titleContainer.style.display = "flex";
titleContainer.style.flexDirection = "column";
titleContainer.style.alignItems = "center";

h1.innerText = "Featured Items";
pi.innerText = "There are many variations of passages of Lorem Ipsum available";
h1.style.fontSize = "50px";
h1.style.margin = "0px 0px 12px 0px";
pi.style.opacity = "0.6";
pi.style.fontSize = "25px";

listContainer.style.width = "1170px";
listContainer.style.display = "flex";
listContainer.style.flexWrap = "wrap";
listContainer.style.margin = "50px 0px 0px 0px";

data.map((item) => {
    let product = document.createElement("div");
    let productImg = document.createElement("img");
    let productIsFor = document.createElement("p");
    let productDescrib = document.createElement("p");
    let productPrice = document.createElement("p");
    let add = document.createElement("button");

    //css
    product.style.width = "291px";

    productImg.src = item.image;
    productImg.style.border = "2px solid gainsboro";
    productImg.style.borderRadius = "15px";

    productIsFor.innerText = item.for;
    productIsFor.style.opacity = "0.6";
    productIsFor.style.margin = "10px 0px 10px 0px";

    productDescrib.innerText = item.describ;
    productDescrib.style.fontWeight = "bold";
    productDescrib.style.margin = "0px 0px 10px 0px";
    productDescrib.style.fontSize = "20px";

    productPrice.style.opacity = "0.6";
    productPrice.style.fontSize = "20px";
    productPrice.innerText = item.price;

    add.innerText = 'add to card';
    add.style.padding = '5px';
    add.style.margin = '10px';

    // function add
    add.addEventListener("click" , addP);
    async function addP(){
        let g = cardArr.find(v => v.id === item.id);
        if (!g) {
            cardArr.push(item);
            item.count = 1; 
            item.priceCard = item.price;
            item.checked = false
            fetch("https://6436c2f73e4d2b4a12db0a38.mockapi.io/Basket",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json;charset=utf-8"
                },
                body:JSON.stringify(item)
            });
        } else {
            item.count += 1;
            item.priceCard = item.count * parseFloat(item.price);
        }
        getCardProduct();
        sumCard();
        checkBasket();
    }
    product.appendChild(productImg);
    product.appendChild(productIsFor);
    product.appendChild(productDescrib);
    product.appendChild(productPrice);
    product.appendChild(add);
    listContainer.appendChild(product);
})

titleContainer.appendChild(h1);
titleContainer.appendChild(pi);
container.appendChild(titleContainer);
container.appendChild(listContainer);

let productContainer = document.createElement('div');
function getCardProduct() {
    productContainer.replaceChildren();
    cardArr ? cardArr.map((item) => {
        let product = document.createElement('div');
        let check = document.createElement('input');
        let img = document.createElement('img');
        let gender = document.createElement('p');
        let name = document.createElement('h3');
        let count = document.createElement('p');
        let price = document.createElement('p');
        let del = document.createElement('button');
        // innerHtml
        img.src = item.image;
        gender.innerText = item.for;
        name.innerText = item.describ;
        del.innerText = 'X'
        check.type = 'checkbox'
        check.checked = item.checked
        // check.checked = 'true' tnayini hamar
        // css
        img.style.height = '100%'
        product.style.height = '80px'
        product.style.display = 'flex'
        product.style.alignItems = 'center'
        product.style.justifyContent = 'center'
        product.style.border = '1px solid'
        price.innerText = item.priceCard

        // function
            del.addEventListener("click",delet);
            async function delet() {
                cardArr = cardArr.filter( (e) => item.id !== e.id  );
                await fetch(`https://6436c2f73e4d2b4a12db0a38.mockapi.io/Basket/${item.id}`,{
                    method:"DELETE"
                })
                getCardProduct();
                sumCard();
            }
            check.addEventListener("click",checks);
            async function checks(){
                item.checked ? item.checked = false : item.checked = true
            }

        // append

        product.appendChild(check);
        product.appendChild(img);
        product.appendChild(price);
        product.appendChild(count);
        product.appendChild(gender);
        product.appendChild(name);
        product.appendChild(del);
        productContainer.appendChild(product);
    }) : ''
}

function showCard() {
    let card = document.createElement('div');
    let curtain = document.createElement('div');
    let removeCard = document.createElement('button');
    let body = document.body;
    let delAllProduct = document.createElement('button')

    // function 
    removeCard.addEventListener('click', () => {
        body.removeChild(curtain);
        body.removeChild(card);
    })
    curtain.addEventListener('click', () => {
        body.removeChild(curtain);
        body.removeChild(card);
    })

    delAllProduct.addEventListener("click",delAllProductServer)
    function delAllProductServer(){
        cardArr.map((item) => {
            if(item.checked === true){
                fetch("https://6436c2f73e4d2b4a12db0a38.mockapi.io/Basket/"+item.id,{
                        method:"DELETE"
                })
            }
        })
            cardArr = cardArr.filter( (e) => e.checked !== true );
            getCardProduct();
            sumCard();
    }

    // inner
    delAllProduct.innerText = 'Delete';
    removeCard.innerText = 'X';

    // css
    removeCard.style.padding = '6px';
    removeCard.style.margin = '6px';
    removeCard.style.fontSize = '19px';

    curtain.style.width = '99vw';
    curtain.style.height = '100vh';
    curtain.style.background = 'rgba(0,0,0,0.5)';;
    curtain.style.position = 'absolute';
    curtain.style.top = '0px';
    curtain.style.left = '0px';

    card.style.width = '400px';
    card.style.height = '100vh';
    card.style.background = 'white';
    card.style.position = 'absolute';
    card.style.right = '0px';
    card.style.top = '0px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifyContent = 'start';
    card.style.alignItems = 'center';
    card.style.zIndex = '777';

    productContainer.style.border = '1px solid';
    productContainer.style.width = '90%';
    productContainer.style.height = '90%';
    productContainer.style.padding = '20px';

    sum.style.border = '1px solid';
    sum.style.fontSize = '20px';
    sum.style.width = '90%';
    sum.style.textAlign = 'center';

    body.appendChild(curtain);
    body.appendChild(card);
    card.appendChild(removeCard);
    card.appendChild(delAllProduct);
    card.appendChild(productContainer);
    card.appendChild(sum);
}
let sum = document.createElement('div');
function sumCard() {
    let g = cardArr.reduce((ac, item) => ac + parseFloat(item.priceCard), 0)
    sum.innerText = `${g}$`
}




















