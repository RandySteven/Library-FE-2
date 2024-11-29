import { useBookPopularRating } from "@/hooks/homeBodyHook"
import { Fragment } from "react"
import { BookCard } from "../Elements/BookCard"
import { useGetBookList } from "@/hooks/bookPageHook"

export const BookList = () => {
    let listBookResponse = useGetBookList()   

    return <>
        <Fragment>
            <div className="bg-slate-100 flex flex-wrap justify-center gap-4 p-4">
                {
                    listBookResponse.map((content, key) => (
                        <BookCard 
                            id={content.id}
                            key={content.id}
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

export const GenreList = () => {
    return <>
        <Fragment>
            
        </Fragment>
    </>
}