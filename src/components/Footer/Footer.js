import React from 'react'
import { Flex, Box } from 'rebass'

 
import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.blurb}>
                <p>Created with 💛</p> 
                <p>By Kota Cody Enokida️</p>
            </div>

            <div className={styles.linksContainer}>
                <Flex flexWrap="wrap">
                    <Box
                        width={[1 / 2, 1 / 2, 1 / 4]}
                        p={3}>
                        <a href="mailto:codyenokida@gmail.com" target="_blank" rel="noopener noreferrer">EMAIL</a>
                    </Box>
                    <Box
                        width={[1 / 2, 1 / 2, 1 / 4]}
                        p={3}>
                        <a href="https://www.instagram.com/cooodes/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                    </Box>
                    <Box
                        width={[1 / 2, 1 / 2, 1 / 4]}
                        p={3}>
                        <a href="https://www.linkedin.com/in/codyenokida/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                    </Box>
                    <Box
                        width={[1 / 2, 1 / 2, 1 / 4]}
                        p={3}>
                        <a href="https://github.com/codyenokida" target="_blank" rel="noopener noreferrer">GITHUB</a>
                    </Box>
                </Flex>
            </div>

        </footer>
    )
}

export default Footer