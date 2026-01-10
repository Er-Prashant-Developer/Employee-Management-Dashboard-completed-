import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.jpg'

function Login() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (email.length > 5) {
      localStorage.setItem("isLoggedIn", 'true')
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-600 px-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 flex flex-col items-center">

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 mb-4 rounded-full object-cover shadow"
        />

        <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
        <p className="text-gray-500 text-sm mb-6">Login to continue</p>

        {/* Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-xs text-gray-400 mt-4">
          © 2026 Employee Dashboard
        </p>
      </div>

    </div>
  )
}

export default Login
