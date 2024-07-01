const signInForm = document.getElementById("sign-in-form")
const loginButton = document.getElementById("submit")
const loginErrorMsg = document.getElementById("login-error")

console.log(loginButton);

loginButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log(signInForm.password);
    const username = signInForm.username.value;
    const password = signInForm.password.value;

    //TO DO: UPDATE USER AND WEV_DEV TO TABLE INPUTS VIA JSON
    if(username === "user" && password === "web_dev"){
        alert("You have successfully logged in.");
        location.replace("dashboard.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})


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
        fetch(  "../Controller/usernameAndPasswords'", {
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

