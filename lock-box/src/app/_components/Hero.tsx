import Navbar from "./Navbar";

export default function Hero() {
    const heroStyle = {
        height: "100vh",
        width: "100%",
    }
    const heroWrapper = {
        display: "flex",
        padding: "0 10vw",
        height: "100vh",
        alignItems: "center",
    }
    const mainBox = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    }
    const header = {
        marginTop: "5vw",
        fontSize: "6.5rem",
        fontWeight: "900",
        lineHeight: "115%",
        marginBottom: "2rem",
    }
    const info = {
        width: "40vw",
        lineHeight: "150%",
        color: "grey",
        fontSize: "1.3rem"
    }
    const btnWrapper = {
        marginTop: "40px",
        display: "flex",
        gap: "30px",
        justifyContent: "center",
    }
    const btn1 = {
        fontSize: "1.1rem",
        borderRadius: "10px",
        fontWeight: "600",
        padding: ".7rem 1.5rem",
        color: "white",
        background: "black",
        zIndex: "1",
    }
    const btn2 = {
        fontSize: "1.1rem",
        borderRadius: "10px",
        fontWeight: "600",
        padding: ".7rem 1.5rem",
        color: "black",
        background: "white",
        zIndex: "1"
    }
    return (
        <div id="home" style={heroStyle}>
            <Navbar />
            <div style={heroWrapper}>
                <div style={mainBox}>
                    <h1 style={header}>Stop wasting time. <br></br>Get <span className="grad-text">LockBox.</span></h1>
                    <p style={info}>Take back control of your life with LockBox. Stop the mindless scrolling and endless procrastination. All of this can be done with a simple tap!</p>
                    <div style={btnWrapper}>
                        <button className="glow-button" style={btn1}>Download</button>
                        <button className="glow-button" style={btn2}>Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}