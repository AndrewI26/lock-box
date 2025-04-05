'use client'
import Image from "next/image"
import { CSSProperties } from "react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { blob } from "stream/consumers";


export default function Demo() {
    const container = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "7rem",
        textAlign: "center",
        backgroundSize: "120% 100%",
        backgroundPosition: "center",
        height: "120vh"
    }
    const solution = {
        width: "5rem",
        height: "2rem",
        borderRadius: "50px",
        padding: "1.2rem 3rem",
    }
    const yellow = {
        zIndex: "-1000",
        width: "600px",
        display: "absolute",
        top: "0",
        height: "auto",
    }
    const blobStyle = {
        position: "relative",
        width: 800,
        height: 800,
        zIndex: "-999",
        top: -700,
        right : 0,
    }
    const productImage = {
        height: "auto",
        width: "500px",
        margin: "auto"
    }
    const imageWrapper: CSSProperties = {
        position: "relative",
        width: "500px",
        border: "solid pink 4px"
    }
    return (
        <div id="demo" style={container}>
            <p className="tag" style={solution}>Solution</p>
            <p className="section-title">Introducing LockBox</p>
            <p>Stop your procrastination with this clean sleek design.</p>
            <div>
                <Image style={productImage} src="/lockboxproduct.png" alt="Lock box product image" z-index={100} width={700} height={700}/>
                <DotLottieReact
                    style={blobStyle}
                    src="https://lottie.host/9178ee12-a5dd-45e8-afb1-827d35045b14/gHq0l6YL7l.lottie"
                    loop
                    autoplay
                />
            </div>
            
        </div>
    )
}