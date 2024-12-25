import { useGetBagHook } from "@/hooks/bagHook"
import Link from "next/link"
import { Fragment } from "react"

export const BagNavbarIcon = () => {
    const userBagResponse = useGetBagHook()
    return <>
        <Fragment>
            <div>
                <Link href={`/bags`}>
                    {
                        userBagResponse.books != null ? 
                            <span className="rounded-full bg-yellow-400 text-black text-sm px-1">
                                {userBagResponse.books.length}
                            </span>
                        :
                        ``
                    }
                    <img src='/icons/bag.icon.png' alt="" />
                </Link>
            </div>
        </Fragment>
    </>
}