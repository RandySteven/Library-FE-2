'use client'
import { Fragment, useState } from "react"
import { NavbarList } from "../Elements/NavbarList"
import { NavbarComponent } from "../Elements/Navbar"
import { useNavbarContent } from "@/hooks/navbarContentHook"

export const Navbar = () => {
    let navbarContentProp  = useNavbarContent()

    return <>
        <Fragment>
            <NavbarComponent>
                {navbarContentProp.map((content, index) => (
                    <NavbarList 
                        key={index} 
                        targetLink={content.targetLink} 
                        name={content.name} 
                    />
                ))}
            </NavbarComponent>
        </Fragment>
    </>
}