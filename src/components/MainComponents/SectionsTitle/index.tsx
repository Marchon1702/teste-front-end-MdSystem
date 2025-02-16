import React from "react"

import "./SectionsTitle.scss"

interface props {
    title: string
}

export default function SectionsTitle({title}: props) {
    return (
        <div className="SectionsTitle">
            <span className="SectionsTitle__bar"></span>
            <h2 className="SectionsTitle__title">{title}</h2>
        </div>
    )
}