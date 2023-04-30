// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;