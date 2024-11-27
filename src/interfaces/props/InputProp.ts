import { ChangeEvent } from "react"

export interface InputProp {
    id: string
    label: string
    name: string
    labelFor: string
    inputType: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=> void
}