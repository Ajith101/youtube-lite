import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import YtLOgo from "../images/yt-logo-mobile.png";
import YtLOgoPc from "../images/yt-logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useAppContext } from "../context/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const { setShowMenu, searchRef } = useAppContext();

  useEffect(() => {
    searchRef?.current && searchRef?.current?.focus();
  }, [showSearch]);

  return (
    <div className="fixed z-20 flex h-[60px] w-full items-center justify-between bg-black px-[5px]  pl-5 text-white sm:h-[90px] sm:pr-20">
      {showSearch ? (
        ""
      ) : (
        <div className="flex h-5 items-center gap-2">
          <RxHamburgerMenu
            className="cursor-pointer"
            onClick={() => setShowMenu((pre) => !pre)}
          />

          <img
            onClick={() => navigate("/")}
            src={YtLOgo}
            className="h-full object-cover sm:hidden"
            alt=""
          />
          <img
            onClick={() => navigate("/")}
            src={YtLOgoPc}
            className="hidden h-full object-cover sm:block"
            alt=""
          />
        </div>
      )}
      {showSearch ? (
        <div className="flex w-full items-center gap-2 sm:hidden">
          <MdArrowBack
            size={"25px"}
            className="text-white"
            onClick={() => setShowSearch(false)}
          />{" "}
          <Search />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <AiOutlineSearch
            onClick={() => {
              setShowSearch(true);
            }}
            className="sm:hidden"
            color="#fff"
            size={"25px"}
          />{" "}
          <FaRegUserCircle
            onClick={() => setShowMenu(true)}
            className="sm:hidden"
            color="#fff"
            size={"25px"}
          />
        </div>
      )}
      <div className="hidden items-center gap-2 sm:flex">
        <Search />
        <FaRegUserCircle color="#fff" size={"25px"} />
      </div>
    </div>
  );
};

export default Navbar;
