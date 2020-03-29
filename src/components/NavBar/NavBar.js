import React from 'react'
import { Image } from 'rebass'
import Switch from "react-switch";

import Logo from "../../images/logo.png"
import sunBlack from "../../images/sunBlack.svg"
import moonBlack from "../../images/moonBlack.svg"
import sunWhite from "../../images/sunWhite.svg"
import moonWhite from "../../images/moonWhite.svg"

import styles from "./NavBar.module.css"

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggled: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
        this.props.onChange()
    }

    render() {
        return(
            <nav>
                <div className={styles.imageContainer}>
                    <Image src={Logo} className={styles.image}/>
                </div>
                <div className={styles.switchContainer}>
                    <div className={styles.switchComponent}>
                        {!this.state.checked ? <Image src={sunBlack} className={styles.sun}/> : <Image src={sunWhite} className={styles.sun}/>}
                        <Switch 
                            onChange={this.handleChange} 
                            checked={this.state.checked} 
                            className={styles.switch}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            offColor={'#3C3C3C'}
                            onColor={'#4AA8FF'}/>
                        {!this.state.checked ? <Image src={moonBlack} className={styles.moon}/> : <Image src={moonWhite} className={styles.moon}/>}
                    </div>      
                </div>
                
            </nav>
        )
    }
}

export default NavBar