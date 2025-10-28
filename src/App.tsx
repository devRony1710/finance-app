import './App.css'
import { useRoutes } from 'react-router-dom'
import { Login } from '@/features/auth/login/login'

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Login />,
    },
  ])

  return routes
}

const App = () => {
  return <AppRoutes />
}

export default App
