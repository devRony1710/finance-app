import { useNavigate } from 'react-router-dom'

interface UseNavigateContract {
  navigateTo: (path: string) => void
  navigateBack: () => void
}

export const useNavigation = (): UseNavigateContract => {
  const navigate = useNavigate()

  const navigateTo = (path: string) => {
    navigate(path)
  }

  const navigateBack = () => {
    navigate(-1)
  }

  return {
    navigateTo,
    navigateBack,
  }
}
