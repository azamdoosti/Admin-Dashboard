import { useState } from 'react'
import Login from './features/identity/components/login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
    </>
  )
}

export default App
