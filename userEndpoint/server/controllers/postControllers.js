const jwt = require('jsonwebtoken');
require('dotenv').config();
const {encrypt, validateUser} = require('./encryption');
const {saveUser}= require('../models/dbQueries')

const registerUser = async(req, res)=>{
    let user = {
        fName: `${req.body.fName} ${req.body.sName}`,
        username: req.body.email,
        pass: await encrypt(req.body.password)

    }

    saveUser(user)
res.json(user.pass)
}

async function authenticateUser (req, res){
    let reqData = req.body;
    let authedUser = await validateUser(reqData);
    if (authedUser) {
        //create an access token
        let secretKey = process.env.JWT_SECRET_KEY;
        let token = jwt.sign(reqData, secretKey)
        //end

        res.status(200).send(`Login successful! The access token is: ${token}`)
    }else if(authedUser == false){
        res.status(401).send('Access denied! Check your credentials')
    }else{
        res.status(404).send('No user found!')
    }
}

module.exports = {registerUser, authenticateUser}