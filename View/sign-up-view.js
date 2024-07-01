//TO DO: Take data from sign up and update table

function userPassInfo(username, password){
    this.username = username;
    this.password = password;
}

var submit = document.getElementById("submit");
submit.addEventListener("click", onSubmit)

function onSubmit(){
    var signInData = new userPassInfo();
    signInData.username = document.getElementById("username").value;
    signInData.password = document.getElementById("password").value;

    try{
        fetch( window.location.origin +  "/sign-up-controller/confirmation" , {
            method: 'POST',
            body: JSON.stringify(signInData),
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then((response) =>{console.log(response)
        }).catch((error) =>{console.log(error)})
    }
    catch(error){
        console.log(error)
    }
}
