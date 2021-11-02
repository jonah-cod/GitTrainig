const express = require("express")
const auth = require("./authenticateuser")



const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.get('/', (req, res)=>{
    res.send('Welcome home')
})



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
        //console.log(genHash(password));
        
        let user = {
            _id: email,
            name,
            password: ""
        }
        auth.genHash(passwod, user)
        //console.log(user)
        next(user);
        

    }else{
        
        res.send((error.password).join("\n"))
    }
    
}

function userLogin(req, res, next) {
    let username = req.body.email;
    let pass = req.body.password;
    console.log(auth.login(username, pass))

    if(auth.login(username, pass)){
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



const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`Server running at port:${PORT}`)
})