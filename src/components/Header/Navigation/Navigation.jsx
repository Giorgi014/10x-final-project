import { Link } from "react-router-dom";
import "./Navigation.scss";

const navigate = [
  { id: 1, path: "/", label: "Home", className: "home_page" },
  { id: 2, path: "/about", label: "About", className: "about_page" },
  { id: 3, path: "/contact", label: "Contact Us", className: "contact_page" },
  { id: 4, path: "/blog", label: "Blog", className: "blog_page" },
];

const Navigation = () => {
  return (
    <nav className="header_nav">
      <ul>
        {navigate.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
