import React from "react";
import Navbar from "./components/Navbar";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes/routes";
import { AppContext } from "./context/ContextApi";

const App = () => {
  return (
    <>
      <AppContext>
        <RouterProvider router={appRouter} />
      </AppContext>
    </>
  );
};

export default App;
