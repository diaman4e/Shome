async function registr() {
    let login = document.getElementById("login");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let obj = {
        login:login.value,
        email:email.value,
        password:password.value,
        basket:[]
    };

        await fetch("https://6436c2f73e4d2b4a12db0a38.mockapi.io/user",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },
            body:JSON.stringify(obj)
        })
        login.value = ''
        email.value = ''
        password.value = ''
    }

