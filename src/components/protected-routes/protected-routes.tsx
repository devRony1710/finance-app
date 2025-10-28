import { supabase } from '@/api/config/create-client'
import type { FC } from 'react'
import { Navigate } from 'react-router-dom'
import type { ProtectedRoutesProps } from './protected-routes.types'

export const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ children }) => {
  const isAuthenticated = supabase.auth.getSession()

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}
