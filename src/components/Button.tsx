import React, {useContext, createContext, PropsWithChildren} from "react"

type ButtonGroupContext = {
    props: Props
}

const ButtonGroupContext = createContext<ButtonGroupContext | undefined>(undefined)

type CommonProps = {
    label: string,
    buttonStyle: 'primary' | 'secondary',
    buttonSize: 28 | 36 | 56,
    state: 'enabled' | 'loading' | 'disabled',
}

type Props = CommonProps & {
    counter: false
} | CommonProps & {
    counter: true,
    quantity: number | string,
    // counterStyle: 'primary' | 'secondary',
    // stroke: true | false,
    // pulse: true | false
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
    return (
        <ButtonGroupContext.Provider value={{props}}>
            <button className="button">
                {children}
            </button>
        </ButtonGroupContext.Provider>
    )
}

const Label = () => {
    const {props} = useButtonGroupContext()
    return <div className="label">{props.label}
    </div>
}
Button.Label = Label

const Counter = () => {
    const {props} = useButtonGroupContext()
    return <div className="counter">
        <div className="quantity">{props.counter && props.quantity}</div>
    </div>
}
Button.Counter = Counter

const ProgressIndicator = () => {
    // const {props} = useButtonGroupContext()
    return <div>Loading...</div>
}
Button.ProgressIndicator = ProgressIndicator
