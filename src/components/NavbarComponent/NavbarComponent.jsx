import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavbarComponent = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(".menu")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="SD container">
      <div className="nav">
        <div className="logo">
          <Link to="./">
            <img
              className="eduviLogo"
              src="/public/images/Navbar/Logo.svg"
              alt="EduviLogo"
            />
          </Link>
        </div>
        <GiHamburgerMenu className="burger-icon" />

        <div className="menu">
          <ul>
            {[
              "Shop",
              "For Kindergarten",
              "For High School",
              "For College",
              "Courses",
            ].map((item, index) => (
              <li
                key={index}
                className="regular-font"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className="tabs"
                  to={`./${item.toLowerCase().replace(/ /g, "")}`}
                >
                  {item} <FaAngleDown />
                </Link>
                {activeDropdown == index && (
                  <div className="dropdown-content">
                    <Link to="/CoursesDetalis">Courses Detalis</Link>
                    <Link to="./text2">Text2</Link>
                    <Link to="./text3">Text3</Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="rightPart">
          <ul>
            <li className="regular-font cart">
              <span className="regular-font">cart (0)</span>
              <img src="/public/images/Navbar/Shoppingbag.svg" alt="cart" />
            </li>
            <li className="regular-font profile">
              <span className="regular-font">MY Account</span>
              <img src="/public/images/Navbar/profile.svg" alt="profile" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
