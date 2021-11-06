import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <div className="login-section">
                <h1 className="mt-5">Please Login to BD Travel</h1>
                <button className="GoogleSignInBtn px-4 py-2" onClick={signInUsingGoogle}>Google Sign In</button>
                <div>
                    <img src="https://i.ibb.co/RBw0tFD/Access-control-system-abstract-concept-vector-illustration-Security-system-authorize-entry-login-cre.jpg" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Login;