"use client";
import { useGetBagHook } from "@/hooks/bagHook"
import { Fragment } from "react"
import { BookBagCard } from "../Elements/BookCard"

export const BookBagList = () => {
    const bookBagList = useGetBagHook()

    return <>
        <Fragment>
            {
                bookBagList.books.map((content, index) => 
                    <BookBagCard 
                        id={content.id}
                        dataKey={index}
                        title={content.title}
                        image={content.image}
                        key={index}
                    />
                )
            }        
        </Fragment>
    </>
}