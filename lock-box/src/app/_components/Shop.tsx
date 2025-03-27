export default function Shop() {
    const shopContainer = {
        width: "100%",
        marginTop: "1000px"
    }
    const flexStyle = {
        display: "flex",
        background: "rgb(23, 23, 23)",
        maxWidth: "900px",
        margin: "auto",
        border: "solid 2px rgb(84, 84, 84)",
        borderRadius: "10px"
    }
    const imageStyle = {
        width: "100%",
        height: "500px",
        background: "rgb(84, 84, 84)",
    }
    const infoStyle = {
        width: "100%",
        padding: "5%"
    }
    const productTitle = {
        fontSize: "1.5rem",
        fontWeight: "500",
    }
    const desc = {
        color: "grey",
    }
    const btn = {
        color: "black",
        fontWeight: "500",
        padding: ".5rem 1rem",
        position: "relative",
    }
    return (
        <div id="shop" style={shopContainer}>
            <div style={flexStyle}>
                <div style={imageStyle}></div>
                <div style={infoStyle}>
                    <p style={productTitle}>LockBox</p>
                    <p style={desc}>One LockBox to block apps on a phone with the app. </p>
                    <button style={btn} className="glow-button">Buy now</button>
                </div>
            </div>
        </div>
    )
}