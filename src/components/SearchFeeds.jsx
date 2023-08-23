import React, { useEffect } from "react";
import { useFetch } from "../utils/useFetch";
import { useParams } from "react-router-dom";
import SearchCards from "./SearchCards";

const SearchFeeds = () => {
  const { title } = useParams();
  const { results, loading } = useFetch(`search?query=${title}`);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [results]);
  return (
    <div className="flex flex-col gap-4 px-4 pt-[90px]">
      {results?.data?.map((item, id) => {
        return <SearchCards video={item} key={id} />;
      })}
    </div>
  );
};

export default SearchFeeds;
