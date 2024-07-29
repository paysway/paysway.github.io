import GBPEmbeddedForm from '../../../../public/images/gbpEmbeddedForm.svg?inline'
import USDEmbeddedForm from '../../../../public/images/usdEmbeddedForm.svg?inline'
import EUREmbeddedForm from '../../../../public/images/eurEmbeddedForm.svg?inline'
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
            {forms.map((form, idx) => (
                <div className={stl.formBox} key={idx}>{form.content}</div>
            ))}
        </Tabs>
    )
}

export default EmbeddedForms
