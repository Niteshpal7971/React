import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {

  return (
    <>
    {/* <h1 className=' text-3xl text-center m-3 font-serif'>Learn about Redux Toolkit</h1> */}
    < AddTodo />
    < Todos />
    </>
  )
}

export default App
