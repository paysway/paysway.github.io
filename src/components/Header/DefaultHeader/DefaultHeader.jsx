import stl from './DefaultHeader.module.scss'
import Logo from '../Logo/Logo'
import {
    developersLink,
    externalLinks,
    homePagePath,
    products,
} from '../../../constants'
import React from 'react'
import {Link} from "react-router-dom";

function DropDownListItem({ title, icon, path }) {
    return (
        <Link to={path} className={stl.dropDownListItem}>
            <img
                className={stl.dropDownListItemIcon}
                src={icon}
                alt={`${title} icon`}
            />
            <div className={stl.dropDownListItemText}>{title}</div>
        </Link>
    )
}

function DefaultHeader() {
    return (
        <header className={stl.sectionBox}>
            <div className={stl.header}>
                <Logo />
                <nav>
                    <ul className={stl.list}>
                        <li className={stl.listItem}>
                            <a className={stl.headerLink} href={homePagePath}>
                                Home
                            </a>
                        </li>
                        <li className={`${stl.listItem} ${stl.dropDownItem}`}>
                            Products
                            <div className={stl.dropDownList}>
                                {Object.values(products).map((product) => (
                                    <DropDownListItem
                                        title={product.name}
                                        icon={product.icon}
                                        path={product.path}
                                    ></DropDownListItem>
                                ))}
                            </div>
                        </li>
                        <li className={stl.listItem}>
                            <a className={stl.headerLink} href={externalLinks.blog}>
                                Blog
                            </a>
                        </li>
                        <li className={stl.listItem}>
                            <a
                                className={`${stl.headerLink} ${stl.lockIcon}`}
                                href={developersLink}
                            >
                                Developers
                            </a>
                        </li>
                    </ul>
                </nav>
                <a
                    href={externalLinks.calendly}
                    className={stl.textDecorationNone}
                >
                    <button className={stl.button}>Speak to us</button>
                </a>
            </div>
        </header>
    )
}

export default DefaultHeader
