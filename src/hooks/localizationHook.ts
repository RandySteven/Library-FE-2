import { useEffect, useState } from "react";

export const useLocalization = (): string => {
    const [localization, setLocalization] = useState<string>(() => {
        return localStorage.getItem("language") ?? "en";
    });

    useEffect(() => {
        const handleStorageChange = () => {
            const updatedLocalization = localStorage.getItem("language") ?? "en";
            setLocalization(updatedLocalization);
        };

        // Listen for changes to localStorage
        window.addEventListener("storage", handleStorageChange);

        // Cleanup event listener on unmount
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    return localization;
};
