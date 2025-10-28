import './App.css'
import { useRoutes } from 'react-router-dom'
import { Login } from '@/features/auth/login/login'
import { ProtectedRoutes } from '@/components/protected-routes/protected-routes'
import { Dashboard } from '@/features/dashboard/dashboard'
import { Register } from '@/features/auth/register/register'

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/dashboard',
      element: (
        <ProtectedRoutes>
          <Dashboard />
        </ProtectedRoutes>
      ),
    },
    {
      path: '/register',
      element: <Register />,
    },
  ])

  return routes
}

const App = () => {
  return <AppRoutes />
}

export default App
