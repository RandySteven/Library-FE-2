"use client"
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    tokenIsValidated: false,
    setTokenIsValidated: {},
    logout: () => {},
    validateToken : () => {}
})

export const AuthProvider : React.FC<{
    children: React.ReactNode
}> = ({ children }) => {

    const [tokenIsValidated, setTokenIsValidated] = useState(false);

    const logout = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setTokenIsValidated(false);
    };

    const validateToken = () => {
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
    }

    return (
        <AuthContext.Provider value={{ tokenIsValidated, setTokenIsValidated, logout, validateToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
