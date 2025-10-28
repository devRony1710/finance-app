import { createContext, useContext, useMemo, useState, useEffect, useCallback } from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase } from '@/api/config/create-client'
import { supabaseLogin } from '@/api/auth/login/login'

export type AuthContextType = {
  user: unknown
  loginTrigger: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  console.log('🚀 ~ AuthProvider ~ user:', user)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 1. Obtener sesión actual al cargar
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser((session?.user as User) ?? null)
      setLoading(false)
    })

    // 2. Suscribirse a cambios de sesión
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser((session?.user as User) ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const loginTrigger = useCallback(async (email: string, password: string) => {
    const { data, error } = await supabaseLogin({ email, password })

    if (error) throw error

    setUser(data.user as User)
  }, [])

  const logout = useCallback(async () => {
    await supabase.auth.signOut()
    setUser(null)
  }, [])

  const value = useMemo(() => ({ user, loginTrigger, logout }), [user, loginTrigger, logout])

  if (loading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-dashed rounded-full animate-spin" />
      </div>
    )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
