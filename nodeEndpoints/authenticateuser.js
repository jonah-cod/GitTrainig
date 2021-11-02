const bcrypt = require("bcrypt")
const Usermodel = require("./data")

 function genHash(pass, user) {
    
    bcrypt.hash(pass, 3, (err, has)=>{
        
        user = {...user, password:has}
        let newUser = new Usermodel.User(user)
        newUser.save((err, doc)=>{
            if(err) return console.log(err);
            console.log("data saved")

        });
        
        
    });
    
    
}

 const  login = async (username, pass)=>{
     try {
        const foundUser = await Usermodel.User.findOne({_id: username})
        console.log(foundUser);
        if(!foundUser) return false;

        const authenticated= await bcrypt.compare(pass, foundUser.password);
        
        return authenticated
    } catch (error) {
        console.log(error)
    }
    
}


module.exports = {genHash, login};