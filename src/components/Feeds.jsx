import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import VideoCard from "./VideoCard";
import { useFetch } from "../utils/useFetch";
import { useAppContext } from "../context/ContextApi";

const Feeds = () => {
  const { ShowMenu, currentCategory } = useAppContext();
  const { results, loading } = useFetch(
    `${
      currentCategory === "Home" || currentCategory === "Trending"
        ? `trending`
        : `search?query=${currentCategory}`
    }`
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentCategory]);

  return (
    <div className="flex min-h-screen w-full bg-black pt-[90px] text-white">
      <div
        className={`w-full bg-black px-3 transition-all ease-in md:px-10 ${
          ShowMenu ? "sm:ml-[180px]" : "m-0"
        }`}
      >
        <h1 className="text-white">
          {loading ? <div className="loader"></div> : ""}
        </h1>
        <div className="flex w-full  items-center justify-center">
          <div className="mx-auto grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {results?.data?.map((item, id) => {
              return <VideoCard video={item} key={id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
