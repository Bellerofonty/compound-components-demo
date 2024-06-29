import React, {useContext, createContext, PropsWithChildren} from "react"

type ButtonGroupContext = {
    props: Props
}

const ButtonGroupContext = createContext<ButtonGroupContext | undefined>(undefined)

type Props = {
    title?: string,
    counterValue?: number,
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

export const ButtonGroup = ({ children, props }: ButtonGroupProps) => {
    return (
        <ButtonGroupContext.Provider value={{props}}>
            <div className="button-group">
                {children}
            </div>
        </ButtonGroupContext.Provider>
    )
}

const Button = () => {
    const {props} = useButtonGroupContext()
    return <button>{props.title}</button>
}
ButtonGroup.Button = Button

const Counter = () => {
    const {props} = useButtonGroupContext()
    return <div>{props.counterValue}</div>
}
ButtonGroup.Counter = Counter

const ProgressIndicator = () => {
    // const {props} = useButtonGroupContext()
    return <div>Loading...</div>
}
ButtonGroup.ProgressIndicator = ProgressIndicator
