import { ReactNode } from "react";

export interface NavbarProps {
    children?: ReactNode;
}

export interface NavbarContentProp {
    targetLink: string
    name: string
}