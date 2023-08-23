import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

const SearchCards = ({ video }) => {
  const navigate = useNavigate();
  const slicedTitle = (text) => {
    return text?.length > 25 ? text?.slice(0, 25) + "..." : text;
  };
  return (
    <div
      onClick={() => navigate(`/video/${video?.videoId}`)}
      className="flex cursor-pointer flex-col gap-3 md:flex-row"
    >
      <div className="relative w-full overflow-hidden rounded-xl bg-slate-800 md:h-24 md:w-40">
        <img
          src={video?.thumbnail[0]?.url}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-white">{video?.title}</span>
        <span className="mt-[2px] flex items-center text-[14px] text-slate-400">
          {video?.channelTitle}{" "}
          {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
            <BsFillCheckCircleFill className="ml-1 text-[12px] text-white/[0.5]" />
          )}
        </span>
        <div className="flex items-center gap-1 overflow-hidden text-[12px] font-semibold text-white/[0.7]">
          <span className="">{`${abbreviateNumber(
            video?.viewCount
          )} views`}</span>
          <span className="relative mx-1 flex text-[24px] font-bold leading-none text-white/[0.7]">
            .
          </span>
          <span className="text-white/[0.7]">{video?.publishedText}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchCards;
