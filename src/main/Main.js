import React from 'react';
import {Outlet} from 'react-router-dom'
import styled,{ThemeProvider} from "styled-components";
import {useState} from "react";

import {Header} from "../components/Header/Header";
import css from './mainStyle.module.css'
import {lightTheme,darkTheme,GlobalStyles} from '../darkMode/theme'
import {Searcher} from "../components/Searcher/Searcher";


const StyledApp = styled.div``

const Main = () => {
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

                <label className={css.switch} >
                    <input type="checkbox" onClick={() =>themeToggler()}/>
                    <span className={css.slider}></span>
                </label>
                <Searcher/>
                <div className={css.avatarHolder}>
                    <img src="https://yt3.ggpht.com/a/AATXAJz53i2G4CjMkuxp3RNCNAdOLG47wglRcalsuQ=s900-c-k-c0xffffffff-no-rj-mo" alt="" className={css.avatar}/><b>Login</b>
                </div>
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

export {Main};