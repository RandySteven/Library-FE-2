"use client";
import { BookList } from "@/components/Fragments/BookList";
import { BookMarketingBanner } from "@/components/Fragments/BookMarketingBanner"
import { GenreCardList } from "@/components/Fragments/GenreList";
import { Fragment } from "react"

export const BooksLayout = () => {
    return <>
        <Fragment>
            <div className="px-8 py-4">
                <BookMarketingBanner />
                <div className="grid grid-cols-1">
                    <GenreCardList />
                    <BookList />
                </div>
            </div>
        </Fragment>
    </>
}