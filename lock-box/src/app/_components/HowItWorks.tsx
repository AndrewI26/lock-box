import Step from "./Step";

export default function HowItWorks() {
    const container = {
        width: "80vw",
        margin: "auto"
    }
    return (
        <div style={container}>
            <Step 
                number={1}
                title="Select apps to block"
                desc="Using the LockBox app, select everything you want to disable. Once these apps are disabled, you won't be able to access them unless you can LockBox."
            />
            <Step 
                number={2}
                title="Tap the LockBox"
                desc="Simply open LockBox app and tap your phone to the box to disabled your selected apps. You are now locked in!"
            />
            <Step 
                number={3}
                title="Move LockBox away"
                desc="Move the LockBox physically away from you. You can now study, work or chill without your phone distracting you."
            />
        </div>
    )
}