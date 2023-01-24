import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault()

    fetch('https://acmeinc-api.onrender.com/api/auth/signup', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          navigate('/')
        } else {
          alert('User already exists')
          navigate('/')
        }
      })
  }
  return (
    <div class='bg-gray-500 min-h-screen flex flex-col'>
      <div class='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div class='bg-white px-6 py-8 rounded-lg shadow-lg shadow-black text-black w-full'>
          <h1 class='mb-8 text-3xl text-center'>Sign Up</h1>
          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='fullname'
            placeholder='Full Name'
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            class='w-full text-center py-3 rounded bg-indigo-500 text-white hover:bg-indigo-800 focus:outline-none my-1'
            onClick={handleSignUp}
          >
            Sign Up
          </button>

          <div class='text-center text-sm text-grey-dark mt-4'>
            By signing up, you agree to the Terms of Service and Privacy Policy
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
