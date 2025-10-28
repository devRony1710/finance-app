import './App.css'
import { Button } from '@/components/button/button'
import { Input } from '@/components/input/input'

function App() {
  return (
    <div className="flex flex-col gap-2 p-2">
      <Button label="Button" />
      <Input label="Input" htmlFor="input" id="input" />
    </div>
  )
}

export default App
