import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../firebase.init';

const Register = () => {
    const handleRegister=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo=e.target.photo.value;
        const password=e.target.password.value;
        console.log(name,email,photo,password);


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
                        <input type="text" name='name' className="input" placeholder="Your Name" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p>Already Have an Account? Please <Link className='text-blue-600 underline' to='/auth/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;