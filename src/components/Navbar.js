import Links from "./Links"
function Navbar() {
  return ( 
    <div className="flex justify-between items-center bg-gray-400 w-[1050px]">
      <h1 className="mx-16 font-semibold text-white">LOGONAME</h1>
      <ul className="flex items-center p-3 m-3">
          <Links/>
      </ul>
    </div>
  )
}

export default Navbar
