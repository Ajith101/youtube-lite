import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

const RelatedVideoCard = ({ video }) => {
  const navigate = useNavigate();
  const slicedTitle = (text) => {
    return text?.length > 25 ? text?.slice(0, 25) + "..." : text;
  };
  return (
    <div
      onClick={() => navigate(`/video/${video?.videoId}`)}
      className="flex cursor-pointer gap-3"
    >
      <div className="relative h-24 w-40 min-w-[168px] overflow-hidden rounded-xl bg-slate-800 lg:h-20 lg:w-32 lg:min-w-[128px] xl:h-24 xl:w-40 xl:min-w-[168px]">
        <img
          src={video?.thumbnail[0]?.url}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <span>{slicedTitle(video?.title)}</span>
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
          <span>{video?.publishedTimeText}</span>
        </div>
      </div>
    </div>
  );
};

export default RelatedVideoCard;
