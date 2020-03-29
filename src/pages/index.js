import React, { useState } from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import NavBar from "../components/NavBar/NavBar"
import SectionLayout from "../components/SectionLayout/SectionLayout"

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
          <div style={{marginTop: 100}}>
            <h1>Hey there! 🤙</h1>
            <br/>
            <h1>I’m <span>Kota Enokida</span>, an aspiring front-end developer focused on delivering beautiful interfaces & experiences 🖥</h1>
            <br/>
            <h2>Let’s talk! 📩 <a>codyenokida@gmail.com</a></h2>
            <br/>
          </div>
          <SectionLayout title="ABOUT ME">
            <p>
            I’m currently a 2nd year at the University of California, Irvine pursuing a degree in computer science and digital arts. I have a passion for building awesome things on the web. 
            </p>
            <br/>
            <p>
            As a software engineer, I enjoy most closing the gap between technology and design. I like to combine my technical expertise with my eye for design to create beautiful products that are engaging and pleasant for the user.
            </p>
            <br/>
            <p>
            When I’m away from the computer screen, I enjoy playing the guitar, spending time with loved ones, and being outdoors 🏔
            </p>
          </SectionLayout>

          <SectionLayout title="SKILLS">

          </SectionLayout>
          
          <SectionLayout title="EXPERIENCES">
    
          </SectionLayout>

          <SectionLayout title="PROJECTS">
    
          </SectionLayout>
        </Layout>

      </ThemeProvider> 
  );
}

export default IndexPage
