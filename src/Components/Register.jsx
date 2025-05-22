import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { auth } from '../firebase.init';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const {createUser,setUser}=use(AuthContext);
    const [error, setError]=useState(true);
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
    

    
    

    const handleRegister=e=>{

        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo=e.target.photo.value;
        const password=e.target.password.value;
        console.log(name,email,photo,password);
        const passwordExp =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if(passwordExp.test(password)===false){
          setError("password must have one lower case,one upper case,one degit and 8 character or longer.")
         
          return;
    
        }
        else{
          setError('')
        }

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            alert('Register Successfully')
            // console.log(user)
            setUser(user);
        })
        .catch((error)=>{
            const errorMessage=error.message;
            alert(errorMessage);
        })


        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })


    }
    return (
        <div>
            <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-4xl font-bold">Register now!</h1>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name'
                        required
                         className="input" placeholder="Your Name" />
                        <label className="label">Email</label>
                        <input type="email"
                        required
                        
                        name='email' className="input" placeholder="Email" />
                        <label className="label">Photo URL</label>
                        <input type="text" 
                          required
                        name='photo' className="input" placeholder="Photo URL" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input"
                         pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          required
                          title="password must have one lower case,one upper case,one degit and 8 character or longer."
                        placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p>Already Have an Account? Please <Link className='text-blue-600 underline' to='/auth/login'>Login</Link></p>
                </div>
                <NavLink to='/home' className='btn' onClick={handleGoogleSignIn} ><FcGoogle />Sign In With Google</NavLink >
                
            </div>
        </div>
    );
};

export default Register;