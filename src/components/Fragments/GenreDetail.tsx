import { useGetGenre } from "@/hooks/genrePageHook"
import { Fragment } from "react"
import { BookCard } from "../Elements/BookCard"

export const GenreDetail = (prop : {
    id: string
}) => {
    const genre = useGetGenre(prop.id)
    return <>
        <Fragment>
            <h1 className="text-xl">
                {genre.genre} ({genre.books.length})
            </h1>
            <div className="bg-slate-100 flex flex-wrap justify-center gap-4 p-4">
                {
                    genre.books.map((content, key) => (
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