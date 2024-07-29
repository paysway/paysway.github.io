import stl from './ProductPageCover.module.scss'
import Image from 'next/image'

function ProductPageCover({
    content: { title, subtitle, productIcon, tip, line },
}) {
    return (
        <section id="cover">
            <div className={stl.linesWrapper}>
                <div className={stl.sectionBox}>
                    <div className={stl.mainBox}>
                        <div className={stl.headerBox}>
                            <h1 className={stl.header}>{title}</h1>
                            <Image
                                className={stl.productIcon}
                                src={productIcon}
                                alt={'product icon'}
                            />
                        </div>
                        <div className={stl.subtitleBox}>
                            <p className={stl.subtitle}>{subtitle}</p>
                            <div className={stl.tip}>
                                <span className={stl.percent}>
                                    {tip.percent}%
                                </span>
                                <Image src={tip.bar} alt="process" />
                                <span className={stl.percentsSpan}>
                                    {tip.text}
                                    <sup className={stl.sup}>1</sup>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Image className={stl.line} src={line} alt="line" />
            </div>
        </section>
    )
}

export default ProductPageCover
