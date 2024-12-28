import { useState } from "react"
import Header from "./Header"


const Login = () => {

  const [islogin, setIslogin] = useState(false)

  let loginHandler = (e) =>{
    setIslogin(!islogin)
  }

  return (
    <div>
        <Header />
        <div>
            <img className="w-[100vw] h-[100vh] absolute" src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d-1540x866.jpg" alt="" />
        </div>

        <form action="" className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-1/4 bg-zinc-800 bg-opacity-70 rounded-md border-4 border-gray-700">
          <h1 className="text-center text-3xl p-3 font-bold text-zinc-300 text ">{islogin ? "Sign-up" : "Sign-in"}</h1>
          <div className="flex flex-col justify-around items-center w-[100%] h-[80%] text-zinc-400 ">
            {islogin && 
            <div className="flex flex-col mb-3">

            <label htmlFor="name" className="font-medium text-[20px] mb-2">Name</label>
            <input type="text" id="name" className="p-1 text-pretty font-medium text-black rounded-md" />
            </div>
            }
            <div className="flex flex-col mb-3">

            <label htmlFor="email" className="font-medium text-[20px] mb-2">Email</label>
            <input type="email" id="email" className="p-1 text-pretty font-medium text-black rounded-md"/>
            </div>
            <div className="flex flex-col">

            <label htmlFor="password" className="font-medium text-[20px] mb-2">Password</label>
            <input type="password" id="password" className="p-1 text-pretty font-medium text-black rounded-md" />
            </div>
            <button className="bg-red-600 w-40 py-2 rounded-md font-medium cursor-pointer w-28 text-white mt-8 mb-3">{islogin ? "Create Account" :  "Login" }</button>
            <div className="flex mb-3">

            <p className="text-white">{!islogin ? "New to Netflix" : "Already have an account ?"}</p> <span onClick={loginHandler} className="cursor-pointer text-blue-300 ml-2 font-medium">{!islogin ? "Create Account" : "Login"}</span>
            </div>
          </div>
        </form>
    </div>
  )
}

export default Login