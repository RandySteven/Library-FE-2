"use client";
import { useTokenValidation } from "@/hooks/tokenValidationHook";
import Link from "next/link";
import { Fragment } from "react";

interface AuthButtonProps {
  children?: React.ReactNode;
}

export const AuthButton: React.FC<AuthButtonProps> = ({ children }) => {
    const tokenIsValidated = useTokenValidation()

    return (
        <Fragment>
            <div className="bg-green-300 hover:bg-green-500 text-center text-white font-bold mx-8 py-2">
                {!tokenIsValidated ? (
                    <Link
                        href="/login"
                        className=" "
                    >
                        Sign In
                    </Link>
                ) : (
                    <>{children}</>
                )}
            </div>
        </Fragment>
    );
};
