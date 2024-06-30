import React, {useState} from "react"
import {Button} from './Button'

export const DemoCardActive = () => {
    const [quantity, setQuontity] = useState(0)

    const handleButtonClick = (target: EventTarget) => {
        setQuontity(quantity + 1)
        console.log(target)
    }

    return (
        <div className="product-card">
            <Button
                props={{
                    label: "Increase counter",
                    buttonStyle: "primary",
                    buttonSize: 56,
                    state: "enabled",
                    counter: true,
                    quantity: quantity,
                    counterSize: 24,
                    onButtonClick: handleButtonClick
                }}
            >
                <Button.Label />
                <Button.Counter />
                {/*<Button.ProgressIndicator />*/}
            </Button>
        </div>
    )
}