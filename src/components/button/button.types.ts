import type { ButtonHTMLAttributes } from "react";

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'outline'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    size?: ButtonSize
    variant?: ButtonVariant
}
