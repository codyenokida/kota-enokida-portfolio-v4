import React from 'react'
import { Flex, Box } from 'rebass'
import { Fade } from 'react-reveal'


import styles from './SectionLayout.module.css'

const SectionLayout = ({ title, children }) => {
    return(
        <div className={styles.sectionLayout}>
            <Fade>
                <Flex flexWrap="wrap">
                    <Box
                        p={3}
                        width={ [1, 1 / 5] }
                        color='#4AA8FF'
                        className={styles.titleContainer}>
                        {title}
                    </Box>
                    <Box
                        p={3}
                        width={ [1, 4 / 5] }
                        className={styles.childContainer}>
                        {children}
                    </Box>
                </Flex>
            </Fade>
        </div>
    ) 
}

export default SectionLayout