import {ChangeEvent, FormEvent, Fragment, useState} from "react";
import {InputLabel} from "@/components/Elements/Input";
import {POST} from "@/api/api";
import {redirect} from "next/navigation";
import {RegisterRequest} from "@/interfaces/apis/onboarding";

export const RegisterForm = () => {

    const [registerRequest, setRegisterRequest] = useState<RegisterRequest>({
        email: "",
        password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setRegisterRequest(prevState => ({
                ...prevState,
                [name]: value,
            }
        ))};

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await POST('onboarding/register', false, loginRequest)
        if (res.status === 404) {
            alert("Record not found. Please check your email and password.");
            return;
        }

        if (res.status !== 200) {
            alert(`Error: ${res.statusText || "An unknown error occurred"}`);
            return;
        }

        redirect('/login')
    }
    return <>
        <Fragment>
            <div className="mx-16 px-8">
                <form method="POST" onSubmit={handleSubmit}
                      className="w-full bg-white my-5 py-5 justify content-center">
                    <InputLabel
                        id={"full_name"}
                        label={} name={"Full Name"}
                        labelFor={} inputType={"full_name"}
                        value={} onChange={handleChange}/>
                    <InputLabel
                        id="email"
                        label="Email"
                        name="email"
                        inputType="email"
                        onChange={handleChange}
                        value={registerRequest.email}
                        labelFor="email"
                    />
                    <InputLabel
                        id="password"
                        name="password"
                        label="Password"
                        inputType="password"
                        onChange={handleChange}
                        value={registerRequest.password}
                        labelFor="password"
                    />
                    <button type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 py-4 mx-6 text-white font-bold">Login
                    </button>
                </form>
            </div>
        </Fragment>
    </>
}