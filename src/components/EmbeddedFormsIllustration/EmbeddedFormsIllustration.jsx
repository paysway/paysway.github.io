import stl from './EmbeddedFormsIllustration.module.scss'

import { ReactComponent as AdminPanel } from '../../assets/embeddedFormsAdminPanel.svg'

function EmbeddedFormsIllustration() {
    return (
        <div className={stl.mainBox}>
            <AdminPanel />
        </div>
    )
}

export default EmbeddedFormsIllustration
