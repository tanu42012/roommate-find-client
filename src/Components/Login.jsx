import React, { use, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.init';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';


const Login = () => {
    const[user,setUser]=useState(null);
    const navigate=useNavigate();

    const{signIn}=use(AuthContext);
    const provider=new GoogleAuthProvider()
    const handleGoogleSignIn=()=>{
        console.log('google sing click')
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result.user);
            alert("User Login successfully")
           
            setUser(result.user);


        })
        .catch(error=>{
            console.log(error);

        })
    }

    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)


        signIn(email,password)
        .then(result=>{
            const user=result.user;
            
                           
            alert("Login sucessfully");
            navigate(`${location.state?location.state : "/"}`)
            
            console.log(user)
            
        })
        .catch((error)=>{
            const errorMessage=error.message;
            alert(errorMessage)
        })



    }
    
    return (
        <div>
         
           
                   
                    <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                        <div className="card-body">
                            <form onSubmit={handleLogin} className="fieldset">
                                <label className="label">Email</label>
                                <input type="email"
                                name='email' 
                                className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" 
                                name='password'
                                placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                            <p>New to This Site? Please <Link className='text-blue-600 underline' to='/auth/register'>Register</Link></p>
                        </div>
                        <NavLink to='/home' className='btn' onClick={handleGoogleSignIn} ><FcGoogle />Sign In With Google</NavLink>
                    </div>
                </div>
        
    );
};

export default Login;