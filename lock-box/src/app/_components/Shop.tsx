import Image from "next/image"
export default function Shop() {
    const shopContainer = {
        width: "100%",
        margin: "10rem 0"
    }
    const flexStyle = {
        display: "flex",
        background: "rgb(23, 23, 23)",
        maxWidth: "900px",
        margin: "auto",
        border: "solid 2px rgb(84, 84, 84)",
        borderRadius: "10px",
        alignItems: "fill-content"
    }
    const imageStyle = {
        width: "100%",
        height: "auto",
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
    const strike = {
        color: "grey"
    }
    const price = {
        marginTop: "1rem",
        marginBottom: ".2rem",
    }
    return (
        <div id="shop" style={shopContainer}>
            <div style={flexStyle}>
                <Image src="/lockboxproduct.png" alt="LockBox product" style={imageStyle} quality={100} width={100} height={100} />
                <div style={infoStyle}>
                    <p style={productTitle}>LockBox</p>
                    <p style={desc}>One LockBox to block apps on a phone with the app. </p>
                    <p style={desc}><b>Sleek design:</b> LockBox is built with high quality aluminum, and is made with a clean design.</p>
                    <p style={desc}><b>Portable:</b> LockBox is 10cm x 9cm x 3cm so you can bring it anywhere that needs focus!.</p>
                    <p style={desc}><b>Effective:</b> Locking apps with a phyiscal device is much more effective than simply disabling apps on your phone.</p>
                    <p style={price}>$25.99 <s style={strike}>$49.99</s></p>
                    <button style={btn} className="glow-button">Buy now</button>
                </div>
            </div>
        </div>
    )
}