import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
    const heroStyle = {
        height: "100vh",
        width: "100vw",
        background: "url(swipe.svg)",
        backgroundSize: "119% 100%",
        backgroundPosition: "50%",
    }
    const heroWrapper = {
        display: "flex",
        padding: "0 10vw",
        height: "90vh",
        alignItems: "center",
    }
    const leftBox = {
        width: "65%",
    }
    const rightBox = {
        width: "35%",
    }
    const header = {
        marginTop: "-5vw", // to make up for navbar
        fontSize: "75px",
        fontWeight: "900",
        letterSpacing: "-5%",
        lineHeight: "100%",
        marginBottom: "2rem",
    }
    const info = {
        width: "40vw",
        lineHeight: "200%",
    }
    const btnWrapper = {
        marginTop: "2vh"
    }
    const btn1 = {
        fontSize: "1.3rem",
        borderRadius: "10px",
        fontWeight: "600",
        padding: "1rem 2rem",
        color: "black",
        background: "white",
    }
    const imageStyle = {
        width: "400px",
        height: "auto",
        marginLeft: "auto",
    }
    return (
        <div style={heroStyle}>
            <Navbar />
            <div style={heroWrapper}>
                <div style={leftBox}>
                    <h1 style={header}>Less <span className="grad-text">distractions.</span> <br></br>More <span className="grad-text">rewards.</span></h1>
                    <p style={info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nunc eget orci fermentum tempor. Quisque ac arcu non ex cursus condimentum. Nunc tortor sapien, porttitor vel mi vitae, elementum ullamcorper eros. Maecenas facilisis tortor.</p>
                    <div style={btnWrapper}>
                        <button style={btn1}>Buy now</button>
                    </div>
                </div>
                <div style={rightBox}>
                    <Image 
                        src="/iphonemock.png"
                        alt="iphone mockup"
                        width={100}
                        height={100}
                        style={imageStyle}
                        quality={100}
                        unoptimized
                        priority
                    />
                </div>
            </div>
        </div>
    )
}