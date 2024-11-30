import { useGetGenre } from "@/hooks/genrePageHook"
import { Fragment } from "react"
import { BookCard } from "../Elements/BookCard"

export const GenreDetail = (prop : {
    id: string
}) => {
    const genre = useGetGenre(prop.id)
    return <>
        <Fragment>
            <h1 className="text-4xl font-bold text-green-300 text-center">
                {genre.genre} 
            </h1>
            <p className="text-center">
                Number of books : <span className="font-bold"> ({genre.books.length}) </span>
            </p>
                {
                    genre.books.length > 0 ? (
                        <div className="bg-slate-100 flex flex-wrap justify-center gap-4 p-4">            
                            {genre.books.map((content, key) => (
                                <BookCard 
                                    id={content.id}
                                    key={key}
                                    title={content.title}
                                    image={content.image}
                                    status={content.status}
                                    rating={content.rating}
                                    />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center">
                            Book list still empty
                        </div>
                    )
                }
        </Fragment>
    </>
}