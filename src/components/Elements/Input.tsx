import { InputProp } from "@/interfaces/props/InputProp"
import { Fragment } from "react"

export const InputLabel = (props: InputProp) => {
    return <>
        <Fragment>
            <div className="w-full px-2 py-2 my-5 px-5 mx-5 grid grid-cols-1">
                <div className="w-full">
                    <label id={props.id} htmlFor={props.labelFor} className="text-black">{props.label}</label>
                </div>
                <div className="w-full">
                    <input name={props.name} type={props.inputType} id={props.id} value={props.value} onChange={props.onChange} className="text-black border border-black w-full px-2 py-2"/>
                </div>
            </div>
        </Fragment>
    </>
}