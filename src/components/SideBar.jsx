import React, { useEffect, useRef } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineSportsHandball, MdMusicNote } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { CiStreamOn } from "react-icons/ci";
import { BiNews, BiShoppingBag } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { useAppContext } from "../context/ContextApi";
import YtLOgo from "../images/yt-logo-mobile.png";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const { ShowMenu, setShowMenu, currentCategory, setCurrentCategory } =
    useAppContext();
  const navRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    const handleOuterClick = (e) => {
      if (navRef?.current && !navRef?.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleOuterClick, true);
    return () => {
      document.removeEventListener("click", handleOuterClick, true);
    };
  }, []);

  const category = [
    {
      name: "News",
      logo: <BiNews />,
    },
    {
      name: "Live",
      logo: <CiStreamOn />,
    },
    {
      name: "Gaming",
      logo: <FaGamepad />,
    },
    {
      name: "Music",
      logo: <MdMusicNote />,
    },
    {
      name: "Trending",
      logo: <BsFire />,
    },
    {
      name: "Sports",
      logo: <MdOutlineSportsHandball />,
    },
    {
      name: "Shopping",
      logo: <BiShoppingBag />,
    },
  ];

  return (
    <>
      <div
        ref={navRef}
        className={`fixed ${
          ShowMenu ? "translate-x-0" : "translate-x-[-100%]"
        } left-0 top-0 z-30 flex h-screen w-[70%] flex-col items-start gap-[10px] bg-[#212121] px-[15px] text-left transition-all ease-in sm:w-[180px] sm:min-w-[180px]`}
      >
        <div className="flex items-center gap-4">
          <div className="h-5">
            <img
              onClick={() => navigate("/")}
              src={YtLOgo}
              className="h-full object-cover"
              alt=""
            />
          </div>

          <h2 className="py-[15px] text-[18px] font-bold tracking-widest text-white">
            YouTube
          </h2>
        </div>
        <button
          onClick={() => {
            setCurrentCategory("Home");
            navigate("/");
          }}
          className={`flex ${
            currentCategory === "Home" && pathname === "/"
              ? "bg-black py-[10px]"
              : ""
          } w-full items-center gap-3 rounded-[10px] px-[10px] py-[5px] text-left text-white`}
        >
          <AiFillHome /> Home
        </button>
        {category.map((item, id) => {
          return (
            <button
              onClick={() => {
                setCurrentCategory(item.name);
                navigate("/");
              }}
              className={`flex ${
                currentCategory === item.name && pathname === "/"
                  ? "bg-black py-[10px]"
                  : ""
              } w-full items-center gap-3 rounded-[10px] px-[10px] py-[5px] text-left text-white`}
              key={id}
            >
              {item.logo} {item.name}
            </button>
          );
        })}
      </div>
      <div
        className={`fixed md:hidden ${
          ShowMenu ? "translate-x-0" : "translate-x-[-100%]"
        } top-0 z-20 h-screen w-full bg-black bg-opacity-80`}
      ></div>
    </>
  );
};

export default SideBar;
