import './App.css'
import { useRoutes } from 'react-router-dom'
import { Login } from '@/features/auth/login/login'
import { Dashboard } from '@/features/dashboard/dashboard'
import { Register } from '@/features/auth/register/register'
import { Transactions } from '@/features/transactions/transactions'
import { ProtectedRoute } from './components/protected-routes/protected-routes'

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: '/transactions',
      element: (
        <ProtectedRoute>
          <Transactions />
        </ProtectedRoute>
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
