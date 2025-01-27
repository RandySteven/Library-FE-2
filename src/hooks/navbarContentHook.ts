import { NavbarContent } from "@/interfaces/contents/NavbarContent"
import { useEffect, useState } from "react"
import { useLocalization } from "./localizationHook"
import { LoginUserResponse } from "@/interfaces/apis/onboarding"
import { GET } from "@/api/api"

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

export const useUserNavbar = () : LoginUserResponse=> {
    const [loginUserResponse, setLoginUserResponse] = useState<LoginUserResponse>({
        id: 0,
        name: "",
        address: "",
        phone_number: "",
        profile_picture: "",
        password: "",
        date_of_birth: "",
        created_at: "",
        updated_at: ""

    })

    useEffect(()=> {
         const fetchData = async () => {
            try {
                const response = await GET(`onboarded`, true);
                if (response) {
                    setLoginUserResponse(response.data.user);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData()
    }, [])

    return loginUserResponse
}