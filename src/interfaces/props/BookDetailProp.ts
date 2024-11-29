interface Author{
    id: number,
    name: string
}

interface Genre {
    id: number,
    genre: string
}

export interface BookDetailProp {
    rating: number,
    title: string,
    description: string,
    authors: Author[],
    genres: Genre[],
    createdAt: string
}