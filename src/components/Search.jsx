import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/ContextApi";

const Search = () => {
  const { searchRef } = useAppContext();
  const [searchValues, setSearchValues] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValues}`);
  };

  const handleChange = (e) => {
    setSearchValues(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center justify-between gap-1 rounded-[15px] bg-[#212121] px-[10px] py-[5px] text-white"
    >
      <input
        ref={searchRef}
        onChange={handleChange}
        value={searchValues}
        type="text"
        placeholder="Search..."
        className="w-full overflow-hidden rounded-[15px] bg-[#212121] pl-2 pr-3 text-white outline-none"
      />
      <div className="flex items-center gap-2">
        {searchValues && (
          <AiOutlineClose
            onClick={() => setSearchValues("")}
            color="#fff"
            size={"20px"}
          />
        )}
        <AiOutlineSearch onClick={handleSubmit} color="#fff" size={"20px"} />
      </div>
    </form>
  );
};

export default Search;
