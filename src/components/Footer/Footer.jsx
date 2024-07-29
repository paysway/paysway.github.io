import React from 'react'
import stl from './Footer.module.scss'
import payswayLetteringLogo from '../../../public/images/letteringLogo.svg'
import {
    contacts,
    externalLinks,
    homePagePath,
    products,
} from '../../constants'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <footer>
            <div className={stl.footerSection}>
                <div className={stl.sectionBox}>
                    <div className={stl.mainBox}>
                        <div className={stl.logoBox}>
                            <Image
                                className={stl.letteringLogo}
                                src={payswayLetteringLogo}
                                alt="PaySway"
                            />
                            <p className={stl.copyright}>
                                &copy; PaySway Corp.
                            </p>
                        </div>
                        <ul className={stl.footerList}>
                            <li>
                                <a className={stl.link} href={homePagePath}>
                                    Home
                                </a>
                            </li>
                            <li className={stl.footerListItem}>
                                <div className={stl.footerListHeader}>
                                    Products
                                </div>
                                <ul className={stl.footerSublist}>
                                    {Object.values(products).map((product) => (
                                        <li>
                                            <Link
                                                className={stl.link}
                                                href={product.path}
                                            >
                                                {product.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <a className={stl.link} href={externalLinks.blog}>
                                    Blog
                                </a>
                            </li>
                        </ul>
                        <ul className={stl.footerList}>
                            <li className={stl.footerListItem}>
                                <div className={stl.footerListHeader}>
                                    Contact
                                </div>
                                <ul className={stl.footerSublist}>
                                    <li className={stl.footerSublistItem}>
                                        {contacts.email}
                                    </li>
                                    <li className={stl.footerSublistItem}>
                                        {contacts.phone}
                                    </li>
                                    <li>
                                        <a
                                            className={stl.link}
                                            href={externalLinks.calendly}
                                        >
                                            Schedule a call
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {contacts.addresses.map((address, idx) => (
                                <li>
                                    <div className={stl.addressHeader}>
                                        {address.title}
                                    </div>
                                    {address.lines.map((line) => (
                                        <p className={stl.addressLine}>
                                            {line}
                                        </p>
                                    ))}
                                </li>
                            ))}
                        </ul>
                        <div className={stl.follow}>
                            <span className={stl.footerListHeader}>
                                Follow us
                            </span>
                            <a
                                className={stl.linkedIn}
                                href={externalLinks.linkedIn}
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
