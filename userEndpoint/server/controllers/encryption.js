const bcrypt = require ('bcrypt');
const {authUser} = require('../models/dbQueries')

const encrypt = async(pass)=>{
    let encryptedPass = await bcrypt.hash(pass, 10);
    return encryptedPass
}


const validateUser = async({email, password})=>{
    let {recordset} = await authUser(email);
    if (recordset.length != 0) {
        let authenticated = await bcrypt.compare(password, recordset[0].pass);
    return authenticated;
    }else{
        return undefined;
    }
    
}

module.exports = {encrypt, validateUser}