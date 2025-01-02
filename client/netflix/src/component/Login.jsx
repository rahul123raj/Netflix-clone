import { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/Api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";

const Login = () => {
  const [islogin, setIslogin] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  // console.log(isLoading);

  const getInputData = async (e) => {
    e.preventDefault();
    // console.log(name, email, password)
    dispatch(setLoading(true));
    if (!islogin) {
      //?Login
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/user/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        // console.log(res)
        if (res.data.success) {
          navigate("/browser");
          toast.success(res.data.message);
        }

        dispatch(setUser(res.data.user));
      } catch (error) {
        toast.error(error.response.data.message);
        // console.log(error)
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      //? Create account
      const user = { name, email, password };
      dispatch(setLoading(true));

      try {
        const res = await axios.post(`${API_END_POINT}/user`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        // console.log(res)
        if (res.data.success) {
          toast.success(res.data.message);
          setIslogin(false);
        }
      } catch (error) {
        // console.log(error)
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
    }

    setName("")
    setEmail("")
    setPassword("")
  };

  let registerHandler = () => {
    setIslogin(!islogin);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="w-[100vw] h-[100vh] absolute"
          src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d-1540x866.jpg"
          alt=""
        />
      </div>

      <form
        action=""
        onSubmit={getInputData}
        className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-80 bg-zinc-800 bg-opacity-70 rounded-md border-4 border-gray-700"
      >
        <h1 className="text-center text-3xl p-3 font-bold text-zinc-300 text ">
          {islogin ? "Sign-up" : "Sign-in"}
        </h1>
        <div className="flex flex-col justify-around items-center w-[100%] h-[80%] text-zinc-400 ">
          {islogin && (
            <div className="flex flex-col mb-3">
              <label htmlFor="name" className="font-medium text-[20px] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-1 text-pretty font-medium text-black rounded-md"
              />
            </div>
          )}
          <div className="flex flex-col mb-3">
            <label htmlFor="email" className="font-medium text-[20px] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-1 text-pretty font-medium text-black rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-medium text-[20px] mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-1 text-pretty font-medium text-black rounded-md"
            />
          </div>
          <button className="bg-red-600 w-40 py-2 rounded-md font-medium cursor-pointer w-28 text-white mt-8 mb-3">
            {isLoading ? "loading..." : islogin ? "Create Account" : "Login"}
          </button>
          <div className="flex mb-3">
            <p className="text-white">
              {!islogin ? "New to Netflix" : "Already have an account ?"}
            </p>{" "}
            <span
              onClick={registerHandler}
              className="cursor-pointer text-blue-300 ml-2 font-medium"
            >
              {!islogin ? "Create Account" : "Login"}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
