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
        {!tokenIsValidated ? (
            <div>
            <Link
                href="/login"
                className="w-full text-center bg-slate-200 text-white font-bold"
            >
                Sign In
            </Link>
            </div>
        ) : (
            <>{children}</>
        )}
        </Fragment>
    );
};
