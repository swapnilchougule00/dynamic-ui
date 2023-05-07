import React, { useState } from 'react'
import SignIn from './SignIn'
import Register from './Register'

function Login() {
  const [show, setShow] = useState(true)

  const handleAuth = () => {
    setShow(!show)
  }

  return (
    <div className="min-h-screen  flex flex-col md:flex-row md:flex overflow-hidden">
      <div className="w-full h-[26vh] md:h-screen md:w-1/3 bg-black flex justify-center items-center">
        <h1 className="font-body text-white text-5xl font-bold tracking-wide">
          Board.
        </h1>
      </div>

      <div className=" md:w-2/3 flex items-center h-[69vh] md:h-[100vh] justify-center bg-gray-100">
        {show ? <SignIn handleAuth={handleAuth}/> : <Register handleAuth={handleAuth}/>}
      </div>
    </div>
  )
}

export default Login
