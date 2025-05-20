import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
         
           
                   
                    <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                        <div className="card-body">
                            <form className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                            <p>New to This Site? Please <Link className='text-blue-600 underline' to='/auth/register'>Register</Link></p>
                        </div>
                    </div>
                </div>
        
    );
};

export default Login;