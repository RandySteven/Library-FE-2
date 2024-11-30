"use client";
import { GenreDetail } from "@/components/Fragments/GenreDetail"
import { Fragment } from "react"

export const GenreLayout = (prop : {id:string}) => {
    return <>
        <Fragment> 
            <div className="px-4">
                <GenreDetail id={prop.id} />
            </div>
        </Fragment>
    </>
}