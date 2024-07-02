import React from "react"
import {Button} from './Button'
import '../styles/index.css'
import {Props} from './Button'
import {ButtonProps} from './Button'


export default {
    title: 'Button',
    component: Button,
    argTypes: {
        props: {
            buttonStyle: {
                type: 'string',
                description: 'Стиль кнопки',
                defaultValue: 'primary',
                options: ['primary', 'secondary'],
                control: {
                    type: 'radio'
                }
            }
        }
    }
}

// // WORKS
// export const ShortLabel = () => {
//     return (
//         <Button
//             props={{
//                 label: "Short label",
//                 buttonStyle: "primary",
//                 buttonSize: 56,
//                 state: "enabled",
//                 counter: false
//             }}
//         >
//             <Button.Label />
//         </Button>
//     )
// }

// const props1: Props = {
//     label: "Short label 2",
//     buttonStyle: "primary",
//     buttonSize: 56,
//     state: "enabled",
//     counter: false
// }

// // Props dont pass
// export const Default = (props: Props) => <Button props={props1} />

// const Template = (args: ButtonProps) => <Button {...args}>
//     <Button.Label />
//     <Button.Counter />
// </Button>

const Template = (args: ButtonProps) => <Button {...args}>
    <Button.Label />
    <Button.Counter />
</Button>

export const Default = Template.bind({})

// Default.args = {
//     props: {
//         label: "Short label",
//         buttonStyle: "primary",
//         buttonSize: 56,
//         state: "enabled",
//         counter: false
//     }
// }

export const DefaultWithCounter = Template.bind({})
// DefaultWithCounter.args = {
//     props: {
//         label: "Short label",
//         buttonStyle: "primary",
//         buttonSize: 56,
//         state: "enabled",
//         counter: true,
//         pulse: false,
//         quantity: 3,
//         counterSize: 24,
//         stroke: true,
//         counterStyle: "primary"
//     }
// }





// export const Default = () => <Button
//     props={{
//         label: "Short label",
//         buttonStyle: "primary",
//         buttonSize: 56,
//         state: "enabled",
//         counter: false
//     }}
// />