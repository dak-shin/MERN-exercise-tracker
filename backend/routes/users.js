//const { response } = require('express');
const express = require('express');
const router = express.Router();

const user = require('../models/user.model');

router.get('/',(req, res) =>{

    user.find()
    .then(users => res.json(users))
    .catch(error => res.status(400).json('Error : '+error));
});

router.post('/add',(req, res) =>{

    const username = req.body.username;

    const newUser = new user({username});

    newUser.save()
    .then(()=>{res.json('New user added')})
    .catch(error => res.status(400).json('Error : '+error));

})

module.exports = router;