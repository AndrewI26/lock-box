export default function Problem() {
    const problemWrapper = {
        width: "99vw",
        margin: "auto",
    }
    const problem = {
        width: "5rem",
        height: "2rem",
        borderRadius: "50px",
        padding: "1.2rem 3rem",
    }
    const info = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
    const infoStyle = {
        width: "40rem",
        textAlign: "center",
        color: "white"
    }
    const problemSection = {
        display: "flex",
        maxWidth: "1000px",
        textAlign: "center",
        marginTop: "10vh",
        borderRadius: "15px",
        gap: "2rem"
    }
    const titleStyle = {
        fontSize: "1.2rem"
    }
    const descStyle = {
        color: "grey",
    }
    const iconFillColor = "#777777"
    return (
        <div id="problem" style={problemWrapper}>
            <div style={info}>
                <p className="tag" style={problem}>Problem</p>
                <p className="section-title">Feeling distracted?</p>
                <p className="section-text" style={infoStyle}>It's hard to escape the endless scroll of social media content. Most people waste 5 hours every day, scrolling through social media.</p>
                <div style={problemSection}>
                    <div className="problem-section">
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M13 6H11V7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7V6Z"
                                fill={iconFillColor}
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6 2V4H7V7C7 9.76142 9.23858 12 12 12C9.23858 12 7 14.2386 7 17V20H6V22H18V20H17V17C17 14.2386 14.7614 12 12 12C14.7614 12 17 9.76142 17 7V4H18V2H6ZM9 4H15V7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7V4ZM9 17V20H15V17C15 15.3431 13.6569 14 12 14C10.3431 14 9 15.3431 9 17Z"
                                fill={iconFillColor}
                            />
                            </svg>
                        <p style={titleStyle}>Lack of time</p>
                        <p style={descStyle}>Social media is extremely time consuming for the average person.</p>
                    </div>
                    <div className="problem-section">
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
                                fill={iconFillColor}
                            />
                            </svg>
                        <p style={titleStyle}>Health Risks</p>
                        <p style={descStyle}>Constantly looking at screens is damaging to the eyes and body.</p>
                    </div>
                    <div className="problem-section">
                        <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z"
                            fill={iconFillColor}
                        />
                        <path
                            d="M14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17H8C8 14.7909 9.79086 13 12 13C14.2091 13 16 14.7909 16 17H14Z"
                            fill={iconFillColor}
                        />
                        <path
                            d="M16 10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10Z"
                            fill={iconFillColor}
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
                            fill={iconFillColor}
                        />
                        </svg>
                        <p style={titleStyle}>Depressed Mood</p>
                        <p style={descStyle}>Excessive phone usage can cause depression and impact overall mood.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}