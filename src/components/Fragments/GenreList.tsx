import { useGetGenreList } from "@/hooks/bookPageHook"
import { Fragment } from "react"
import { GenreCard } from "../Elements/GenreCard"
import { GenreListItem } from "../Elements/GenreListItem"

export const GenreCardList = () => {
    let listGenresResponse = useGetGenreList()
    return <>
        <Fragment>
            <div className="bg-slate-100 flex flex-wrap justify-center gap-4 p-4">
                {listGenresResponse.map((content, key) => (
                    <GenreCard id={content.id} genre={content.genre} key={key}/>
                ))}
            </div>
        </Fragment>
    </>
}

export const GenreListList = () => {
    let listGenresResponse = useGetGenreList()
    return <>
        <Fragment>
            <div className="bg-slate-100 flex flex-wrap justify-center gap-4 p-4">
                <ul className="list-disc">
                    {listGenresResponse.map((content, key) => (
                        <GenreListItem id={content.id} genre={content.genre} key={key}/>
                    ))}
                </ul>
            </div>
        </Fragment>
    </>
}