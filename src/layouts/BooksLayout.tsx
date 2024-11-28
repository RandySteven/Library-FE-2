"use client";
import { BookList } from "@/components/Fragments/BookList";
import { BookMarketingBanner } from "@/components/Fragments/BookMarketingBanner"
import { GenreList } from "@/components/Fragments/GenreList";
import { Fragment } from "react"

export const BooksLayout = () => {
    return <>
        <Fragment>
            <div className="px-8 py-4">
                <BookMarketingBanner />
                <div className="grid grid-cols-1">
                    <GenreList />
                    <BookList />
                </div>
            </div>
        </Fragment>
    </>
}