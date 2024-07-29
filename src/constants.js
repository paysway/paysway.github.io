import paymentPreparationIcon from '../public/images/paymentPreparationIcon.svg'
import pennyTestingIcon from '../public/images/pennyTestingIcon.svg'
import embeddedFormsIcon from '../public/images/embeddedFormsIcon.svg'
import paymentPreparationLine from '../public/images/paymentPreparationLine.svg'
import bar59 from '../public/images/bar59.svg'
import bar61 from '../public/images/bar61.svg'
import bar70 from '../public/images/bar70.svg'

export const contacts = {
    email: 'sales@paysway.io',
    phone: '+1 (302) 440-4803',
    addresses: [
        {
            title: 'HQ',
            lines: [
                '1209 Orange St',
                'Wilmington',
                'DE 19801',
                'United States',
            ],
        },
    ],
}

export const externalLinks = {
    linkedIn: 'https://www.linkedin.com/company/paysway',
    calendly: 'https://calendly.com/paysway/intro',
    blog: "https://blog.paysway.io",
}

export const homePagePath = '/'
export const paymentPreparationPagePath = '/products/payment-preparation'
export const pennyTestingPagePath = '/products/penny-testing'
export const embeddedFormsPagePath = '/products/embedded-forms'
export const developersLink = `mailto:${contacts.email}?subject=Send%20me%20the%20API%20documentation`

export const products = {
    paymentPreparation: {
        name: 'Payment Preparation',
        icon: paymentPreparationIcon,
        path: paymentPreparationPagePath,
    },
    pennyTesting: {
        name: 'Penny Testing',
        icon: pennyTestingIcon,
        path: pennyTestingPagePath,
    },

    embeddedForms: {
        name: 'Embedded Forms',
        icon: embeddedFormsIcon,
        path: embeddedFormsPagePath,
    },
}

export const blogPosts = [
    {
        title: 'Convert unstructured postal addresses into structured fields with PaySway',
        coverLink: 'https://blog.paysway.io/content/images/2024/07/town-street.svg',
        link: 'https://blog.paysway.io/convert-unstructured-postal-addresses-into-structured-fields-with-paysway/',
    },
    {
        title: 'Prevent stuck transfers with PaySway',
        coverLink: 'https://blog.paysway.io/content/images/2024/07/red-stripes.svg',
        link: 'https://blog.paysway.io/prevent-stuck-transfers-with-paysway/',
    },

]

export const productsListContent = [
    {
        productName: products.paymentPreparation.name,
        productIcon: products.paymentPreparation.icon,
        title: 'Ensure best-performing transfers',
        description:
            'Issues with bank payments can be a deal breaker. Prevent them with our API that validates and enriches payment instructions and adds transparency through ETA and fee prediction.',
        buttonText: `Start with ${products.paymentPreparation.name}`,
        path: products.paymentPreparation.path,
    },
    {
        productName: products.pennyTesting.name,
        productIcon: products.pennyTesting.icon,
        title: 'Let us pave the way for critical payments',
        description:
            'We can check if a beneficiary account received credits in the past. If not, we’ll proceed with a test transfer and inform you upon credit confirmation or rejection, enabling you to move forward with your most important wires.',
        buttonText: `Start with ${products.pennyTesting.name}`,
        path: products.pennyTesting.path,
    },
    {
        productName: products.embeddedForms.name,
        productIcon: products.embeddedForms.icon,
        title: 'Streamline your front end for beneficiary details collection',
        description:
            'Ask only what’s necessary every time, set clear expectations, and reduce maintenance and development efforts.',
        buttonText: `Start with ${products.embeddedForms.name}`,
        path: products.embeddedForms.path,
    },
]

export const productPagesContent = {
    paymentPreparation: {
        cover: {
            title: products.paymentPreparation.name,
            subtitle:
                'Avoid having to deal with unclear errors, inexplicable returns, and delayed transactions with our API.',
            productIcon: products.paymentPreparation.icon,
            tip: {
                percent: 70,
                text: 'of companies are not satisfied with their payment failure rate',
                bar: bar70,
            },
            line: paymentPreparationLine,
        },
        description: {
            points: [
                'Stop bad payments thanks to thorough validation against hundreds of rules with clear errors, customized depending on the debtor bank and payment scheme.',
                'Ensure successful transfers with the most optimal paths, enriched bank and account details (including conversion between identifier and account types), and get compliance recommendations.',
                'Predict delivery time of local and international payments, as well as total costs, including intermediary fees.',
            ],
            button: {
                text: `Schedule a call`,
                link: externalLinks.calendly,
            },
        },
        seeAlso: [
            {
                title: products.pennyTesting.name,
                icon: products.pennyTesting.icon,
                path: products.pennyTesting.path,
            },
            {
                title: products.embeddedForms.name,
                icon: products.embeddedForms.icon,
                path: products.embeddedForms.path,
            },
        ],
        footnote:
            'https://risk.lexisnexis.com/global/en/insights-resources/research/true-impact-of-failed-payments',
    },
    pennyTesting: {
        cover: {
            title: products.pennyTesting.name,
            subtitle:
                'You can’t risk failure with some payments. Ensure they reach the intended recipient smoothly and reliably.',
            productIcon: products.pennyTesting.icon,
            tip: {
                percent: 59,
                text: "of users don't come back if the payment experience was negative",
                bar: bar59,
            },
            line: paymentPreparationLine,
        },
        description: {
            points: [
                'Provide the beneficiary details to Penny Testing API.',
                'Receive the response if a test transfer is recommended based on the payment type and the recipient’s credit history.',
                'Proceed with the penny test through our rails. We’ll respond with the confirmation from the beneficiary and their bank.',
            ],
            button: {
                text: `Schedule a call`,
                link: externalLinks.calendly,
            },
        },
        seeAlso: [
            {
                title: products.paymentPreparation.name,
                icon: products.paymentPreparation.icon,
                path: products.paymentPreparation.path,
            },
            {
                title: products.embeddedForms.name,
                icon: products.embeddedForms.icon,
                path: products.embeddedForms.path,
            },
        ],
        footnote:
            'https://www.swift.com/swift-lvp/assets/pdf/small_payments_big_opportunity_july_2023.pdf',
    },
    embeddedForms: {
        cover: {
            title: products.embeddedForms.name,
            subtitle:
                'Poor user experience can contribute to payment issues. Improve and simplify beneficiary details collection with PaySway.',
            productIcon: products.embeddedForms.icon,
            tip: {
                percent: 61,
                text: 'of SMEs would not use the solution if the process is more complex than expected',
                bar: bar61,
            },
            line: paymentPreparationLine,
        },
        description: {
            points: [
                'Configure the corridors to disable, adjust, or create destinations, currencies, and additional fields manually or through spreadsheet import.',
                'Integrate our low-code UI into your web or mobile application. It already supports all the validations with clear reasons, ETAs, and fee estimations out of the box.',
                'Use the enriched input for beneficiary storage or payment initiation.',
            ],
            button: {
                text: `Schedule a call`,
                link: externalLinks.calendly,
            },
        },
        seeAlso: [
            {
                title: products.paymentPreparation.name,
                icon: products.paymentPreparation.icon,
                path: products.paymentPreparation.path,
            },
            {
                title: products.pennyTesting.name,
                icon: products.pennyTesting.icon,
                path: products.pennyTesting.path,
            },
        ],
        footnote:
            'https://www.swift.com/swift-lvp/assets/pdf/small_payments_big_opportunity_july_2023.pdf',
    },
}
