import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Home from "./routes/Home";
import Profile from "./routes/Profile";
import RootLayout from "./components/Root";
import ErrorPage from "./pages/ErrorPage";
import Login from "./routes/Login";
import NewUser from "./routes/NewUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <NewUser />,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}
