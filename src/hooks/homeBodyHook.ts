import { POST } from "@/api/api";
import { ListBookResponse } from "@/interfaces/apis/book";
import { AboutUsContent } from "@/interfaces/contents/AboutUsContent";
import { useEffect, useState } from "react";
import { useLocalization } from "./localizationHook";

export const useAboutUsContentHook = () : AboutUsContent => {
    const localization = useLocalization()
    const [aboutUsContent, setAboutUsContent] = useState<AboutUsContent>({
        welcomeMessage: "",
        mission: "",
        services: [],
        whyChooseUs: {
            points: []
        },
        values: [],
        closingMessage: "",
        contactInfo: {
            message: ""
        }
    })

    useEffect(()=>{
        fetch(`/contents/json/${localization}/aboutUs.json`).
        then((response)=> {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json()
            }
        ).
        then((data) => setAboutUsContent(data.aboutUs)).
        catch((error) => console.log(error))
    }, [localization])

    return aboutUsContent
}

export const useBookPopularRating = () : ListBookResponse[] => {
    let [listBookResponse, setListBookResponse] = useState<ListBookResponse[]>([])

    useEffect(() => {
        let fetchData = async () => {
            try {
                const response = await POST(`ratings/sort`, false, {
                    sort: "DESC",
                    limit: 5
                });
                if (response) {
                    setListBookResponse(response.data.books);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData()
    }, [])

    console.log(listBookResponse)

    return listBookResponse
}