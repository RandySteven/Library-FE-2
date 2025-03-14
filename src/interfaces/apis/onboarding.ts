export interface LoginRequest {
    email: string
    password: string
}

export interface RegisterRequest {
    first_name: string
    last_name: string
    phone_number: string
    email: string
    password: string
    address: string
    year: string
    month: string
    day: string
}

export interface LoginUserResponse {
    id: number
    name: string
    address: string
    phone_number: string
    profile_picture: string
    password: string
    date_of_birth: string
    created_at: string
    updated_at: string
}