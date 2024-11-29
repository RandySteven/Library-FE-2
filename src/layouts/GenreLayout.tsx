"use client";
import { GenreDetail } from "@/components/Fragments/GenreDetail"
import { Fragment } from "react"

export const GenreLayout = (prop : {id:string}) => {
    return <>
        <Fragment> 
            <GenreDetail id={prop.id} />
        </Fragment>
    </>
}