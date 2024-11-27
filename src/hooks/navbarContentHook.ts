import { NavbarContent } from "@/interfaces/contents/NavbarContent"
import { useEffect, useState } from "react"
import { useLocalization } from "./localizationHook"

export const useNavbarContent = () : NavbarContent[] => {
    const localization = useLocalization()

    const [navbarContents, setNavbarContents] = useState<NavbarContent[]>([])

    useEffect(()=> {
        fetch(`/contents/json/${localization}/navbarMenu.json`).
        then((response)=> {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json()
        }).
        then((data) => setNavbarContents(data.navbarContents))
    }, [localization])

    return navbarContents
}