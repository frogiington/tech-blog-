

//TO DO: Update structure to include app.get && also build an API

if(username === "user" && password === "web_dev"){
    alert("You have successfully logged in.");
    location.replace("dashboard.html");
} else {
    loginErrorMsg.style.opacity = 1;
}
