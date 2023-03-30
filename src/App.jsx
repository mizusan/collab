import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Sidebar from './Sidebar'
import Canvas from './Canvas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Canvas />
      <Sidebar />
    </div>
  )
}

export default App
