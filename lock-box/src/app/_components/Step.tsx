'use client'

import { useState } from "react";

interface Props {
    number: number,
    title: string,
    desc: string,
}

export default function Step({number, title, desc}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const containerWrapper = {
        WebkitUserSelect: "none", 
        MsUserSelect: "none", 
        userSelect: "none",
        borderRadius: "15px",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        background: `var(--bg-secondary)`,
        padding: "1rem 3rem",
        margin: "1rem auto"
    }
    const openContainerWrapper = {
        WebkitUserSelect: "none", 
        MsUserSelect: "none", 
        userSelect: "none",
        backgroundImage: "linear-gradient(261deg,rgba(255, 243, 80, 0.87),rgba(21, 255, 0, 0.81))",
        backgroundSize: "100% 100%",
        backgroundClip: "fill",
        borderRadius: "15px",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 3rem",
        margin: "1rem auto"
    }
    const toggle = {
        background: "white",
        color: "black",
        fontSize: "2rem",
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        textAlign: "center",
    }
    const openToggle = {
        background: "black",
        color: "white",
        fontSize: "2rem",
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        textAlign: "center",
    }
    const text = {
        fontSize: "1.5rem",
        fontWeight: "600",
        WebkitUserSelect: "none", 
        MsUserSelect: "none", 
        userSelect: "none",
    }
    const openText = {
        fontSize: "1.5rem",
        fontWeight: "600",
        color: "black",
        WebkitUserSelect: "none", 
        MsUserSelect: "none", 
        userSelect: "none",
    }
    const breakLine = {
        width: "100%",
        height: "4px",
        margin: "1rem auto",
        background: "black",
        display: "block",
    }
    const upperContainer = {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div style={isOpen ? openContainerWrapper : containerWrapper} onClick={toggleOpen}>
            <div style={upperContainer}>  
                <div>
                    <p style={isOpen ? openText : text}>{`${number}. ${title}`}</p>
                </div>
                <button style={isOpen ? openToggle : toggle} onClick={toggleOpen}>{isOpen ? "-" : "+"}</button>
            </div>
            {isOpen && <div style={breakLine}></div>}
            {isOpen && <p style={isOpen ? openText : text}>{desc}</p>}
        </div>
    )
}