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