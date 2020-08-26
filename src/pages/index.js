import React, { useState } from "react"

import { GlobalStyles } from '../global';
import { lightTheme, darkTheme } from '../theme';

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import NavBar from "../components/NavBar/NavBar"
import SectionLayout from "../components/SectionLayout/SectionLayout"
import SkillsBox from "../components/SkillsBox/SkillsBox"
import ExperienceBox from "../components/ExperienceBox/ExperienceBox"
import ProjectBox from "../components/ProjectBox/ProjectBox"
import Footer from "../components/Footer/Footer"

import { Flex } from "rebass"
import { ThemeProvider } from 'styled-components';

import codyenokidaImage from "../images/codyenokida-preview.png"
import dspuciImage from "../images/dspuci-preview.png"
import kotaweatherImage from "../images/kotaweather-preview.png"
import swifttipsImage from "../images/swifttips-preview.png"

import "./index.css";

const IndexPage = () => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return(
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <NavBar onChange={toggleTheme}/>
        <SEO title="Kota Cody Enokida" />
        <Layout>
          <div style={{marginTop: 100, marginBottom: 150,}}>
            <h1>Hey there! <span role="img" aria-label="emoji">🤙</span></h1>
            <br/>
            <h1>I’m <span>Kota Enokida</span>, an aspiring software developer focused on delivering beautiful interfaces & user experiences 🖥</h1>
            <br/>
            <h2>Let’s talk! <span role="img" aria-label="emoji">📩</span> <a href="mailto:codyenokida@gmail.com" target="_blank" rel="noopener noreferrer">codyenokida@gmail.com</a></h2>
            <br/>
          </div>
          {/* <Landing /> */}
          <SectionLayout title="ABOUT ME">
            <p>
            I’m an incoming 3rd year at the <span>University of California, Irvine</span> pursuing a degree in computer science. I have a passion for building awesome things on the web. 
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
            <Flex flexWrap="wrap">

              <SkillsBox 
                title="LANGUAGES">
                  {['Javascript (ES6)', 'HTML', 'CSS/SCSS', 'Python', 'C/C++', 'Java']}
              </SkillsBox>

              <SkillsBox 
                title="FRAMEWORKS">
                  {['React', 'Angular', 'Node', 'Express', 'Wordpress']}
              </SkillsBox>

              <SkillsBox 
                title="TOOLS">
                  {['Git & Github', 'Bash', 'Postman', 'MongoDB', 'Hadoop', 'Unity', 'mySQL']}
              </SkillsBox>

              <SkillsBox 
                title="DESIGN">
                  {['Figma', 'Adobe XD', 'Adobe Illustrator', 'Adobe Photoshop', 'Wireframing', 'Prototyping']}
              </SkillsBox>
            </Flex>
          </SectionLayout>
          
          <SectionLayout title="EXPERIENCES">
            <ExperienceBox
              title="Hack+"
              duration="Aug 2020 - Present"
              position="Software Engineering Intern" />
            <ExperienceBox
              title="XLsoft Corporation"
              duration="Jun 2019 - Aug 2020"
              position="Software Engineering Intern" />
            <ExperienceBox
              title="Softech & Associates, Inc."
              duration="Jun 2019 - Sep 2019"
              position="Software Engineering Intern" />
            <ExperienceBox
              title="Delta Sigma Pi"
              duration="Oct 2019 - Present"
              position="Director of Technology, Webmaster" />
            <ExperienceBox
              title="Management Information Student Society"
              duration="Oct 2019 - June 2020"
              position="Mentor" />
            <ExperienceBox
              title="Information & Computer Science Student Council"
              duration="Oct 2018 - Jun 2019"
              position="Event Coordinator" />
          </SectionLayout>

          <SectionLayout title="PROJECTS">
            <ProjectBox 
              src={swifttipsImage} 
              title="SwiftTips" 
              description="A crowdsourced application to help developers learn new iOS technologies." 
              tech="Gatsby.js, Apollo GraphQL, AWS AppSync, AWS S3" 
              theme={theme}
              githubLink="https://github.com/beachead/SwiftTips.co"
              webLink="https://www.swifttips.co/"/>
            <ProjectBox 
              src={codyenokidaImage} 
              title="codyenokida.com (v3)" 
              description="Third iteration of my personal portfolio website. Showcases interests, experiences, and hobbies." 
              tech="Gatsby.js, GraphQL" 
              theme={theme}
              githubLink="https://github.com/codyenokida/kota-enokida-portfolio-v3"
              webLink="https://kotaenokida.netlify.com/"/>
            <ProjectBox 
              src={dspuciImage} 
              title="dspuci.com" 
              description="Website for Delta Sigma Pi, professional business fraternity showcasing brothers, careers, and professionalism." 
              tech="Gatsby.js, GraphQL, Google Sheets API" 
              theme={theme}
              githubLink="https://github.com/dspuci/dspuci-website-gatsby"
              webLink="http://www.dspuci.com/"/>
            <ProjectBox 
              src={kotaweatherImage} 
              title="kotaweather.heroku.com" 
              description="Website that showcases weather highlights from zipcode." 
              tech="React.js, node.js, express, openweatherapi" 
              theme={theme}
              githubLink="https://github.com/codyenokida/weather-application-v2"
              webLink="https://kotaweather.herokuapp.com/"/>
          </SectionLayout>

        </Layout>

        <Footer />

      </ThemeProvider> 
  );
}

export default IndexPage
