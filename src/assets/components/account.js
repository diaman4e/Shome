let data;
async function name(){
    // let img = document.getElementById("img");
    let imgBox = document.getElementById("imgBox");
    let name = document.getElementById("name");
    let email = document.getElementById("email");

    let data =  await fetch("https://6436c2f73e4d2b4a12db0a38.mockapi.io/account").then(res => res.json());
    console.log(data);
    
    // css
    imgBox.style.width = imgBox.style.height = "150px"
    imgBox.style.backgroundColor = "lightblue"
    imgBox.style.display = "flex"
    imgBox.style.justifyContent = "center"
    imgBox.style.alignItems = "center"
    imgBox.style.fontSize = "40px"



    imgBox.innerText = `${data[0].login[0]} ${data[0].login[0]}`
    name.innerText = data[0].login
    email.innerText = data[0].email
    
    
    
}name()
async function exit() {
    await fetch('https://6436c2f73e4d2b4a12db0a38.mockapi.io/account/1', {
        method: 'DELETE',
      })
      location.href = "login.html"
    }

