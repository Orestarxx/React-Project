import React from 'react';

import'./RegisterStyle.css'

const Register = () => {
    return (
        <div>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className="registerForm">
                <h3>Register Here</h3>

                <label htmlFor="username" className="registerLabel">Username</label>
                <input type="text" placeholder="username" id="username" className="registerInp"/>

                <label htmlFor="password" className="registerLabel">Email</label>
                <input type="password" placeholder="email" id="password" className="registerInp"/>
                <label htmlFor="password" className="registerLabel">Password</label>
                <input type="password" placeholder="Password" id="password" className="registerInp"/>
                <label htmlFor="password" className="registerLabel"> Confirm Password</label>
                <input type="password" placeholder="Password" id="password" className="registerInp"/>

                <button className="registerButt">Register</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i> Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i> Facebook</div>
                </div>
            </form>

        </div>
    );
};

export {Register};