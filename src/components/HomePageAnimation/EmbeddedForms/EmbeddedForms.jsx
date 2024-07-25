import { ReactComponent as GBPEmbeddedForm } from '../../../assets/gbpEmbeddedForm.svg'
import { ReactComponent as USDEmbeddedForm } from '../../../assets/usdEmbeddedForm.svg'
import { ReactComponent as EUREmbeddedForm } from '../../../assets/eurEmbeddedForm.svg'
import stl from './EmbeddedForms.module.scss'

import Tabs from '../../Tabs/Tabs'

const forms = [
    {
        currency: 'GBP',
        content: <GBPEmbeddedForm />,
    },
    {
        currency: 'USD',
        content: <USDEmbeddedForm />,
    },
    {
        currency: 'EUR',
        content: <EUREmbeddedForm />,
    },
]

function EmbeddedForms() {
    const labels = forms.map((form) => form.currency)
    return (
        <Tabs labels={labels}>
            {forms.map((form) => (
                <div className={stl.formBox}>{form.content}</div>
            ))}
        </Tabs>
    )
}

export default EmbeddedForms
