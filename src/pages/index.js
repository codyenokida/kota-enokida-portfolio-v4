import React, { useState } from "react"

import { GlobalStyles } from "../global"
import { lightTheme, darkTheme } from "../theme"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import NavBar from "../components/NavBar/NavBar"
import SectionLayout from "../components/SectionLayout/SectionLayout"
import SkillsBox from "../components/SkillsBox/SkillsBox"
import ExperienceBox from "../components/ExperienceBox/ExperienceBox"
import ProjectBox from "../components/ProjectBox/ProjectBox"
import Footer from "../components/Footer/Footer"

import { Flex } from "rebass"
import { ThemeProvider } from "styled-components"

import codyenokidaImage from "../images/codyenokida-preview.png"
import dspuciImage from "../images/dspuci-preview.png"
// import kotaweatherImage from "../images/kotaweather-preview.png"
import pennyDAOImage from "../images/pennyDAO-preview.png"
import swifttipsImage from "../images/swifttips-preview.png"
import zoomiezImage from "../images/zoomiez-preview.png"

import "./index.css"

const IndexPage = () => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <NavBar onChange={() => toggleTheme()} />
      <SEO title="Kota Cody Enokida" />
      <Layout>
        <div style={{ marginTop: 100, marginBottom: 150 }}>
          <h1>
            Hey there!{" "}
            <span role="img" aria-label="emoji">
              🤙
            </span>
          </h1>
          <br />
          <h1>
            I’m <span>Kota Cody Enokida</span>, a software developer, hammock
            man, and an adventurer. 🖥 💤🌲
          </h1>
          <br />
          <h2>
            Let’s talk!{" "}
            <span role="img" aria-label="emoji">
              📩
            </span>{" "}
            <a
              href="mailto:codyenokida@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              codyenokida@gmail.com
            </a>
          </h2>
          <br />
        </div>
        {/* <Landing /> */}
        <SectionLayout title="ABOUT ME">
          <p>
            I’m recent graduate from{" "}
            <strong>University of California, Irvine</strong> with a Bachelors
            Degree in Computer Science. I have a passion for building awesome
            things on the web.
          </p>
          <br />
          <p>
            As a software engineer, I enjoy most closing the gap between
            technology and design. I focus mostly on frontend development;
            however I have skills across the full stack development cycle.
          </p>
          <br />
          <p>
            When I’m away from the computer screen, I enjoy playing the guitar,
            spending time with loved ones, and being outdoors
          </p>
        </SectionLayout>

        <SectionLayout title="SKILLS">
          <Flex flexWrap="wrap">
            <SkillsBox title="LANGUAGES">
              {[
                "JavaScript (ES6)",
                "TypeScript",
                "HTML",
                "CSS",
                "C#",
                "Python",
                "C/C++",
                "Java",
              ]}
            </SkillsBox>

            <SkillsBox title="FRAMEWORKS">
              {["React", "Node", "Express", ".NET", "Web3"]}
            </SkillsBox>

            <SkillsBox title="TOOLS">
              {[
                "Git",
                "Bash",
                "Postman",
                "MongoDB",
                "Unity",
                "MySQL",
                "PostgreSQL",
              ]}
            </SkillsBox>

            <SkillsBox title="DESIGN">
              {[
                "Figma",
                "Adobe XD",
                "Adobe Illustrator",
                "Adobe Photoshop",
                "Wireframing",
                "Prototyping",
              ]}
            </SkillsBox>
          </Flex>
        </SectionLayout>

        <SectionLayout title="EXPERIENCES">
          <ExperienceBox
            title="Coinbase"
            duration="Incoming"
            position="Software Engineer"
          />
          <ExperienceBox
            title="Beyond Limits AI"
            duration="Jun 2021 - Dec 2021"
            position="Software Engineering Intern"
          />
          <ExperienceBox
            title="AirSwap"
            duration="Jun 2021 - Nov 2021"
            position="Open Source Developer"
          />
          <ExperienceBox
            title="UCI Student Center & Event Services"
            duration="Dec 2020 - Present"
            position="Full Stack Web Developer"
          />
          <ExperienceBox
            title="Hack+"
            duration="Aug 2020 - Dec 2020"
            position="Software Engineering Intern"
          />
          <ExperienceBox
            title="XLsoft Corporation"
            duration="Jun 2019 - Aug 2020"
            position="Software Engineering Intern"
          />
          <ExperienceBox
            title="Softech & Associates, Inc."
            duration="Jun 2019 - Sep 2019"
            position="Software Engineering Intern"
          />
          <ExperienceBox
            title="Delta Sigma Pi"
            duration="Oct 2019 - Dec 2020"
            position="Director of Technology, Webmaster"
          />
          <ExperienceBox
            title="Management Information Student Society"
            duration="Oct 2019 - June 2020"
            position="Mentor"
          />
          <ExperienceBox
            title="Information & Computer Science Student Council"
            duration="Oct 2018 - Jun 2019"
            position="Event Coordinator"
          />
        </SectionLayout>

        <SectionLayout title="PROJECTS">
          <ProjectBox
            src={pennyDAOImage}
            title="PennyDAO"
            description="Paying off student debt through a PoC DAO built on Ethereum and DeFi."
            tech="React.js, Google Firebase, Web3.js, Blockchain, Ethereum"
            theme={theme}
            githubLink="https://github.com/PennyDAO/pennyDAO_official"
            webLink="https://pennydao.github.io/landing-page/"
          />
          <ProjectBox
            src={zoomiezImage}
            title="Zoomiez"
            description="Your go-to chrome extension for managing meetings on zoom."
            tech="React, Rollup"
            theme={theme}
            githubLink="https://github.com/codyenokida/zoomiez2.0"
            webLink="https://chrome.google.com/webstore/detail/zoomiez/lmjfjafdpknamhnhkillmnhdmnolgmjl"
          />
          <ProjectBox
            src={swifttipsImage}
            title="SwiftTips"
            description="A crowdsourced application to help developers learn new iOS technologies."
            tech="Gatsby.js, Apollo GraphQL, AWS AppSync, AWS S3"
            theme={theme}
            githubLink="https://github.com/beachead/SwiftTips.co"
            webLink="https://www.swifttips.co/"
          />
          <ProjectBox
            src={codyenokidaImage}
            title="codyenokida.com (v3)"
            description="Third iteration of my personal portfolio website. Showcases interests, experiences, and hobbies."
            tech="Gatsby.js, GraphQL"
            theme={theme}
            githubLink="https://github.com/codyenokida/kota-enokida-portfolio-v3"
            webLink="https://kotaenokida.netlify.com/"
          />
          <ProjectBox
            src={dspuciImage}
            title="dspuci.com"
            description="Website for Delta Sigma Pi, professional business fraternity showcasing brothers, careers, and professionalism."
            tech="Gatsby.js, GraphQL, Google Sheets API"
            theme={theme}
            githubLink="https://github.com/dspuci/dspuci-website-gatsby"
            webLink="http://www.dspuci.com/"
          />
        </SectionLayout>
      </Layout>

      <Footer />
    </ThemeProvider>
  )
}

export default IndexPage
