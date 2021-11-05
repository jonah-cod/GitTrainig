const express = require('express');
const {validate, encrypt, auth} = require('../middlewares/validate')
const { saveUser, updateUser} = require('../db/dbQueries')

let router = express.Router();

router.post('/sign_in', validate, async( req, res )=>{
   let pass = req.body.password
   let data = {
    firstName: req.body.fName,
    secondName: req.body.sName,
    projectName: req.body.pName,
    username: req.body.email,
    pass: await encrypt(pass)
}

    try {
        await saveUser(data)
        
    } catch (error) {
        console.log(error.message)
    }
    
    res.send('received data')
    
})

router.post('/login', async(req, res)=>{
    let data = {
        username: req.body.email,
        pass: req.body.password
    }
    let authed = await auth(data)
    if(authed){
        res.send('user logged in successfully')
    }else{
        res.send('wrong credentials please try again')
    }

})

router.put('/update', async(req, res)=>{
    let data = req.body
    console.log(data);
    try {
        await updateUser(data)
        res.send('user details updated successfully')
        console.log('user details updated successfully')
        
        
    } catch (error) {
        console.log(error.message)
    }
})

router.delete('/delete', async (req, res)=>{
    let id = req.body.email;
})

module.exports = router;