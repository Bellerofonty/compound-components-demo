import React from "react"
import {Button} from './Button'

export const DemoCardStatic = () => {
    return (
        <div className="product-card">
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
            </Button>
            <Button
                props={{
                    label: "Short label",
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
            </Button>
            <Button
                props={{
                    label: "Short label",
                    buttonStyle: "primary",
                    buttonSize: 56,
                    state: "loading",
                    counter: false
                }}
            >
                <Button.Label />
                <Button.Loader />
            </Button>
            <Button
                props={{
                    label: "Short label",
                    buttonStyle: "primary",
                    buttonSize: 36,
                    state: "loading",
                    counter: false
                }}
            >
                <Button.Label />
                <Button.Loader />
            </Button>
            <Button
                props={{
                    label: "Short label",
                    buttonStyle: "primary",
                    buttonSize: 28,
                    state: "loading",
                    counter: false
                }}
            >
                <Button.Label />
                <Button.Loader />
            </Button>
        </div>
    )
}