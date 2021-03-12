import "./HeaderStyle.css";
export default function Header() {
  return (
    <>
      <nav className="navigation_link_root">
        <ul>
          <li className="navigation_links">Home</li>
          <li className="navigation_links">About Me</li>
          <li className="navigation_links">My Work</li>
          <li className="navigation_links">Contact</li>
        </ul>
      </nav>
    </>
  );
}
