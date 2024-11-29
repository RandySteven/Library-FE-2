export interface ListGenresResponse {
    id: number
    genre: string
}

export interface GenreDetailResponse {
    id: number
    genre: string
    books: {
        id: number
        image: string
        title: string
        status: string
        rating: number
        created_at: string
        updated_at: string
        deleted_at: any
    }[]
}
