"use client";

import {ChangeEvent, FormEvent, Fragment, useState} from "react";
import {ConfirmRequest} from "@/interfaces/apis/borrow";
import {POST} from "@/api/api";
import {Snackbar} from "@/components/Elements/Snackbar";
import {SnackbarStatus} from "@/interfaces/props/SnackbarProp";

export const ConfirmationForm = () => {
    const [confirmRequest, setConfirmRequest]= useState<ConfirmRequest>({
        borrow_id : ""
    })
    const [showSnackBar, setShowSnackbar] = useState<boolean>(false)

    const formHandler = (e : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setConfirmRequest(prevState => (
            {
                ...prevState,
                [name]: value
            }
        ))
    }

    const onSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await POST('borrows/confirms', true, confirmRequest)
        if(res.status !== 200) {
            alert(`Error: ${res.statusText || "An unknown error occurred"}`);
            return;
        }
        setShowSnackbar(true)
    }

    return (
        <Fragment>
            <div className={`px-4 my-4`}>
                <form method={`POST`} onSubmit={onSubmit}>
                    <div className={`w-full border border-black px-2`}>
                        <input type={`text`} className={`w-full border border-black px-4 py-2 my-5`} name={`borrow_id`}
                               onChange={formHandler} value={confirmRequest.borrow_id}/>
                        <button type={`submit`}
                                className={`w-full text-center bg-green-300 hover:bg-green-500 py-4 font-bold my-2 text-white`}>
                            Confirm
                        </button>
                    </div>
                </form>
                {
                    showSnackBar?
                        <Snackbar status={SnackbarStatus.SUCCESS} message={`success to update book status`} />
                        :
                        <div></div>
                }
            </div>
        </Fragment>
    )
}