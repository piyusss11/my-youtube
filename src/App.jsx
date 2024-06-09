// import { useState } from 'react'

import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./pages/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./pages/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <RouterProvider router={appRouter}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
