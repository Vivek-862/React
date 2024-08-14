import { useState,useCallback,useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength]= useState(8); //this hook is use to set state of component.
  const [number, setNumber]= useState(false);
  const [character, setCharacter]= useState(false);
  const [password, setPassword]= useState("");


  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(character) str += "!@#$%^&*(){}~_[]"

    for(let i=1; i <= length; i++){
      let char = Math.floor(Math.random * str.length + 1)

      pass =str.charAt(char)

    }

    setPassword(pass)


  },[length, number, character, setPassword]);

  useEffect(()=>{
    passwordGenerator()

  },[length, number, character, passwordGenerator])

  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className="text-white text-center text-xl">Password Generator</h1>
       <div className="flex shadow rounded-lg overflow-hidden mb-6 py-4">
        <input 
        type="text" 
        className="outline-none w-full py-2 px-3" 
        value={password}
        placeholder='password'
        readOnly
        />
        <button className="bg-blue-400 text-white px-1 ml-2 font-bold py-0.5 shrink-0">Copy</button>
       </div>
       <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{
            setLength(e.target.value)
          }}
          />
          <label>Length:{length}</label>


        </div>
        <div className="flex items-center gap-x-1">
        <input 
          type="checkbox" 
          defaultChecked={number}
          id="numberInput"
          value={length}
          className="cursor-pointer"
          onChange={()=>{
            setNumber((prev)=> !prev)
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
          {/* <label>Length:{number}</label> */}
        </div>
        <div className="flex items-center gap-x-1">
        <input 
          type="checkbox" 
          defaultChecked={character}
          id="characterInput"
          value={length}
          className="cursor-pointer"
          onChange={()=>{
            setCharacter((prev)=> !prev)
          }}
          />
          <label htmlFor="characterInput">Characters</label>
          {/* <label>Length:{number}</label> */}
        </div>
       </div>
      </div>
      
    </>
  )
}

export default App
