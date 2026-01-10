import React from 'react'

function SearchFilter({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search by name..."
      className="
        w-full sm:w-64
        border border-gray-300 
        px-4 py-2 
        rounded-lg 
        shadow-sm
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500
        transition
      "
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchFilter
