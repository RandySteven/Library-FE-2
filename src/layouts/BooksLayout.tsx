"use client";
import { BookList } from "@/components/Fragments/BookList";
import { BookMarketingBanner } from "@/components/Fragments/BookMarketingBanner"
import { Fragment } from "react"

export const BooksLayout = () => {
    return <>
        <Fragment>
            <div className="px-8 py-4">
                <BookMarketingBanner />
                <div className="flex my-4">
                    <BookList />
                </div>
            </div>
        </Fragment>
    </>
}