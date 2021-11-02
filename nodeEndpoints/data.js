const mongoose = require("mongoose") 



mongoose.connect("mongodb://127.0.0.1:27017/usersDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
    console.log("db connected successfully");

}).catch(err=>{
    console.log("couldn't connect to the database")
})

const UserSchema = new mongoose.Schema({
    _id: {type:String,
            required:true},
    name: {type:String,
            required:true},
    
    password: {type:String,
            required:true}
})

const User = new mongoose.model("user", UserSchema);



module.exports = {User};