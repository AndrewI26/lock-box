import Image from "next/image"
import { CSSProperties } from "react"
export default function Demo() {
    const container = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "7rem",
        textAlign: "center",
        background: "url(swipe.svg)",
        backgroundSize: "120% 100%",
        backgroundPosition: "center",
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
            <Image style={productImage} src="/lockboxproduct.png" alt="Lock box product image" z-index={100} width={700} height={700}/>
        </div>
    )
}