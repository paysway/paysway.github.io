import React from 'react'
import logoImage from '../../../assets/payswayLogo.svg'
import logoName from '../../../assets/payswayLetteringLogo.svg'
import stl from './Logo.module.scss'
import {homePagePath} from "../../../constants";

const Logo = () => (
    <div>
        <a href={homePagePath}>
            <div className={stl.logoBox}>
                <img className={stl.letteringLogo} src={logoName} alt="PaySway" />
                <img className={stl.logo} src={logoImage} alt="PaySway Logo" />
            </div>
        </a>
    </div>
)

export default Logo
