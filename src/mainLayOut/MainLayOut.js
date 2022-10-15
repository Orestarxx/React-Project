import React from 'react';
import {Header} from "../components/Header/Header";
import {Outlet} from 'react-router-dom'
import {KeyBoard} from "../components/KeyBoard/KeyBoard";
import css from './mainStyle.module.css'

const MainLayOut = () => {
    return (
        <div className={css.main}>
            <div className={css.keyboard}>
                <KeyBoard/>
            </div>
            <div className={css.holder}>
                <div className={css.left}>
                    <Header/>
                </div>
                <div className={css.right}>
                    <Outlet/>
                </div>

            </div>
        </div>
    );
};

export {MainLayOut};