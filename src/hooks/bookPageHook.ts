import { GET } from "@/api/api"
import { BookDetailResponse, ListBookResponse } from "@/interfaces/apis/book"
import { ListGenresResponse } from "@/interfaces/apis/genre"
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
    const [listBookResponse, setListBookResponse] = useState<ListBookResponse[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GET(`books`, false);
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

export const useGetGenreList = () : ListGenresResponse[] => {
    const [listGenresResponse, setListGenresResponse] = useState<ListGenresResponse[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await GET(`genres`, false)
                if (response) {
                    setListGenresResponse(response.data.genres)
                }
            }catch(error) {
                console.log("Error fetching data:", error)
            }
        }

        fetchData()
    }, [])

    return listGenresResponse
}

export const useBookDetail = (id: string) : BookDetailResponse => {
    const [bookDetailResponse, setBookDetailResponse] = useState<BookDetailResponse>({
        id: 0,
        rating: 0,
        image: "",
        title: "",
        description: "",
        authors: [],
        genres: [],
        created_at: ""
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GET(`books/${id}`, false);
                if (response) {
                    setBookDetailResponse(response.data.book);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData()
    }, [])

    return bookDetailResponse
}