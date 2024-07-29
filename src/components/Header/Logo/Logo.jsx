import logoImage from '../../../../public/images/logo.svg'
import logoName from '../../../../public/images/letteringLogo.svg'
import stl from './Logo.module.scss'
import {homePagePath} from "../../../constants";
import Image from 'next/image'

const Logo = () => (
    <div>
        <a href={homePagePath}>
            <div className={stl.logoBox}>
                <Image className={stl.letteringLogo} src={logoName} alt="PaySway" />
                <Image className={stl.logo} src={logoImage} alt="logo" />
            </div>
        </a>
    </div>
)

export default Logo
