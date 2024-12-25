"use client";
import { AlphabetList } from "@/components/Elements/AlphabetList";
import { GenreListList } from "@/components/Fragments/GenreList"
import { Fragment } from "react"

export const GenresLayout = () => {
    return <>
        <Fragment>
            <AlphabetList />
            <GenreListList />
        </Fragment>
    </>
}