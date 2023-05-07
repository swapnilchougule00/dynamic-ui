import React, { useState } from 'react'
import {  useNavigate } from "react-router-dom";
import google from '../images/google.jpg'
import apple from '../images/apple.jpg'
import { signInWithEmailAndPassword } from "@firebase/auth";
import {auth} from '../Firebase'

function SignIn({handleAuth}) {


  const navigate = useNavigate()
  const [values, setValues] = useState({
      email: '',
      pass: ''
  })

  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!values.email || !values.pass) {
        setErrorMsg('Fill all fields')
        return
    }
    setErrorMsg('')
    signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async () => {

            navigate('/DashBoard')
        })
        .catch((err) => {
            setErrorMsg(err.message)

        })

}


  return (
    <div className=" ">
    <h1 className="font-bold text-[36px] font-body text-[#000000] ">
      Sign In
    </h1>
    <p className="text-[#000000] text-[16px]">Sign in to your account</p>

    <div className="w-full flex space-x-4 mt-4">
      <button className="w-[50%] font-body text-[12px] hover:scale-105 flex items-center justify-center gap-2 bg-white text-[#858585]  h-[30px] rounded-lg">
      <img src={google} alt="google" className='object-contain h-6 rounded-full' />
        Sign in with Google
      </button>
      <button className="w-[50%] font-body text-[12px] hover:scale-105 flex items-center justify-center gap-2 bg-white text-[#858585]  h-[30px] rounded-lg">
        
      <img src={apple} alt="google" className='object-contain h-6 rounded-full' />

        Sign in with Apple
      </button>
    </div>

    <form
      action="#"
      className="bg-white rounded-2xl mt-5 p-6 flex shadow-md flex-col space-y-4"
    >
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="email"
          className="text-[#000000] font-medium text-[16px]  "
        >
          Email address
        </label>
        <input onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
          type="email"
          id="email"
          className="w-[100%] md:w-[330px] bg-[#EAEAEA] h-[40px] rounded-lg p-2 outline-none"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label
          htmlFor="password"
          className="text-[#000000] font-medium text-[16px]  "
        >
          Password
        </label>
        <input onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
          type="password"
          id="password"
          className="w-[100%] md:w-[330px] bg-[#EAEAEA] h-[40px] rounded-lg p-2 outline-none "
        />
      </div>

      <button className="text-[#346BD4] text-[15px] text-left mt-1">
        Forget password?
      </button>

      <p className="text-lg text-red-600">{errorMsg}</p>

      <button onClick={(e) => { handleSubmit(e) }}
       className="w-[330px] bg-[#000000] text-white font-body tracking-wide
       hover:text-[#000000] hover:bg-transparent hover:border font-semibold text-[16px] h-[40px] rounded-lg ">
        Sign In
      </button>
    </form>

    <div className="flex justify-center gap-2 mt-3">
      <p className="text-[#858585]">Don't have an account?</p>
      <button onClick={handleAuth} className="text-[#346BD4] border-b border-b-[#346BD4] hover:scale-105 ">Register Here</button>
    </div>
  </div>
  )
}

export default SignIn
