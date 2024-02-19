import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import "./styles/style.css";
import Detail from "./routes/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
