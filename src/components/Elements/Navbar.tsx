"use client"
import React, { Fragment, useEffect, useState } from "react";
import { NavbarProps } from "@/interfaces/props/NavbarProp";
import Link from "next/link";
import { useUserNavbar } from "@/hooks/navbarContentHook";

export const LoginedNavbar = () => {
    const getUserLogin = useUserNavbar()
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [language, setLanguage] = useState<string>("en");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    const toggleDropdown = () => {
        setDropdownVisible((prev) => !prev);
    };

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        localStorage.setItem("language", lang); 
        setDropdownVisible(false);
        window.dispatchEvent(new Event("languageChange"));
        window.location.reload()
    };

    return <>
        <Fragment>
            <div>
                <span>{}</span>
                <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                 >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    {getUserLogin.name}
                    <img
                        className="size-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </button>
            </div>
            {isDropdownVisible && (
                <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                >
                    <button
                        onClick={() => handleLanguageChange("jp")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                        role="menuitem"
                        id="user-menu-item-0"
                    >
                        日本語
                    </button>
                    <button
                        onClick={() => handleLanguageChange("en")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                        role="menuitem"
                        id="user-menu-item-1"
                    >
                        EN
                    </button>
                </div>
            )}
        </Fragment>
    </>
}

export const SignInNavbar = () => {
    return <>
        <Fragment>
            <div>
                <Link href={`/login`}>
                    Sign In
                </Link>
            </div>
        </Fragment>
    </>
}

