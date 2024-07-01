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


module.exports = router;