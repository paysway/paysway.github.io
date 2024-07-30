import stl from './Footnotes.module.scss'

function Footnotes({ notes }) {
    return (
        <section id="footnotes">
            <div className={stl.sectionBox}>
                <div className={stl.footnotes}>
                    <h4 className={stl.footnotesHeader}>Sources</h4>
                    {notes.map((footnote, idx) => (
                        <p
                            className={stl.footnote}
                            key={idx}
                        >{`${idx + 1}. ${footnote}`}</p>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footnotes
