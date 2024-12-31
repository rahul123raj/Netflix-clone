import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" w-screen aspect-video absolute text-white pt-[18%] p-12">
      <h1 className="font-bold text-3xl ">{title}</h1>
      <p className="w-[40%] text-l font-medium">
{overview}
      </p>
      <div className="flex mt-5">
        <button className=" flex items-center px-6 py-2 bg-slate-50 rounded-md text-black font-medium hover:brightness-90">
          <CiPlay1 size="22px" />
          <span className="ml-2">Play</span>
        </button>
        <button className=" mx-3 flex items-center px-6 py-2 bg-slate-300 rounded-md text-black font-medium hover:brightness-75">
          <CiCircleInfo size="22px" />
          <span className="ml-2">Watch More</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
