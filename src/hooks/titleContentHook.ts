import { useEffect, useState } from "react"
import { useLocalization } from "./localizationHook"

export const useTitleContentHook = () : string => {
    const localization = useLocalization()

    const [titleContent, setTitleContent] = useState<string>("")

    useEffect(()=> {
        fetch(`/contents/json/${localization}/title.json`).
        then((response)=> {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json()
        }).
        then((data) => setTitleContent(data.title))
    }, [localization])

    return titleContent
}