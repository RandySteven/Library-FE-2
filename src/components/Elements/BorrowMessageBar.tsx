import {Fragment} from "react";

export const BorrowMessageBar = () => {
    return <Fragment>
        <div className={`bg-yellow-400 text-black font-bold text-center mx-16 py-2`}>
            Book currently borrowed by someone please wait until it availabel, thanks :)
        </div>
    </Fragment>
}