import stl from './MobileHeader.module.scss'
import Logo from '../Logo/Logo'
import React, {useEffect, useRef, useState} from 'react'
import MobileMenu from '../MobileMenu/MobileMenu'

function MobileHeader() {
    const [isOpened, setIsOpened] = useState(false)
    const headerRef = useRef(null)


    const toggleMenu = () => {
        setIsOpened(!isOpened)
    }

    useEffect(() => {
        if (isOpened) {
            document.body.classList.add(stl.locked);
            headerRef.current.classList.add(stl.mobileMenuActive);
        } else {
            document.body.classList.remove(stl.locked);
            headerRef.current.classList.remove(stl.mobileMenuActive);
        }
    }, [isOpened]);

    return (
        <header className={stl.sectionBox}>
            <div className={stl.header} ref={headerRef}>
                <Logo />
                <nav>
                    <div
                        onClick={toggleMenu}
                        className={isOpened ? stl.closeIcon : stl.burgerIcon}
                    ></div>
                </nav>
            </div>
            {isOpened && <MobileMenu />}
        </header>
    )
}

export default MobileHeader
