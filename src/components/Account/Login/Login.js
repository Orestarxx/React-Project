import React from 'react';

import css from './loginStyle.module.css'

const Login = () => {
    return (
        <div className={css.loginHolder}>
            <div className={css.loginBox}>
                <h2>Login</h2>
                <form className={css.loginForm}>
                    <div className={css.userBox}>
                        <input type="text" name="" required="" className={css.inputLog}/>
                        <label>Username</label>
                    </div>
                    <div className={css.userBox}>
                        <input type="password" name="" required="" className={css.inputLog}/>
                        <label>Password</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>

        </div>
    );
};

export {Login};