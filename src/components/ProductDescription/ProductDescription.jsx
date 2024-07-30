import stl from './ProductDescription.module.scss'

function PointText({ point }) {
    const [firstWord, ...rest] = point.split(' ')
    return (
        <div className={stl.pointText}>
            <span className={stl.pointFirstWord}>{`${firstWord} `}</span>
            {rest.join(' ')}
        </div>
    )
}

function ProductDescription({
    children,
    content: { points, button, extraLink },
}) {
    return (
        <section id="description">
            <div className={stl.sectionBox}>
                <div className={stl.mainBox}>
                    <div className={stl.illustrationWrapper}>
                        <div className={stl.illustrationBox}>{children}</div>
                    </div>
                    <div className={stl.textBox}>
                        <ul className={stl.pointsBox}>
                            {points.map((point, idx) => (
                                <li className={stl.pointBox} key={idx}>
                                    <div className={stl.pointNumber}>
                                        <span>{idx + 1}</span>
                                    </div>
                                    <PointText point={point} />
                                </li>
                            ))}
                        </ul>
                        <div className={stl.actionsBox}>
                            <a
                                href={button.link}
                                className={stl.textDecorationNone}
                            >
                                <button className={stl.button}>
                                    {button.text}
                                </button>
                            </a>
                            {extraLink && (
                                <a href={extraLink.link} className={stl.link}>
                                    {extraLink.text}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDescription
