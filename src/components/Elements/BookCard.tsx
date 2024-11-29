import { BookCardProp } from "@/interfaces/props/BookCardProp"
import Link from "next/link"
import { Fragment } from "react"

export const BookCard = (props: BookCardProp) => {
    let statusBgColor = ``
    switch(props.status) {
        case "Available":
            statusBgColor = `bg-green-400`
            break
        case "AtBag":
            statusBgColor = `bg-green-500`
            break
        case "Ready to Take":
            statusBgColor = `bg-blue-400`
            break
        case "Borrowed":
            statusBgColor = `bg-yellow-500`
            break
        case "Expired":
            statusBgColor = `bg-red-500`
            break
    }
    return <>
        <Fragment>
            <div className="grid grid-cols-1 bg-white border border-green-300 py-5 hover:bg-green-200">
                <Link
                    href={`/books/${props.id}`}>
                        <div className="px-2">
                            <img className="object-center border border-black" src={props?.image == "" ? "image" : props.image} alt="image" width={200} height={400}/>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-l"> 
                                {props.title}
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 text-center">
                            <span className={`text-white ${statusBgColor} rounded mx-2`}>
                                {props.status}
                            </span>
                            <div className="">
                                {props.rating}
                            </div>
                        </div>
                </Link>
            </div>
        </Fragment>
    </>
}