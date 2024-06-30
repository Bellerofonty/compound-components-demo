import React, {useContext, createContext, PropsWithChildren} from "react"
import loader from '../loader.svg'

type ButtonGroupContext = {
    props: Props
}

const ButtonGroupContext = createContext<ButtonGroupContext | undefined>(undefined)

type CommonProps = {
    label: string,
    buttonStyle: 'primary' | 'secondary',
    buttonSize: 28 | 36 | 56,
    state: 'enabled' | 'loading' | 'disabled',
    onButtonClick?: Function
}

type Props = CommonProps & {
    counter: false
} | CommonProps & {
    counter: true,
    quantity: number | string,
    // counterStyle: 'primary' | 'secondary',
    counterSize: 8 | 12 | 16 | 20 | 24
    stroke: true | false,
    pulse: true | false
}

type ButtonGroupProps = PropsWithChildren & {
    props: Props
}

const useButtonGroupContext = () => {
    const context = useContext(ButtonGroupContext)
    if (!context) {
        throw new Error('useButtonGroupContext must be used within ButtonGroup')
    }
    return context
}

export const Button = ({ children, props }: ButtonGroupProps) => {
    let classes = ['button', `size${props.buttonSize}`, `${props.buttonStyle}`]
    if (props.state === 'loading') {
        classes.push('loading')
    } else if (props.state === 'disabled') {
        classes.push('disabled')
    } else if (props.state === 'enabled') {
        classes.push('enabled')
    }

    if (props.counter && props.pulse) {
        if (props.counterSize === 8 || props.counterSize === 12) {
            classes.push('pulse')
        }
    }

    return (
        <ButtonGroupContext.Provider value={{props}}>
            <button
                className={classes.join(' ')}
                onClick={(e) => props.state !== "disabled" ?
                    props.onButtonClick && props.onButtonClick(e.currentTarget) :
                    () => {}
                }
            >
                {children}
                <div className="overlay" />
            </button>
        </ButtonGroupContext.Provider>
    )
}

const Label = () => {
    const {props} = useButtonGroupContext()
    return <div className="label">{props.label}</div>
}
Button.Label = Label

const Counter = () => {
    const {props} = useButtonGroupContext()
    if (!props.counter) {
        return <></>
    }

    let quantity
    if (typeof props.quantity === "number") {
        if (props.quantity > 99) {
            quantity = '99+'
        } else {
            quantity = props.quantity
        }
    } else {
        quantity = props.quantity
        if (quantity.length > 3) {
            quantity = quantity.slice(0, 3)
        }
    }

    let classes = ['counter', `size${props.counterSize}`]
    if (props.stroke) {
        classes.push('stroke')
    }

    return (
        <>
            <div className={classes.join(" ")}>
                <div className="quantity">{quantity}</div>
            </div>
            <div className="live-indicator">
                <div className="red-dot" />
                <div className="pulse one" />
                <div className="pulse two" />
            </div>
        </>
    )
}
Button.Counter = Counter

const Loader = () => {
    return (
        <>
            <img src={loader} className="loader" alt="loader" />
            <div className="shimmer" />
        </>
    )
}
Button.Loader = Loader
