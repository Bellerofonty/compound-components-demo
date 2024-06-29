import React from "react"
import {Button} from './Button'

export const ProductCard = () => {
    return (
        <div className="product-card">
            <Button
                props={{
                    label: "Short label",
                    buttonStyle: "primary",
                    buttonSize: 36,
                    state: "enabled",
                    counter: true,
                    quantity: 3
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
                    buttonSize: 36,
                    state: "enabled",
                    counter: true,
                    quantity: 12345
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
                    buttonSize: 36,
                    state: "enabled",
                    counter: true,
                    quantity: 3
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
                    buttonSize: 36,
                    state: "enabled",
                    counter: true,
                    quantity: 12345
                }}
            >
                <Button.Label />
                <Button.Counter />
                {/*<Button.ProgressIndicator />*/}
            </Button>
            <Button
                props={{
                    label: "Increment",
                    buttonStyle: "primary",
                    buttonSize: 36,
                    state: "enabled",
                    counter: true,
                    quantity: 1
                }}
            >
                <Button.Label />
                <Button.Counter />
                {/*<Button.ProgressIndicator />*/}
            </Button>
        </div>
    )
}