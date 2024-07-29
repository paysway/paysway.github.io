import Tabs from '../Tabs/Tabs'
import stl from './PaymentPreparationIllustration.module.scss'

import Frontend from '../../../public/images/paymentPreparationFrontend.svg?inline'
import Backend from '../../../public/images/paymentPreparationBackend.svg?inline'
import BackendMobile from '../../../public/images/paymentPreparationBackendMobile.svg?inline'
import { useEffect, useState } from 'react'

function PaymentPreparationIllustration() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className={stl.mainBox}>
            <Tabs labels={['Frontend', 'Backend']}>
                <div className={stl.tabBox}>
                    <Frontend />
                </div>
                <div className={stl.tabBox}>
                    {isMobile ? <BackendMobile /> : <Backend />}
                </div>
            </Tabs>
        </div>
    )
}

export default PaymentPreparationIllustration
