import { GET } from "@/api/api";
import { GenreDetailResponse } from "@/interfaces/apis/genre";
import { useEffect, useState } from "react";

export const useGetGenre = (id : string) : GenreDetailResponse => {
    const [genreDetailResponse, setGenreDetailResponse] = useState<GenreDetailResponse>({
        id: 0,
        genre: ``,
        books: []
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GET(`genres/${id}`, false);
                if (response) {
                    setGenreDetailResponse(response.data.genre);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }            
        }

        fetchData()
    }, [])

    return genreDetailResponse
}