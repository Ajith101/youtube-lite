import { createBrowserRouter, Outlet } from "react-router-dom";
import {
  VideoDetail,
  Category,
  ChannelDetail,
  Feeds,
  SearchFeeds,
} from "../components";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const AppLayout = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <SideBar />
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Feeds /> },
      { path: "/category/:name", element: <Category /> },
      { path: "/video/:id", element: <VideoDetail /> },
      { path: "/channel/:id", element: <ChannelDetail /> },
      { path: "/search/:title", element: <SearchFeeds /> },
    ],
  },
]);
