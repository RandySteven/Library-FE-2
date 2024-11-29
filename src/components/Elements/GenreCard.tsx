import { GenreProp } from "@/interfaces/props/GenreCardProp"
import Link from "next/link"
import { Fragment } from "react"

export const GenreCard = (props : GenreProp) => {
    return <>
        <Fragment>
            <Link href={`/genres/${props.id}`}>
                <div className="grid grid-cols-1 bg-white border border-black border-1 py-2 rounded px-2 hover:bg-green-200">
                    <div className="text-center ">
                        <span className="text-l font-bold">
                            {props.genre}
                        </span>
                    </div>
                </div>
            </Link>
        </Fragment>
    </>
}