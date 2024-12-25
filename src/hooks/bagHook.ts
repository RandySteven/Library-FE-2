import { GET, POST } from "@/api/api"
import { AddBagBookResponse, AddUserBagRequest, UserBagResponse } from "@/interfaces/apis/bag"
import { useEffect, useState } from "react"

export const useGetBagHook = () : UserBagResponse => {
    const [userBagResponse, setUserBagResponse] = useState<UserBagResponse>({
        books: []
    })

    useEffect(() => {
        let fetchData = async () => {
            try{
                const response = await GET(`/bags`, true)
                if(response) {
                    setUserBagResponse(response.data.bag)
                }
            }catch(error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    return userBagResponse
}

export const useAddToBagHook = ( request : AddUserBagRequest ) : AddBagBookResponse | null => {
    const [addBagBookResponse, setAddBagBookResponse] = useState<AddBagBookResponse | null>(null)

    useEffect(() => {
        let fetchData = async () => {
            try {
                const response = await POST('bags', true, request)
                if(response) {
                    setAddBagBookResponse(response.data.book)
                }
            }catch(error) {
                console.log(error)
            }
        }

        fetchData()
    }, [request])

    return addBagBookResponse
}