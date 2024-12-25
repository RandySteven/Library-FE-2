export interface UserBagResponse {
    books: {
        id: number
        title: string
        image: string
    }[]
}

export interface AddUserBagRequest {
    book_id: number
}

export interface AddBagBookResponse {
    book_id : number
}