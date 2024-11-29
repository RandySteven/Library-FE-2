import { NavbarContentProp } from "@/interfaces/props/NavbarProp"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavbarList = (props: NavbarContentProp) => {
    const pathName = usePathname()
    let selectedBgColor = pathName == props.targetLink ? `bg-green-300 text-white` : ``
    return <>
        <Link href={props.targetLink} 
            className={
                `rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-green-300 hover:text-white hover:font-bold ${selectedBgColor}`
            }>
                {props.name}
        </Link>
    </>
}