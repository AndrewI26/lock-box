'use client'

import { useState } from "react"
import ReactStars from "react-rating-stars-component";

export default function Testimonials() {
    const [index, setIndex] = useState(0)
    const testimonials = [
        {
            name: "Janet",
            desc: "shafk kjdf hkj kjhdfkl jlg dfsg fd gdsf gdfs gds fgs dfgds fg ds fgdf",
        },
        {
            name: "Kyle",
            desc: "sgsdf gdf skn dgffkl jlg dfsg fd gdsf gdfs gds fgs dfgds fg ds fgdf sample sample sample samplrejgh d sjghdg kjnkdj lngfg d",
        },
        {
            name: "Andrew",
            desc: "sHye world hellos fgs dfgds fg ds fgdfjndfgh  dfgkjnh jkdfgn hjknf dgh jknfgdjk njfkngh jkdnfg kjn dfjngjfg nhjnfdgh jndfghjk ",
        },
    ]
    const upIndex = () => {
        setIndex(index => index < testimonials.length - 2 ? index+1 : testimonials.length - 1)
    }
    const downIndex = () => {
        setIndex(index => index > 0 ? index-1 : 0)
    }
    const wrapper = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "25vh 10vw",
        textAlign: "center",
    }
    const subtitle = {
        width: "8.5rem",
        height: "2rem",
        borderRadius: "50px",
        padding: "1.2rem 3rem",
        textAlign: "center",
    }
    const testWrapper = {
        background: "var(--bg-secondary)",
        padding: "4rem 3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5rem 0",
        marginBottom: "0",
        borderRadius: "15px",
        maxWidth: "800px",
    }
    const info = {
        color: "white",
        textAlign: "center"
    }
    const testDesc = {
        fontSize: "1.5rem"
    }
    const testName = {
        fontSize: "1.3rem",
        fontWeight: "600",
        margin: "10px",
    }
    const arrowsWrapper = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    return (
        <div id="testimonials" style={wrapper}>
            <p className="tag" style={subtitle}>Testimonials</p>
            <p className="section-title">The results speak for themselves...</p>
            <p className="section-text" style={info}>Hear stories from some of our valued customers.</p>
            <div style={testWrapper}>  
                <p style={testDesc}>{testimonials[index].desc}</p>
                <p style={testName}>{`- ${testimonials[index].name}`}</p>
                <div style={arrowsWrapper}>
                    <div className="arrow-wrapper" onClick={downIndex}><i className="arrow left"></i></div>
                    <div className="arrow-wrapper" onClick={upIndex}><i className="arrow right"></i></div>
                </div>
            </div>
        </div>
    )
}