import { useTokenValidation } from "@/hooks/tokenValidationHook";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

interface AuthButtonProps {
  children?: React.ReactNode;
}

export const AuthButton: React.FC<AuthButtonProps> = ({ children }) => {
    let tokenIsValidated = useTokenValidation()

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
