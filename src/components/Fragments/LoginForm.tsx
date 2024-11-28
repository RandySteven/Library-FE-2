"use client";
import { ChangeEvent, FormEvent, Fragment, useState } from "react"
import { InputLabel } from "../Elements/Input"
import { POST } from "@/api/api";
import { redirect } from "next/navigation";
import { LoginRequest } from "@/interfaces/apis/onboarding";

export const LoginForm = () => {
    const [loginRequest, setLoginRequest] = useState<LoginRequest>({
        email: "",
        password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setLoginRequest(prevState => ({
          ...prevState,
          [name]: value,
        }
    ))};

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await POST('onboarding/login', false, loginRequest)
        document.cookie = `token=${res.data.user.token}; path=/; secure; SameSite=Strict`;
        redirect('/books')
    }

    return <>
        <Fragment>
            <div className="mx-16 px-8">
                <form method="POST" onSubmit={handleSubmit} className="w-full bg-white my-5 py-5 justify content-center">
                    <InputLabel 
                        id="email"
                        label="エマイル"
                        name="email"
                        inputType="email"
                        onChange={handleChange}
                        value={loginRequest.email}
                        labelFor="email"
                    />
                    <InputLabel 
                        id="password"
                        name="password"
                        label="パスワルド"
                        inputType="password"
                        onChange={handleChange}
                        value={loginRequest.password}
                        labelFor="password"
                    />
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 py-4 mx-6 text-white">ロギン</button>
                </form>
            </div>

        </Fragment>    
    </>
}