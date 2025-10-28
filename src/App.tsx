import './App.css'
import { Button } from '@/components/button/button'
import { Input } from '@/components/input/input'
import { Search } from 'lucide-react'

function App() {
  return (
    <div className="flex flex-col w-full gap-2 p-2">
      <Button label="Button" />
      <Input label="Input" htmlFor="input" id="input" icon={<Search className="w-4 h-4" />} />
    </div>
  )
}

export default App
