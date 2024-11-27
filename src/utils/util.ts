import { useEffect, useState } from "react";

export const getLocalization = () : string=> {
    const local = localStorage.getItem("language") ?? "en"; 
    return local
}