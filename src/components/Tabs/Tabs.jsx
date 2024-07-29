import React, { useState } from 'react'
import stl from './Tabs.module.scss'

const Tabs = ({ children, labels }) => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className={stl.tabsBox}>
            <div className={stl.switcher}>
                {labels.map((label, idx) => (
                    <button
                        className={`${stl.button} ${idx === activeTab && stl.selected}`}
                        onClick={() => setActiveTab(idx)}
                        key={idx}
                    >
                        {label}
                    </button>
                ))}
            </div>
            {children[activeTab]}
        </div>
    )
}

export default Tabs
