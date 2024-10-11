import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import DropMenu from "./DropMenu";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";


function Navbar() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const sideMenu = useRef(null);

  // get the view width to show/hide navbar
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // click off menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenu.current && !sideMenu.current.contains(event.target)) {
        setShowSideMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const Logo = () => {
    return <h4>Hannah B Finch</h4>;
  };

  const toggleMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  const navLinks = [
    ["contact", "/contact"],
    ["milestones", "/milestones"],
  ];

  return (
    <>
      <nav>
        {showSideMenu && (
          <div className="side-menu flex-col show-sm" ref={sideMenu}>
            <div className="menu-header">
            <Logo />

            <XMarkIcon  onClick={toggleMenu}
            style={{ width: "24px"}}/>
            </div>
          </div>
        )}
        <Logo />
        {!showSideMenu && (
          <Bars3Icon
            onClick={toggleMenu}
            className="hidden show-sm"
            style={{ width: "24px" }}
          />
        )}
        <div className="btn-row hidden-sm">
          {navLinks.map((link, key) => {
            return (
              <Link className="link-1" key={key} to={link[1]}>
                {link[0]}
              </Link>
            );
          })}
          <div className="link-1" style={{ padding: "0" }}>
            <DropMenu
              text="things I make"
              options={[
                ["development", "/development"],
                ["design", "/design"],
                ["art", "/art"],
                ["music", "/music"],
                ["crafts", "/crafts"],
              ]}
            ></DropMenu>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
