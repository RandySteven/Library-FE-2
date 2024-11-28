import { useGetGenreList } from "@/hooks/bookPageHook"
import { Fragment } from "react"
import { GenreCard } from "../Elements/GenreCard"

export const GenreList = () => {
    let listGenresResponse = useGetGenreList()
    return <>
        <Fragment>
            <div className="bg-slate-100 flex flex-wrap justify-center gap-4 p-4">
                {listGenresResponse.map((content, key) => (
                    <GenreCard genre={content.genre} key={key}/>
                ))}
            </div>
        </Fragment>
    </>
}