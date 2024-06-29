import React, {useState} from "react"
import {Button} from './Button'

export const ProductCard = () => {
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
            <Button
                props={{
                    label: "Short label",
                    buttonStyle: "primary",
                    buttonSize: 56,
                    state: "enabled",
                    counter: false
                }}
            >
                <Button.Label />
                {/*<Button.ProgressIndicator />*/}
            </Button>
            <Button
                props={{
                    label: "Short label",
                    buttonStyle: "primary",
                    buttonSize: 56,
                    state: "enabled",
                    counter: true,
                    quantity: 12345,
                    counterSize: 24,
                }}
            >
                <Button.Label />
                <Button.Counter />
                {/*<Button.ProgressIndicator />*/}
            </Button>
            <Button
                props={{
                    label: "Long label long label long label long label long label long label long label",
                    buttonStyle: "primary",
                    buttonSize: 56,
                    state: "enabled",
                    counter: false
                }}
            >
                <Button.Label />
                {/*<Button.ProgressIndicator />*/}
            </Button>
            <Button
                props={{
                    label: "Long label long label long label long label long label long label long label",
                    buttonStyle: "primary",
                    buttonSize: 56,
                    state: "enabled",
                    counter: true,
                    quantity: 3,
                    counterSize: 24,
                }}
            >
                <Button.Label />
                <Button.Counter />
                {/*<Button.ProgressIndicator />*/}
            </Button>
            <Button
                props={{
                    label: "Long label long label long label long label long label long label long label",
                    buttonStyle: "primary",
                    buttonSize: 56,
                    state: "enabled",
                    counter: true,
                    quantity: 12345,
                    counterSize: 24,
                }}
            >
                <Button.Label />
                <Button.Counter />
                {/*<Button.ProgressIndicator />*/}
            </Button>
            <Button
                props={{
                    label: "Medium",
                    buttonStyle: "primary",
                    buttonSize: 36,
                    state: "enabled",
                    counter: true,
                    quantity: 3,
                    counterSize: 20,
                }}
            >
                <Button.Label />
                <Button.Counter />
                {/*<Button.ProgressIndicator />*/}
            </Button>
            <Button
                props={{
                    label: "Small",
                    buttonStyle: "primary",
                    buttonSize: 28,
                    state: "enabled",
                    counter: true,
                    quantity: 3,
                    counterSize: 12,
                }}
            >
                <Button.Label />
                <Button.Counter />
                {/*<Button.ProgressIndicator />*/}
            </Button>
        </div>
    )
}