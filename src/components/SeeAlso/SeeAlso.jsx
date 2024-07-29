import stl from './SeeAlso.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function SeeAlso({ otherProducts }) {
    return (
        <section id="seeAlso">
            <div className={stl.sectionBox}>
                <div className={stl.mainBox}>
                    <h4 className={stl.header}>See also</h4>
                    <ul className={stl.list}>
                        {otherProducts.map((item, index) => (
                            <li key={index} className={stl.listItem}>
                                <Link href={item.path} className={stl.link}>
                                    <h3 className={stl.productName}>
                                        {item.title}
                                    </h3>
                                    <div className={stl.logoBox}>
                                        <Image
                                            className={stl.logo}
                                            src={item.icon}
                                            alt={item.title}
                                        />
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SeeAlso
