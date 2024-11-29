import { BookDetailProp } from "@/interfaces/props/BookDetailProp"
import { Fragment } from "react"
import { TableData } from "../Elements/TableData"
import { getAuthors, getGenres } from "@/utils/util"

export const BookDetail = (prop : BookDetailProp) => {
    return <>
        <Fragment>
            <div className="grid grid-cols-1 my-2 mx-8">
                <div className="text-center">
                    <h1 className="text-xl font-bold">{prop.title}</h1>
                </div>
                <table className="border border-1 border-black">
                    <tbody>
                        <TableData keyData="Rating" value={prop.rating} />
                        <TableData keyData="Authors" value={getAuthors(prop.authors)} />
                        <TableData keyData="Genres" value={getGenres(prop.genres)} />
                        <TableData keyData="Description" value={prop.description} />
                    </tbody>
                </table>
            </div>
        </Fragment>
    </>
}