import React, {useState} from "react"
import {Button} from './Button'

export const DemoCardActive = () => {
    const [quantity, setQuontity] = useState(0)

    const handleButtonClick = (target: EventTarget) => {
        setQuontity(quantity + 1)
        console.log(target)
    }

    return (
        <div className="demo-card">
            <Button
                props={{
                    label: "Increase counter",
                    buttonStyle: "primary",
                    buttonSize: 56,
                    state: "enabled",
                    counter: true,
                    quantity: quantity,
                    counterSize: 24,
                    onButtonClick: handleButtonClick,
                    pulse: false,
                    stroke: true
                }}
            >
                <Button.Label />
                <Button.Counter />
                <Button.Loader />
            </Button>
        </div>
    )
}