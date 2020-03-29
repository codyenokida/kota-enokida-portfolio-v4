import React from 'react'
import { Image, Flex, Box } from 'rebass'
import { Fade } from 'react-reveal'

import githubBlack from '../../images/githubBlack.svg'
import githubWhite from '../../images/githubWhite.svg'
import hyperlinkBlack from '../../images/hyperlinkBlack.svg'
import hyperlinkWhite from '../../images/hyperlinkWhite.svg'

import styles from './ProjectBox.module.css'

const ProjectBox = ({src, title, description, tech, theme, githubLink, webLink}) => {
    return(
        <Fade>
            <Flex flexWrap="wrap" className={styles.projectBoxContainer}>
                <Box 
                    p={2}
                    width={[1, 1 / 2]}
                    className={styles.previewImageContainer}>
                    <Image src={src} className={styles.image}/>
                </Box>
                <Box 
                    p={2}
                    width={[1, 1 / 2]}
                    className={styles.descriptionContainer}>
                    <p className={styles.title}>{title}</p>
                    <p>{description}</p>
                    <p className={styles.tech}>Technologies:</p>
                    <p>{tech}</p>
                    <a href={githubLink} target="_blank">{theme === 'light' ? <Image src={githubBlack} className={styles.icon}/> : <Image src={githubWhite} className={styles.icon}/>}</a>
                    <a href={webLink} target="_blank">{theme === 'light' ? <Image src={hyperlinkBlack}/> : <Image src={hyperlinkWhite}/>}</a>
                </Box>
            </Flex>
        </Fade>
    )
}

export default ProjectBox