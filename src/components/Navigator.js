import { Link } from "react-router-dom";
import classes from "../styles/MainNavigation.module.css";
export default function Navigator() {
  return (
    <div>
      <Link to="/" className={({ isActive }) => (isActive ? classes.menu : undefined)}>
        Home
      </Link>
      <Link to="/profile">profile</Link>
    </div>
  );
}
