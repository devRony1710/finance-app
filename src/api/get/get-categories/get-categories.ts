import { supabase } from "@/api/config/create-client"
import type { GetCategoriesResponse } from "./get-categories.types"

export const getCategories = async (): Promise<GetCategoriesResponse> => {
  const { data, error } = await supabase.from('categories').select('*')

  if (error) {
    throw error
  }

  return {
    data,
  }
}