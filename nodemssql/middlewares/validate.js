const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { saveUser, getUser } = require('../db/dbQueries')

//#region middleware validating the passwords
async function validate (req, res, next){
    let errors = []
    let pass = req.body.password;
    let cpass = req.body.cPassword;
    if(pass === cpass && pass.length>=8){
        if (!/\d/.test(pass)){
            errors.push('passwords should contain a number')
        }
        if (!/[a-z]/.test(pass)) {
            errors.push('password should contain small letters')
        }
        if (!/[A-Z]/.test(pass)) {
            errors.push('password should contain capital letters')
        }
    }else{
        errors.push('passwords should match and contain atleast 8 chacters')
    }

    if (errors.length) {
        res.send(errors.join('\n'))
    }else{        
        next();
    }
}


//#region  encrypting the password
async function encrypt(pass) {
    return await bcrypt.hash(pass, 10)
}

//#region selecting a user and authendicating

async function auth(data) {
    let {username, pass} = data
    try {
        let {recordset} = await getUser(username)
    
        if(recordset){
        return await bcrypt.compare(pass, recordset[0].pass)
    }
    } catch (error) {
        console.log(error.message)
    }
    
}

module.exports = {validate, auth, encrypt}