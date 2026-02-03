import React from 'react';
import Signup from './Signup'; // Importing the Unified Auth Component

const Login = () => {
    // Render the unified component in "login" mode
    return <Signup initialAuthMode="login" />;
};

export default Login;
