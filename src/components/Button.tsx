import React, {useContext, createContext, PropsWithChildren} from "react"
import loader from '../loader.svg'

type ButtonContext = {
    props: Props
}

const ButtonContext = createContext<ButtonContext | undefined>(undefined)

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
    counterStyle: 'primary' | 'secondary',
    counterSize: 8 | 12 | 16 | 20 | 24
    stroke: true | false,
    pulse: true | false
}

export type ButtonProps = PropsWithChildren & {
    props: Props
}

const useButtonContext = () => {
    const context = useContext(ButtonContext)
    if (!context) {
        throw new Error('useButtonContext must be used within Button')
    }
    return context
}

export const Button = ({ children, props }: ButtonProps) => {
    let classes = ['button', `size${props.buttonSize}`, `${props.buttonStyle}`]
    if (props.state === 'loading') {
        classes.push('loading')
    } else if (props.state === 'disabled') {
        classes.push('disabled')
    } else if (props.state === 'enabled') {
        classes.push('enabled')
    }

    if (props.counter && props.pulse && (props.counterSize === 8 || props.counterSize === 12)) {
        classes.push('pulse')
    }

    return (
        <ButtonContext.Provider value={{props}}>
            <button
                className={classes.join(' ')}
                onClick={(e) => props.state !== "disabled" ?
                    props.onButtonClick && props.onButtonClick(e.currentTarget) :
                    undefined
                }
            >
                {children}
                <div className="overlay" />
            </button>
        </ButtonContext.Provider>
    )
}

const Label = () => {
    const {props} = useButtonContext()
    return <div className="label">{props.label}</div>
}
Button.Label = Label

const getQuantity = (quantity: number | string) => {
    let newQuantity
    if (typeof quantity === 'number') {
        if (quantity > 99) {
            newQuantity = '99+'
        } else {
            newQuantity = quantity
        }
    } else {
        newQuantity = quantity
        if (newQuantity.length > 3) {
            newQuantity = newQuantity.slice(0, 3)
        }
    }

    return newQuantity
}

const Counter = () => {
    const {props} = useButtonContext()
    if (!props.counter) {
        return <></>
    }

    let classes = ['counter', `size${props.counterSize}`]

    if (props.stroke) {
        classes.push('stroke')
    }

    if (props.counterStyle === 'primary') {
        classes.push('primary')
    } else {
        classes.push('secondary')
    }

    const quantity = getQuantity(props.quantity)

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
