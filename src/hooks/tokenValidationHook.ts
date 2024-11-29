import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export const useTokenValidation = () => {
    const [tokenIsValidated, setTokenIsValidated] = useState(false);

    useEffect(() => {
        const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

        if (token) {
            try {
                const decoded: { exp: number } = jwtDecode(token);
                const currentTime = Date.now() / 1000;
                setTokenIsValidated(decoded.exp > currentTime);
            } catch (error) {
                console.error("Failed to decode token:", error);
            }
        }
    }, []);

    return tokenIsValidated
}