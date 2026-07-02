import React from "react";
import Password from "./components/Password";
import Github from "./components/Github";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { githubInfoLoader } from "./loaders/githubLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Password />,
    errorElement: <ErrorPage />
  },
  {
    path: "/github",
    element: <Github />,
    loader: githubInfoLoader,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
