async function toСomeIn() {
    let result = await fetch("https://6436c2f73e4d2b4a12db0a38.mockapi.io/user").then(v=>v.json());

    result.map( (item) => {
        if (item.login === login.value && item.password === password.value) {
            async function post() {
                
                await fetch("https://6436c2f73e4d2b4a12db0a38.mockapi.io/account",{
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json;charset=utf-8'
                        
                    },
                    body:JSON.stringify(item)
                })
                location.assign("account.html");
            }post();
        }
    } )
}