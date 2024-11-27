import { NavbarContentProp } from "@/interfaces/props/NavbarProp"
import Link from "next/link"

export const NavbarList = (props: NavbarContentProp) => {
    return <>
        <Link href={props.targetLink} 
            className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">
                {props.name}
        </Link>
    </>
}