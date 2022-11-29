import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user, loaging} = useContext(authContext);
    const location = useLocation();

    if(loaging){
        return <p>Loading...</p>
    }

    if(user?.email){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivetRoute;