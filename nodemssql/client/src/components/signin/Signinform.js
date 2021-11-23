import React, { useState }from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Signinform = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    
    const handleLogin = async (e)=>{
        e.preventDefault();
        console.log(email, password);

     await axios.post('http://localhost:3000/users/login', {
         email:email,
         password:password
     }).then((res)=>{
        let responce = res.data;
        if (responce) {
            alert(responce);
        }
     })
    }
    return (
        <div className="signInForm">
            <h1>Log in</h1>
            <form action="" className="form" onSubmit={handleLogin}>
                <input type="email" placeholder="username" value={email} onChange={(e)=> setemail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=> setpassword(e.target.value)}/>
                <button>log in</button>
                <p>Don't have an account? <Link to="/sign-up">Sign up instead</Link></p>
            </form>
        </div>
    )
}

export default Signinform
