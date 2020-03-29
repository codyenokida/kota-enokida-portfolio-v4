import React, { useState } from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import NavBar from "../components/NavBar/NavBar"

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';


const IndexPage = () => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return(
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <NavBar onChange={toggleTheme}/>
        <SEO title="Home" />

        <Layout>
          <h1>Hey there! 🤙</h1>
          <br/>
          <h1>I’m <span>Kota Enokida</span>, an aspiring front-end developer focused on delivering beautiful interfaces & experiences 🖥</h1>
          <br/>
          <h2>Let’s talk! 📩 <a>codyenokida@gmail.com</a></h2>
        </Layout>

      </ThemeProvider> 
  );
}

export default IndexPage
