import { Outlet } from "react-router-dom";
import Navigator from "./Navigator";

export default function RootLayout() {
  return (
    <div>
      <Navigator />
      <hr />
      <Outlet />
    </div>
  );
}
