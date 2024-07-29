import stl from './EmbeddedFormsIllustration.module.scss'

import AdminPanel from '../../../public/images/embeddedFormsAdminPanel.svg?inline'

function EmbeddedFormsIllustration() {
    return (
        <div className={stl.mainBox}>
            <AdminPanel />
        </div>
    )
}

export default EmbeddedFormsIllustration
