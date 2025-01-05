import {Fragment} from "react";
import {SnackbarProp, SnackbarStatus} from "@/interfaces/props/SnackbarProp";

export const Snackbar = (props : SnackbarProp) => {
    let color = `gray`

    switch(props.status) {
        case SnackbarStatus.SUCCESS:
            color = `green`
            break
        case SnackbarStatus.FAILED:
            color = `red`
            break
        case SnackbarStatus.PENDING:
            color = `yellow`
            break
    }

    return (
        <Fragment>
            <div className={`mx-4 my-2 bg-${color}-300 hover:bg-${color}-400 text-black px-2 w-full`}>
                {props.message}
            </div>
        </Fragment>
    )
}