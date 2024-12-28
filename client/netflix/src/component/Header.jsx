import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const Header = () => {
  return (
    <div className=" fixed z-10 flex justify-between items-center w-[100vw] bg-gradient-to-b from-zinc-900 h-20">
      <img className="w-56" src="https://gateway-fiber.transforms.svdcdn.com/production/images/site/Netflix-Brand-Logo.png?w=600&auto=compress%2Cformat&fit=crop&dm=1661783887&s=acf81ec5587b8b4aa64e62163b9cbdde" alt="" />
      <div className="flex p-10 items-center text-white h-[100%]">
        <div className="border-2 border-slate-500 bg-zinc-900 w-[180px] h-10 rounded-md flex justify-center items-center">
          <MdOutlineArrowDropDownCircle className="text-white scale-150 "/>
          <h1 className="p-5 font-medium">Rahul Kumar</h1>
        </div>
        <div className="p-7 flex justify-evenly items-center w-[250px]">
          <button className="bg-red-600 px-4 py-2 rounded-md font-medium">login</button>
          <button className="bg-red-600 px-4 py-2 rounded-md font-medium">Movies</button>
        </div>
      </div>
    </div>
  )
}

export default Header