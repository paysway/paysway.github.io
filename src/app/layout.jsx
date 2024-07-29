import {GoogleAnalytics} from '@next/third-parties/google'

export const metadata = {
    title: 'PaySway | Radically improve bank payments',
    description:
        'PaySway APIs and SDKs ensure successful bank payments, enhance user experience, and minimize maintenance. Improve your STP rate and all other payment metrics while saving engineering resources.',
    metadataBase: new URL(process.env.SITE_URL),
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
                <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
            </body>
        </html>
    )
}
