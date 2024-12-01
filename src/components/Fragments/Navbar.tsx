'use client'
import { Fragment, useState } from "react"
import { NavbarList } from "../Elements/NavbarList"
import { useNavbarContent } from "@/hooks/navbarContentHook"
import { LoginedNavbar, SignInNavbar } from "../Elements/Navbar";
import { useTokenValidation } from "@/hooks/tokenValidationHook";

export const Navbar = () => {
    // window.location.reload()
    let navbarContentProp  = useNavbarContent()
    const tokenIsValidated = useTokenValidation()

    return (
        <>
            <Fragment>
                <nav className="bg-green-100">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                    {navbarContentProp.map((content, index) => (
                                        <NavbarList 
                                            key={index} 
                                            targetLink={content.targetLink} 
                                            name={content.name} 
                                        />
                                    ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="relative ml-3">
                                    {tokenIsValidated ? <LoginedNavbar/> : <SignInNavbar />}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </Fragment>
        </>
    );
};