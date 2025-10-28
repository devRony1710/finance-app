import { supabase } from "@/api/config/create-client";

interface LoginProps {
    email: string;
    password: string;
}

export const login = async ({ email, password }: LoginProps) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.error(error);
        return {
            error: "Hubo un error al iniciar sesión",
            data: null,
        };
    };

    return {
        error: null,
        data,
    };
}
