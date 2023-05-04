import React, { useState } from 'react'
import { createUserWithEmailAndPassword , updateProfile} from "@firebase/auth";
import {auth} from '../Firebase'
import { useNavigate } from 'react-router-dom';


function Register({handleAuth}) {

  const navigate = useNavigate()

  const [values, setValues] = useState({
    name: '',
    email: '',
    pass: ''
})

const [errorMsg , setErrorMsg] = useState('')

const handleSubmit = (e)=>{
  e.preventDefault()
  if(!values.name || !values.email || !values.pass){
      setErrorMsg('Fill all fields')
      return
  }
  setErrorMsg('')
  createUserWithEmailAndPassword(auth , values.email, values.pass)
  .then(async (res)=>{
      const user = res.user
      await updateProfile(user,{
          displayName:values.name
      });
      navigate('/DashBoard')
  })
  .catch((err)=>{
      setErrorMsg(err.message)

  })

}

  return (


    <div className=" ">
    <button onClick={handleAuth} className='mb-4 border p-2 border-black/70 rounded-2xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>
</button>

    <h1 className="font-bold text-[36px] font-body text-[#000000] ">
      Register
    </h1>
   

    <form
      action="#"
      className="bg-white rounded-2xl mt-5 p-6 flex shadow-md flex-col space-y-4"
    >
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="name"
          className="text-[#000000] font-medium text-[16px]  "
        >
          Name
        </label>
        <input onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
          type="name"
          id="name"
          className="w-[330px] bg-[#EAEAEA] h-[40px] rounded-lg p-2 outline-none"
        />
      </div>

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
          className="w-[330px] bg-[#EAEAEA] h-[40px] rounded-lg p-2 outline-none"
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
          className="w-[330px] bg-[#EAEAEA] h-[40px] rounded-lg p-2 outline-none "
        />
      </div>
      
      <p className="text-lg text-red-600">{errorMsg}</p>
      <button  onClick={(e)=>handleSubmit(e)}
      className="w-[330px] bg-[#000000] text-white font-body tracking-wide
       hover:text-[#000000] hover:bg-transparent hover:border font-semibold text-[16px] h-[40px] rounded-lg ">
        Register
      </button>
    </form>

    
  </div>
  )
}

export default Register
