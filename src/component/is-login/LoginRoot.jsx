import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const LoginRoot = ({
    isAllowed, 
    redirectTo = '/job-list',
    children,
}) => {
    if ( isAllowed ) {
        return <Navigate to={redirectTo} />
    }
    return (
        <>
            {
                !isAllowed ? children : <Outlet/>
            }
        </>
    );
}

export default LoginRoot;
