import React from "react"

function Card({ title, children }) {
  return (
    <div className="bg-white w-[260px] sm:w-[300px] md:w-[320px] 
      shadow-xl hover:shadow-2xl 
      hover:scale-105 transition-all duration-300 
      rounded-xl p-6 text-center cursor-pointer">

      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
        {title}
      </h2>

      <div className="text-gray-600 text-sm">
        {children}
      </div>

    </div>
  )
}

export default Card
