import React from 'react';
import {Header} from "../components/Header/Header";
import {Outlet} from 'react-router-dom'
import styled,{ThemeProvider} from "styled-components";
import {useState} from "react";


import {KeyBoard} from "../components/KeyBoard/KeyBoard";
import css from './mainStyle.module.css'
import {lightTheme,darkTheme,GlobalStyles} from '../darkMode/theme'
const StyledApp = styled.div``

const MainLayOut = () => {
    const [theme,setTheme] = useState('light')
    const themeToggler = () =>{
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <StyledApp>
        <div className={css.main}>
            <div className={css.keyboard}>
                <button onClick={() =>themeToggler()} className={css.themeSwitcher}>Switch</button>
                <KeyBoard/>
                <div></div>
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
            </StyledApp>
        </ThemeProvider>

    );
};

export {MainLayOut};