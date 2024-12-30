import { BookBagProp, BookCardProp } from "@/interfaces/props/BookCardProp"
import Link from "next/link"
import { Fragment } from "react"

export const BookCard = (props: BookCardProp) => {
    let statusBgColor = ``
    switch(props.status) {
        case "Available":
            statusBgColor = `bg-green-400`
            break
        case "At Bag":
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
                            <img 
                                className="object-center border border-black" src={props?.image == "" ? "image" : props.image} alt="image" width={200} height={200}/>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-l"> 
                                {props.title}
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 text-center">
                            <div>
                                <span className={`text-white ${statusBgColor} rounded px-1`}>
                                    {props.status}
                                </span>
                            </div>
                            <div className="">
                                {props.rating}
                            </div>
                        </div>
                </Link>
            </div>
        </Fragment>
    </>
}

export const BookBagCard = (props: BookBagProp) => {
    const gray = props.dataKey + 1 % 2 == 0 ? `300` : `200`
    return <>
        <Fragment>
            <Link href={`/books/${props.id}`}>
                <div className={`w-1/2 flex bg-grey-${gray} border border-black text-center object-center`}>
                    <div className={`border w-1/3`}>
                        <img src={props.image} alt="" width={100} height={100}/>
                    </div>
                    <div className="font-bold text-lg border w-2/3">
                        {props.title}
                    </div>
                    <div className="border w-1/3">
                        <img src={`/icons/trash.icon.png`} width={20} height={20}/>
                    </div>
                </div>
            </Link>
        </Fragment>
    </>
}