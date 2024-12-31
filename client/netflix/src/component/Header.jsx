import axios from "axios";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../utils/Api";
import toast from "react-hot-toast";
import { setUser } from "../redux/userSlice";
import { setToggle } from "../redux/movieSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(user);

  const logoutHandler = async () => {
    try {
      let res = await axios.get(`${API_END_POINT}/user/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <div className=" fixed z-10 flex justify-between items-center w-[100vw] bg-gradient-to-b from-zinc-900 h-20">
      <img
        className="w-56"
        src="https://gateway-fiber.transforms.svdcdn.com/production/images/site/Netflix-Brand-Logo.png?w=600&auto=compress%2Cformat&fit=crop&dm=1661783887&s=acf81ec5587b8b4aa64e62163b9cbdde"
        alt=""
      />

      {user && (
        <div className="flex p-10 items-center text-white h-[100%]">
          <div className="border-2 border-slate-500 bg-zinc-900 w-[180px] h-10 rounded-md flex justify-center items-center">
            <MdOutlineArrowDropDownCircle className="text-white scale-150 " />
            <h1 className="p-5 font-medium">{user.name}</h1>
          </div>
          <div className="px-1 flex justify-evenly items-center w-[350px]">
            <button
              className="bg-red-600 px-4 py-2 rounded-md font-medium"
              onClick={logoutHandler}
            >
              logout
            </button>
            <button
              className="bg-red-600 px-4 py-2 rounded-md font-medium"
              onClick={toggleHandler}
            >
              {toggle ? "Home" : " Search Movies"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
