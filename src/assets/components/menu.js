let navigationConatiner = document.getElementById("navigationConatiner");
navigationConatiner.style.width = "100%";
navigationConatiner.style.height = "50px";
navigationConatiner.style.display = "flex";
navigationConatiner.style.justifyContent = "center";
navigationConatiner.style.alignItems = "center";
navigationConatiner.style.backgroundColor = "#eb3e32";
navigationConatiner.style.marginTop = "20px";
navigationConatiner.style.borderRadius = "8px 8px 0px 0px";

const navigation = [
  {
    name: "ABOUT",
    optionPages: ["Home one", "Home Two"],
  },
  {
    name: "PAGES",
    optionPages: ["Account", "Login", "Registr", "Page Not Found"],
  },
  {
    name: "SHOP",
    optionPages: ["Shop Loyout", "Shop 3 Column", "Shop 4 Column", "Shop left Sidebar", "Shop right Sidebar"],
  },
  {
    name: "BLOG",
  },
  {
    name: "CONTACT",
  },
];

navigation.map((item) => {
  let option = document.createElement("ul");
  let navigationOptionControl = document.createElement("li");
  let containerOptionList = document.createElement("ul");
  let containerOption = document.createElement("li");
  let navigationOption = document.createElement("a");
  navigationOption.innerText = item.name;

  //   css
  navigationOptionControl.style.position = "relative";
  navigationOptionControl.style.display = "inline-block";

  navigationOption.style.padding = "10px";
  navigationOption.style.fontSize = "20px";
  navigationOption.style.color = '#fffc';

  containerOptionList.style.position = "absolute";
  containerOptionList.style.zIndex = "999";
  containerOptionList.style.display = "flex";
  containerOptionList.style.flexDirection = "column";
  containerOptionList.style.background = "white";
  containerOptionList.style.display = 'none';


  //   function
  if ("optionPages" in item) {
    item.optionPages.map((item) => {
      let option2 = document.createElement("a");
      let box = document.createElement("li");

      box.style.borderBottom = '1px  solid grey'
      box.style.padding = '10px'
      option2.innerText = item;
      option2.style.display = "block";
      option2.style.color = "black"
      box.appendChild(option2);
      containerOption.appendChild(box);
      navigationOption.addEventListener("mouseenter", hover);
      navigationOption.addEventListener("mouseleave", leaveHover);

      console.log(item);
      if(location.href === "file:///C:/Users/LENOVO/Desktop/Shome/src/assets/page/login.html" 
      || location.href === "file:///C:/Users/LENOVO/Desktop/Shome/src/assets/page/registr.html"
      || location.href === "file:///C:/Users/LENOVO/Desktop/Shome/src/assets/page/account.html"
      ){
          
          console.log(location);
          switch (item) {
            case "Home one":
              option2.href = "../../homeOne.html"
              break;
        case "Registr":
          option2.href = "registr.html"
          break;
        case "Login":
          option2.href = "login.html"
          break;
          case "Account":
            async function ifAc(params) {
              let acData = await fetch("https://6436c2f73e4d2b4a12db0a38.mockapi.io/account").then(res => res.json());

              if (acData.length > 0) {
                option2.href = "account.html"
              }else{
                option2.href = "login.html"
              }
            }
            ifAc()
            
          break;
      }
      
      }
      console.log(location.href);
      if(location.href === "file:///C:/Users/LENOVO/Desktop/Shome/src/homeOne.html"){
      switch (item) {
        case "Registr":
          option2.href = "assets/page/registr.html"
          break;
        case "Login":
          option2.href = "assets/page/login.html"
          break;
          case "Account":
          option2.href = "assets/page/account.html"
          break;
      }
    }

      function hover() {
        containerOptionList.style.display = "block";
        containerOptionList.style.top = "30px";
      }
      function change() {
        box.style.background = "black"
        box.style.color = "#ffffff"
        option2.style.color = "white"
      }
      function changeLeave() {
        box.style.background = "#ffffff"
        box.style.color = "black"
        option2.style.color = "black"
      }
      box.addEventListener("mouseenter", hover);
      box.addEventListener("mouseenter", change);
      box.addEventListener("mouseleave", leaveHover);
      box.addEventListener("mouseleave", changeLeave);

      function leaveHover() {
        containerOptionList.style.display = "none"
      }

    });
  }

  // append

  containerOptionList.appendChild(containerOption);
  navigationOptionControl.appendChild(navigationOption);
  navigationOptionControl.appendChild(containerOptionList);
  option.appendChild(navigationOptionControl);
  navigationConatiner.appendChild(option);
});
