import React, { useState } from 'react'
import stl from './Tabs.module.scss'

const Tabs = ({ children, labels }) => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className={stl.tabsBox}>
            <div className={stl.switcher}>
                {labels.map((label, index) => (
                    <button
                        className={`${stl.button} ${index === activeTab && stl.selected}`}
                        onClick={() => setActiveTab(index)}
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
