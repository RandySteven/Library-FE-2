export interface ListBookResponse {
    id: number,
    image: string,
    title: string,
    status: string,
    rating: number,
    created_at: string,
    updated_at: string,
    deleted_at: any
}

interface Author {
    id: number,
    name: string
}

interface Genre {
    id: number,
    genre: string
}

export interface BookDetailResponse {
    id: number,
    rating: number,
    image: string,
    title: string,
    description: string,
    status: string,
    authors: Author[],
    genres: Genre[],
    created_at: string
}