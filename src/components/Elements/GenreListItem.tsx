import { GenreListItemProp } from "@/interfaces/props/GenreListItemProp"
import Link from "next/link"
import { Fragment } from "react"

export const GenreListItem = (prop : GenreListItemProp) => {
    return <>
        <Fragment>
            <li className="text-green-400 hover:font-bold">
                <Link href={`/genres/${prop.id}`}>
                    {prop.genre}
                </Link>
            </li>
        </Fragment>
    </>
}