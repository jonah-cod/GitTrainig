import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const Signupform = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(email, name, password, cpassword);
        await axios.post('http://localhost:3000/users/sign_up', {
            name:name,
            email:email,
            password:password,
            cPassword:cpassword
        }).then((res)=>{
            let responce = res.data;
            if(responce){
                alert(responce)
            }
        })

    }
    return (
        <div className="signUpForm">
            <h1>Sign Up</h1>
            <form action="" className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="full names" value={name} onChange={(e)=> setname(e.target.value)}/>
                <input type="email" placeholder="email" value={email} onChange={(e)=> setemail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=> setpassword(e.target.value)}/>
                <input type="password" placeholder="confirm password" value={cpassword} onChange={(e)=> setcpassword(e.target.value)}/>
                <button>sign up</button>
                <p>Have an account? <Link to="/sign-in">Login instead</Link></p>
            </form>
        </div>
    )
}

export default Signupform
