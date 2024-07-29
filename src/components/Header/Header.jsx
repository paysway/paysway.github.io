import React, { useEffect, useState } from 'react'
import MobileHeader from './MobileHeader/MobileHeader'
import DefaultHeader from './DefaultHeader/DefaultHeader'

import dynamic from 'next/dynamic';

function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return isMobile ? <MobileHeader /> : <DefaultHeader />
}

export default Header
