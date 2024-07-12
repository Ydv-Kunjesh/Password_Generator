import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // use callbck to generate password 
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(pass)




  }, [numberAllowed, charAllowed, length, setPassword])

  // use effect to generate password 
  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator, length, numberAllowed, charAllowed])

  // use ref to copy password
  const passwordRef = useRef(null)

  const copy = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  })
  //  {
  //   passwordRef.current?.select()
  //   window.navigator.clipboard.writeText(password)
  // }



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md  bg-gray-700
rounded-xl px-4 my-40 text-orange-500 h-80 gap-y-2 '>
        <h1 className="text-white text-center my-3 text-3xl font-bold ">Password Generator</h1>

        <div className='className="flex shadow rounded-lg overflow-hidden w-2/3 mx-auto "'>
          <input type="text"
            value={password}
            className=" outline-none w-full-3/4 flex-1 px-3 py-1 my-10"
            // 
            readOnly
            ref={passwordRef}
          />
          <button className='bg-blue-500 hover:bg-blue-700 text-white py-1 shrink-0 px-3' onClick={copy}>copy</button>
        </div>

        <div className='flex text-center gap-x-2 '>

          <div className='flex gap-x-1 items-center'>
            <input type="range"
              min={4}
              max={12}
              value={length}
              className='cursor-pointer colors-blue-500'
              onChange={(e) => setLength(e.target.value)}
            />
            <span> <label> Length</label>  {length}</span>
          </div>

          <div className='flex gap-x-1 items-center'>
            <input type="checkbox"
              id="numberAllowed"
              value={numberAllowed}
              onChange={(e) => setNumberAllowed((prev => !prev))} />
            <span> <label>Numbers</label></span>
          </div>

          <div className='flex gap-x-1 items-center'>
            <input type="checkbox"
              id="charAllowed"
              value={charAllowed}
              onChange={(e) => setCharAllowed((prev => !prev))} />
            <span> <label>Characters</label> </span>
          </div>
        </div>


        <div class="flex w-full flex-col items-center justify-center rounded-lg border border-white-200 p-8 shadow-md bg-pink-800 text-white">
          <div className='flex gap-x-1 items-center px-4 mx-4'>
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 fill-current text-gray-500"
              viewBox="0 0 24 24">
              <path fill-rule="evenodd"
                d="M0 3.75A.75.75 0 01.75 3h7.497c1.566 0 2.945.8 3.751 2.014A4.496 4.496 0 0115.75 3h7.5a.75.75 0 01.75.75v15.063a.75.75 0 01-.755.75l-7.682-.052a3 3 0 00-2.142.878l-.89.891a.75.75 0 01-1.061 0l-.902-.901a3 3 0 00-2.121-.879H.75a.75.75 0 01-.75-.75v-15zm11.247 3.747a3 3 0 00-3-2.997H1.5V18h6.947a4.5 4.5 0 012.803.98l-.003-11.483zm1.503 11.485V7.5a3 3 0 013-3h6.75v13.558l-6.927-.047a4.5 4.5 0 00-2.823.971z">
              </path>
            </svg>
          </div>
          <div class="mt-8 text-center">
            <h1 class="text-4xl">Use Cases of Hooks in React </h1>
            
          </div>
          <button class="mt-8 block rounded-lg border border-green-700 bg-green-600 py-1.5 px-4 font-medium text-white transition-colors hover:bg-green-700 active:bg-green-800 disabled:opacity-50">
            <a href="https://github.com/Ydv-Kunjesh">Connect on Github</a>
          </button>
          <button class="mt-2 block rounded-lg bg-white-500 py-1.5 px-4 font-medium text-blue-600 transition-colors hover:bg-gray-100 active:bg-white-200 disabled:opacity-50">
            <a href="https://updated-q4zo.onrender.com/">Portfolio</a>
          </button>
        </div>

      </div>



    </>
  )
}

export default App
