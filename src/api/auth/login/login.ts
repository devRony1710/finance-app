import { supabase } from "@/api/config/create-client";

interface LoginProps {
    email: string;
    password: string;
}

export const supabaseLogin = async ({ email, password }: LoginProps) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw error;
    };

    return {
        error: null,
        data,
    };
}
