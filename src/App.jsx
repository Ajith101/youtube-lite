import React from "react";
import { RouterProvider } from "react-router-dom";
import { AppContext } from "./context/ContextApi";
import { appRouter } from "./routes/Routes";

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
