import { Fragment, useState } from "react"
import { AddToBagButton } from "../Elements/AddToBagButton"
import { useAddToBagHook } from "@/hooks/bagHook";

export const AddToBagForm = (props : {id: number}) => {
    const [request, setRequest] = useState<{ book_id: number }>({
        book_id: 0
    });

    let addBagBookResponse = null

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setRequest({ book_id: props.id });
        console.log(request)
        addBagBookResponse = useAddToBagHook(request);
    };


    return <>
        <Fragment>
            <form action="" onSubmit={handleSubmit} method="POST">
                <input type="hidden" value={props.id} name="book_id"/>
                <button type="submit">Add to bag</button>
            </form>
            {addBagBookResponse != null && (
                <p>Book added to bag!</p>
            )}
        </Fragment>
    </>
}