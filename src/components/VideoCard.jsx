import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const slicedTitle = (text) => {
    return text?.length > 25 ? text?.slice(0, 25) + "..." : text;
  };
  return (
    <div
      className="w-full cursor-pointer"
      onClick={() => navigate(`/video/${video?.videoId}`)}
    >
      <div className="h-[150px] w-full">
        <img
          src={video?.thumbnail[2]?.url}
          // src={video?.thumbnails[1]?.url}
          className="h-full w-full overflow-hidden rounded-[8px] object-cover"
          alt=""
        />
      </div>
      <div className="mt-[3px] flex gap-[5px]">
        <div className="flex items-start">
          <div className="h-9 w-9 overflow-hidden rounded-full">
            <img
              src={
                video?.channelThumbnail ? video?.channelThumbnail[0]?.url : ""
              }
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="mt-[5px]">
          <h2 className="hidden sm:block">{slicedTitle(video?.title)}</h2>
          <h2 className="sm:hidden">{video?.title}</h2>
          <span className="mt-[2px] flex items-center text-[14px] text-slate-400">
            {video?.channelTitle}{" "}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="ml-1 text-[12px] text-white/[0.5]" />
            )}
          </span>
          <div className="text-white/[0.7 flex items-center gap-1 overflow-hidden text-[12px] font-semibold">
            <span className="">{`${abbreviateNumber(
              video?.viewCount
            )} views`}</span>
            <span className="relative mx-1 flex text-[24px] font-bold leading-none text-white/[0.7]">
              .
            </span>
            <span>{video?.publishedText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
