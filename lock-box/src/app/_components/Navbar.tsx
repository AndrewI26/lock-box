"use client"

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    const navStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
    }
    const navTotalStyle = {
        padding: "3rem",
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
    const buttonStyle = {
        padding: ".7rem 1.2rem",
        background: "white",
        borderRadius: "10px",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const buttonText = {
        fontWeight: "600"
    }
    const logoStyle = {
        display: "flex",
        alignItems: "center",
        gap: "20px",
    }
    const logoText = {
        fontSize: "1.8rem",
        fontWeight: "700",
        letterSpacing: "-5%"
    }
    const handleClick = () => {
        window.open("/res.pdf", '_blank');
    }
    return (
        <div id="nav" style={navTotalStyle}>
            <div style={logoStyle}>
                <Image 
                    src="/logo.png"
                    width={40}
                    height={40}
                    alt="lockbox logo"
                />
                <p style={logoText}>LockBox</p>
            </div>
            <div style={navStyle}>
                <Link className="nav-link" href="#skills">
                    <p >Skills</p>
                </Link>
                <Link className="nav-link" href="#experience">
                    <p >Experience</p>
                </Link>
                <Link className="nav-link" href="#projects">
                    <p>Projects</p>
                </Link>
                <Link className="nav-link" href="#contact">
                    <p >Contact</p>
                </Link>
                <div className='nav-button pointer' style={buttonStyle} onClick={handleClick}>
                    <p className='nav-button-text' style={buttonText}>Buy now</p>
                </div>
            </div>
        </div>
    )
}