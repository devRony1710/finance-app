import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    htmlFor: string
    errors?: string
    icon?: ReactNode
}