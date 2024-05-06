import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div className='text-3xl font-bold underline'>Context API</div>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
