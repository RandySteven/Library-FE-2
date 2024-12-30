import {Fragment, useState} from "react"
import {useAddToBagHook} from "@/hooks/bagHook";
import {Snackbar} from "@/components/Elements/Snackbar";
import {SnackbarStatus} from "@/interfaces/props/SnackbarProp";

export const AddToBagForm = (props : {id: number}) => {
    const [request, setRequest] = useState<{ book_id: number }>({
        book_id: 0
    });

    let success = false

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setRequest({ book_id: props.id });
        console.log(request)

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const addBagBookResponse = useAddToBagHook(request);
        if(addBagBookResponse) {
            success = true
        }
    };


    return <>
        <Fragment>
            <form action="" onSubmit={handleSubmit} method="POST">
                <input type="hidden" value={props.id} name="book_id"/>
                <button type="submit">Add to bag</button>
            </form>
            {success (
                <Snackbar status={SnackbarStatus.SUCCESS} message={`success to add new book`} />
            )}
        </Fragment>
    </>
}