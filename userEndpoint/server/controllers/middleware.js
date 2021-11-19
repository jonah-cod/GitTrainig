const validatePasswords = (req, res, next)=>{
    let pass = req.body.password;
    let cPass = req.body.cPassword;
    let errors = [];
    console.log(req.body);
    if(pass&&cPass&&pass===cPass){
        if (pass.length<8) {
            errors.push('Password should be atleast 8 characters long')
        }
        if (!/[0-9]/.test(pass)) {
            errors.push('Password should include numbers!')
        }
        if (!/[a-z]/.test(pass)) {
            errors.push('Password should include atleast one small letter')
        }
        if(!/[A-Z]/.test(pass)){
            errors.push('Password should include atleast one caps letter')
        }
        if (!/[^A-Za-z0-9]/g.test(pass)) {
            errors.push('Password should include atleast one special character')
        }
    }else{
        errors.push('Passwords should match')
    }

    if(errors.length){
        res.send(errors.join('\n'));
    }else{
        next();
    }
}


module.exports ={ validatePasswords}