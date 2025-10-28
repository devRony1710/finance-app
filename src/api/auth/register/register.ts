import { supabase } from "@/api/config/create-client"
import type { RegisterFormValuesSupabase } from "./register.types"

export const supabaseRegister = async (formData: RegisterFormValuesSupabase) => {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData.name,
        lastName: formData.lastName,
      },
    },
  })

  if(error) {
    throw error
  }

  return data
}