import React, {useState} from "react"
import {Button} from './Button'

type State = 'enabled' | 'loading' | 'disabled'

export const DemoCardActive = () => {
    const [quantity, setQuantity] = useState(95)
    const [state, setState] = useState<State>('enabled')

    const handleButtonClick = (target: EventTarget) => {
        setState('loading')
        setTimeout(() => {
            let currentQuantity = quantity + 1
            if (currentQuantity >= 100) {
                setState('disabled')
            } else {
                setState('enabled')
            }
            setQuantity(currentQuantity)
        }, 1000)
    }

    return (
        <div className="demo-card">
            <Button
                props={{
                    label: "Increase counter",
                    buttonStyle: "primary",
                    buttonSize: 56,
                    state: state,
                    counter: true,
                    quantity: quantity,
                    counterSize: 24,
                    onButtonClick: handleButtonClick,
                    pulse: false,
                    stroke: true,
                    counterStyle: "primary"
                }}
            >
                <Button.Label />
                <Button.Counter />
                <Button.Loader />
            </Button>
        </div>
    )
}