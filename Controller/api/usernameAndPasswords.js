const express = require('express');
const router = require('express').Router();
const userPass = require('../../Modals/userPass.js')

//Sign-In

router.post('/processSignIn', async (req,res) => {
    try {
        console.log(req.body)
    } catch (err) {
        res.status(400).json(err);
    }
})

//Sign-Up
router.post('/processSignUp', async (req,res) =>{
    try{
        console.log(req.body);
        var jsonPost = json.parse(req.body);
        userPass.create(`{username: '${jsonPost.username}', password: '${jsonPost.password}'}`);
        res.status(204).end();
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;