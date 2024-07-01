const bcrypt = require('bcrypt');
const router = require('express').Router();


//Password confirmation
function validatePassword(password, confirm){
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;

    if (password = confirm){
        return true;
    }
    else{
        alert('Passwords must match.')
        return false;
    }
}

router.post('/confirmation', async (req, res) => {
    try{
        var passConfirm = json.parse(req.body);
        console.log(passConfirm);
        //validatePassword(password, confirm)
    } catch (err){
        res.status(400).json(err);
    }
})


module.exports = router;