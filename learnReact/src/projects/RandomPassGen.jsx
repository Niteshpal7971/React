import React from 'react'
import { useState } from 'react'
import { useCallback, useEffect, useRef } from 'react';


function PassWordGenerator() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "01423456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+=[]{}~`"
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])

  return (
    <div className='w-full h-screen  mt-2'>
      <div className="w-md max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-4xl text-center text-white" >Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden m-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef} />
          <button onClick={copyToClipBoard} className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 mx-4">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='curser-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>Length:{length}</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => { setNumberAllowed((prev) => !prev) }}
              className="ml-3" />
            <label>Number{numberAllowed}</label>

            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => { setCharAllowed((prev) => !prev) }}
              className="ml-3" />
            <label>Charectors{charAllowed}</label>
          </div>
        </div>
      </div>
    </div>

  )

}

export default PassWordGenerator