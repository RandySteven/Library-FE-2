import { Fragment } from "react"
import { BookCard } from "../Elements/BookCard"
import { useGetBookList } from "@/hooks/bookPageHook"

export const BookList = () => {
    const bookPaginationResponse = useGetBookList()

    return <>
        <Fragment>
            <div className="bg-slate-100 flex flex-wrap justify-center gap-4 p-4">
                {
                    bookPaginationResponse.books.map((content, key) => (
                        <BookCard
                            key={key}
                            id={content.id}
                            title={content.title}
                            image={content.image}
                            status={content.status}
                            rating={content.rating}
                            />
                    ))
                }
            </div>
        </Fragment>
    </>
}