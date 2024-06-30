import React from "react"
import {Button} from './Button'

export const DemoCardStatic = () => {
    return (
        <div className="demo-card">
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
                    pulse: false,
                    quantity: 3,
                    counterSize: 24,
                    stroke: true,
                    counterStyle: "primary"
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
                    pulse: false,
                    quantity: 12345,
                    counterSize: 24,
                    stroke: true,
                    counterStyle: "primary"
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
                    pulse: false,
                    quantity: 3,
                    counterSize: 24,
                    stroke: true,
                    counterStyle: "primary"
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
                    pulse: false,
                    quantity: 12345,
                    counterSize: 24,
                    stroke: true,
                    counterStyle: "primary"
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
                    pulse: false,
                    quantity: 3,
                    counterSize: 20,
                    stroke: true,
                    counterStyle: "primary"
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
                    pulse: false,
                    quantity: 3,
                    counterSize: 12,
                    stroke: true,
                    counterStyle: "primary"
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
            <Button
                props={{
                    label: "Disabled",
                    buttonStyle: "primary",
                    buttonSize: 28,
                    state: "disabled",
                    counter: false
                }}
            >
                <Button.Label />
                <Button.Loader />
            </Button>
            <Button
                props={{
                    label: "Short label",
                    buttonStyle: "secondary",
                    buttonSize: 56,
                    state: "enabled",
                    counter: true,
                    pulse: false,
                    quantity: 3,
                    counterSize: 24,
                    stroke: true,
                    counterStyle: "secondary"
                }}
            >
                <Button.Label />
                <Button.Counter />
            </Button>
            <Button
                props={{
                    label: "Short label",
                    buttonStyle: "secondary",
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
                    buttonStyle: "secondary",
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
                    buttonStyle: "secondary",
                    buttonSize: 28,
                    state: "loading",
                    counter: false
                }}
            >
                <Button.Label />
                <Button.Loader />
            </Button>
            <Button
                props={{
                    label: "Disabled",
                    buttonStyle: "secondary",
                    buttonSize: 28,
                    state: "disabled",
                    counter: false
                }}
            >
                <Button.Label />
                <Button.Loader />
            </Button>
            <Button
                props={{
                    label: "Pulse 8",
                    buttonStyle: "primary",
                    buttonSize: 36,
                    state: "enabled",
                    counter: true,
                    pulse: true,
                    counterSize: 8,
                    quantity: 3,
                    stroke: true,
                    counterStyle: "primary"
                }}
            >
                <Button.Label />
                <Button.Counter />
                <Button.Loader />
            </Button>
            <Button
                props={{
                    label: "Pulse 12",
                    buttonStyle: "primary",
                    buttonSize: 36,
                    state: "enabled",
                    counter: true,
                    pulse: true,
                    counterSize: 12,
                    quantity: 3,
                    stroke: true,
                    counterStyle: "primary"
                }}
            >
                <Button.Label />
                <Button.Counter />
                <Button.Loader />
            </Button>
            <Button
                props={{
                    label: "Pulse 16",
                    buttonStyle: "primary",
                    buttonSize: 36,
                    state: "enabled",
                    counter: true,
                    pulse: true,
                    counterSize: 16,
                    quantity: 3,
                    stroke: true,
                    counterStyle: "primary"
                }}
            >
                <Button.Label />
                <Button.Counter />
                <Button.Loader />
            </Button>
            <Button
                props={{
                    label: "Pulse 20",
                    buttonStyle: "primary",
                    buttonSize: 36,
                    state: "enabled",
                    counter: true,
                    pulse: true,
                    counterSize: 20,
                    quantity: 3,
                    stroke: true,
                    counterStyle: "primary"
                }}
            >
                <Button.Label />
                <Button.Counter />
                <Button.Loader />
            </Button>
            <Button
                props={{
                    label: "Pulse 24",
                    buttonStyle: "primary",
                    buttonSize: 36,
                    state: "enabled",
                    counter: true,
                    pulse: true,
                    counterSize: 24,
                    quantity: 3,
                    stroke: true,
                    counterStyle: "primary"
                }}
            >
                <Button.Label />
                <Button.Counter />
                <Button.Loader />
            </Button>
            <Button
                props={{
                    label: "Pulse 8 secondary",
                    buttonStyle: "secondary",
                    buttonSize: 36,
                    state: "enabled",
                    counter: true,
                    pulse: true,
                    counterSize: 8,
                    quantity: 3,
                    stroke: true,
                    counterStyle: "secondary"
                }}
            >
                <Button.Label />
                <Button.Counter />
                <Button.Loader />
            </Button>
        </div>
    )
}