const express = require("express");
const { ConnectionStates } = require("mongoose");
const auth = require("./authenticateuser")



const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.get('/', (req, res)=>{
    res.send('Welcome home')
})


//user registration middleware
const authendicate = (req, res, next)=>{
    let error = {password:[]}
    let name = req.body.name
    let email = req.body.email
    let passwod= req.body.password;
    let c_password = req.body.password_confirm;
    
    if (passwod !== c_password && passwod.length>=8) {
        // console.log(password, c_password)
        error.password.push("passwords should match")
    }else{
        if (!/\d/.test(req.body.password)) {
        error.password.push("password should contain numbers");
        }
        if (!/[A-Z]/.test(req.body.password)) {
            error.password.push("password should contain a capital letter")   }
        if (!/[a-z]/.test(req.body.password)) {
            error.password.push("password should contain a small letter")   }
        console.log(error.password.length);
    
    }
    

    if (!error.password.length) {
                
        let user = {
            _id: email,
            name,
            password: ""
        }
        auth.genHash(passwod, user)
        //console.log(user)
        next();
        

    }else{
        
        res.send((error.password).join("\n"))
    }

    
}


//user login verification

async function userLogin(req, res, next) {
    
    let username = req.body.email;
    console.log(username)
    let pass = req.body.password;
    const isvalid = await auth.login(username, pass);
    //console.log(isvalid)
    if(isvalid){
        next();
    }else{
        res.send("Check your email and password!")
    }
}


app.post('/sign_up', authendicate, (req, res, user)=>{
    res.send("data received")
    
})

app.post("/login", userLogin, (req, res)=>{
    res.send("Successfully logged in")
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server running at port:${PORT}`)
})