import "./HeaderStyle.css";
import { Navbar } from "react-bootstrap"
import {
  Link,
  useLocation
} from "react-router-dom";
export default function Header() {
  var location = useLocation()
  const isActivePath = path => {
    return location.pathname == path ? " navigation_links activeLink" : " navigation_links "
  }
  return (
      <Navbar className="navigation_link_root">
        <Link to="/" className={isActivePath("/")}  >Home</Link>
        <Link className={isActivePath("/about-me")} to="/about-me" >About Me</Link>
        <Link className={isActivePath("/my-work")} to="/my-work" >My Work</Link>
         <Link className={isActivePath("/contact")} to="/contact" >Contact</Link>
      </Navbar>
  );
}
