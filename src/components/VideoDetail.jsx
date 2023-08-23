import React, { useEffect } from "react";
import { useFetch } from "./../utils/useFetch";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import RelatedVideoCard from "./RelatedVideoCard";

const RelatedVideos = () => {
  const { id } = useParams();
  const { results, loading } = useFetch(`related?id=${id}`);
  return (
    <div className="flex h-screen flex-col gap-2 overflow-y-auto px-4 pt-2 text-white lg:w-[350px] lg:pt-[90px] xl:w-[400px]">
      {results?.data?.map((item, id) => {
        return <RelatedVideoCard video={item} key={id} />;
      })}
    </div>
  );
};

const VideoDetail = () => {
  const { id } = useParams();
  const { results, loading } = useFetch(`video?id=${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="flex h-[calc(100%-56px)] flex-row justify-center bg-black pt-[90px]">
          <div className="flex w-full max-w-[1280px] flex-col lg:flex-row">
            <div className="flex flex-col overflow-y-auto px-4 py-3 lg:w-[calc(100%-350px)] lg:py-6 xl:w-[calc(100%-400px)]">
              <div className="ml-[-16px] mr-[-16px] h-[250px] md:h-[400px] lg:ml-0 lg:mr-0 lg:h-[400px] xl:h-[550px]">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  controls
                  width="100%"
                  height="100%"
                  style={{ backgroundColor: "#000000" }}
                  playing={true}
                />
              </div>

              <div className="mt-4 line-clamp-2 text-sm font-bold text-white md:text-xl">
                {results?.title}
              </div>
              <div className="mt-4 flex flex-col justify-between md:flex-row">
                <div className="flex items-start gap-2">
                  <div className="h-11 w-11 overflow-hidden rounded-full">
                    <img
                      src={results?.storyboards}
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col text-white">
                    <span className="flex items-center gap-1">
                      {results?.channelTitle}
                      {results?.author?.badges[0]?.type ===
                        "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="ml-1 text-[12px] text-white/[0.5]" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 md:mt-0">
                  <span className="flex items-center gap-1 rounded-[15px] bg-[#212121] px-5 py-1 text-center text-white md:py-3">
                    <AiOutlineLike className="mr-2 text-xl text-white" />{" "}
                    {abbreviateNumber(results?.lengthSeconds)} Likes
                  </span>
                  <span className="rounded-[15px] bg-[#212121] px-5 py-1 text-center text-white md:py-3">
                    {abbreviateNumber(results?.viewCount)} views
                  </span>
                </div>
              </div>
            </div>
            <RelatedVideos />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoDetail;
