import stl from './MobileMenu.module.scss'
import React from 'react'
import {
    developersLink, externalLinks,
    homePagePath, products,
} from '../../../constants'
import Link from "next/link"

function MobileMenu() {
    return (
        <div className={stl.mobileMenu}>
            <ul className={stl.mobileMenuContent}>
                <li className={stl.menuItem}>
                    <a href={homePagePath} className={stl.menuLink}>
                        Home
                    </a>
                </li>
                <li className={stl.menuItem}>
                    Products
                    <ul className={stl.menuSublist}>
                        {Object.values(products).map((product) => (
                            <li className={stl.menuSublistItem}>
                                <Link href={product.path} className={stl.menuLink}>
                                    {product.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className={stl.menuItem}>
                    <a href={developersLink} className={`${stl.menuLink} ${stl.lockIcon}`}>
                        Developers
                    </a>
                </li>
                <li className={stl.menuItem}>
                    <a href={externalLinks.blog} className={stl.menuLink}>
                        Blog
                    </a>
                </li>
                <li className={stl.menuItem}>
                    <a href={externalLinks.calendly} className={stl.menuLink}>
                        Schedule a call
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default MobileMenu
