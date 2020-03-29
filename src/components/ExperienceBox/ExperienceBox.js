import React from 'react'
import { Flex, Box } from 'rebass'

import styles from './ExperienceBox.module.css'

const ExperienceBox = ({title, duration, position}) => {
    return(
        <div className={styles.experienceBox}>
            <Flex flexWrap="wrap">
                <Box 
                    width={[1, 1 / 2]}
                    className={styles.title}>
                    <p>{title}</p>
                </Box>
                <Box 
                    width={[1, 1 / 2]}
                    className={styles.duration}>
                    <p>{duration}</p>
                </Box>
            </Flex>
            <p>{position}</p>
        </div>
    )
}

export default ExperienceBox