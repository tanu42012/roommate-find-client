import React, { use } from 'react';

import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoute2 = ( {children}) => {
    const {user,loading}=use(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    console.log(user);
    if(user && user?.email){
        return children;
    }
    return <Navigate to="/auth/login"></Navigate>
};

export default PrivateRoute2;