const router = require('express').Router();
const path = require('path');
const blogApi = require('./api/blogPostApi.js');
const userPassApi = require('./api/usernameAndPasswords.js');
const signUp = require('./sign-up-controller.js');
const signIn = require('./sign-in-controller.js');

router.use('/blogPostApi', blogApi);
router.use('/usernameAndPasswords', userPassApi);
router.use('/sign-up-controller', signUp);
router.use('/sign-in-controller', signIn);

//TO DO: MAKE THIS ROUTE ACCESS THE INFORMATION FROM THE PERSONAL TABLE
// MAKE TABLE WITH ID, TEXT, AUTHOR. AUTHOR WILL BE ID THAT WILL LINK TO A USER INSIDE TABLE. 
//WHEN YOU LOG IN YOUR SERVER WILL SEND BACK AUTHENTICATE CORRECT, LOGIN NAME ETC
//SERVER WILL GIVE USER ID
//WHEN CLICKING SAVE, IT WILL SEND USER ID AND POST TO SERVER <- MAKE SOMETHING THAT DOES THAT
//MAYBE LOCAL OR SESSION STORAGE?? 
//MAKE SCRIPT FOR GET USER ID

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../index.html"));
    
});

router.get("/sign-in", function(req,res){
    res.sendFile(path.join(__dirname,"../sign-in.html"));
})

router.get("/sign-up", function(req,res){
    res.sendFile(path.join(__dirname,"../sign-up.html"));
})
router.get("/dashboard", function(req,res){
    res.sendFile(path.join(__dirname,"../dashboard.html"));
    //TO DO: Path redirect inside this function to prevent user from accessing if not signed in.
})



module.exports = router;
