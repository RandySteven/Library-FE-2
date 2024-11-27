import { GET } from "@/api/api"
import { ListBookResponse } from "@/interfaces/apis/book"
import { MarketingBannerContent } from "@/interfaces/contents/MarketingBannerContent"
import { useEffect, useState } from "react"

export const useMarketingBannerImagePath = () : MarketingBannerContent[] => {
    const [marketingBannerContent, setMarketingBannerContent] = useState<MarketingBannerContent[]>([])

    useEffect(()=>{
        fetch(`/contents/json/en/marketingBanner.json`).
        then((response)=> {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json()
            }
        ).
        then((data) => setMarketingBannerContent(data.marketingBanners))
    }, [])

    return marketingBannerContent
}

export const useGetBookList = () : ListBookResponse[] => {
    let [listBookResponse, setListBookResponse] = useState<ListBookResponse[]>([])

    useEffect(() => {
        let fetchData = async () => {
            try {
                const response = await GET(`books`, true);
                if (response) {
                    setListBookResponse(response.data.books);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData()
    }, [])

    return listBookResponse
}