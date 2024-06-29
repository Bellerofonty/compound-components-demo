import React from "react"
import {Button} from './Button'

export const ProductCard = () => {
    return (
        <div className="product-card">
            <Button
                props={{
                    label: "Add to cart ",
                    buttonStyle: "primary",
                    buttonSize: 36,
                    state: "enabled",
                    counter: true,
                    quantity: 332333
                }}
            >
                <Button.Label />
                <Button.Counter />
                {/*<Button.ProgressIndicator />*/}
            </Button>
            <Button
                props={{
                    label: "Add to cart ",
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
        </div>
    )
}