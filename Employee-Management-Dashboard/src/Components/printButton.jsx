function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="
        bg-purple-600 text-white 
        px-4 py-2 rounded-lg 
        font-semibold text-sm
        shadow-md
        hover:bg-purple-700 
        hover:scale-105 
        transition-all
        flex items-center gap-2
      "
    >
      🖨️ Print List
    </button>
  )
}

export default PrintButton
