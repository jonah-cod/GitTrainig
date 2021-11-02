const bcrypt = require("bcrypt")
const Usermodel = require("./data")

function genHash(pass, user) {
    
    let hash = bcrypt.hash(pass, 3, (err, hash)=>{
        
        user = {...user, password:hash}
        let newUser = new Usermodel.User(user)
        newUser.save((err, doc)=>{
            if(err) return console.log(err);
            console.log("data saved")

        });
        
        
    });
    
    
}

function login (username, pass){
    
    Usermodel.User.findOne({email: username}, (err, data)=>{
        
        let authendicated=bcrypt.compare(pass, data.password).then((err, data)=>{
            return true
        })
        
    })
    
}


module.exports = {genHash, login};