import React from 'react'

import { Image, Box, Flex } from 'rebass' 
import styles from './Landing.module.css'

import codyCharacter from '../../images/cody-enokida.png'

const Landing = () => {
    return(
        <div className={styles.landingContainer}>
            <Flex 
                flexWrap="wrap"
                alignItems='center'>
                <Box
                    p={3}
                    width={[1, 1, 5 / 8]}
                    className={styles.introduction}>
                    <h1>Hey there! 🤙</h1>
                    <br/>
                    <h1>I’m <span>Kota Enokida</span>, an aspiring front-end developer focused on delivering beautiful interfaces & user experiences 🖥</h1>
                    <br/>
                    <h2>Let’s talk! 📩 <a href="mailto:codyenokida@gmail.com" target="_blank" rel="noopener noreferrer">codyenokida@gmail.com</a></h2>
                </Box>
                <Box
                    p={3}
                    width={[1, 1, 3 / 8]}
                    className={styles.image}>
                    <Image src={codyCharacter} className={styles.character}/>
                </Box>
            </Flex>
            
        </div>
    )
}

export default Landing 