import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import DropMenu from "./DropMenu";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [expandMenu, setExpandMenu] = useState(false);
  const expandedMenu = useRef(null);
  const location = useLocation();

  // click off menu closes it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        expandedMenu.current &&
        !expandedMenu.current.contains(event.target)
      ) {
        setExpandMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // change route location closes menu
  useEffect(() => {
    setExpandMenu(false);
  }, [location]);

  const Logo = () => {
    return (
      <Link to="/">
        <h4 style={{ padding: "10px" }}>Hannah B Finch</h4>
      </Link>
    );
  };

  const toggleMenu = () => {
    setExpandMenu(!expandMenu);
  };

  // title of link followed by its target ref
  const navLinks = [
    ["contact", "/contact"],
    ["milestones", "/milestones"],
  ];

  const categoryLinks = [
    ["development", "/development"],
    ["design", "/design"],
    ["art", "/art"],
    ["music", "/music"],
    ["crafts", "/crafts"],
  ];

  return (
    <>
      <nav>
        <Logo />

        {/* Nav stuff that shows on small screens, when expanded */}
        {expandMenu && (
          <div ref={expandedMenu} className="hidden show-sm">
            {navLinks.map((link, key) => {
              return (
                <Link className="link-1" key={key} to={link[1]}>
                  {link[0]}
                </Link>
              );
            })}
            {/* <Link to="/"className="link-1">things I make</Link> */}

            <div className="line-horizontal" style={{ width: "260px" }}></div>

            {categoryLinks.map((option, key) => {
              return (
                <Link className="link-1" to={option[1]} key={key}>
                  {option[0]}
                </Link>
              );
            })}

            <div className="spacer"></div>
          </div>
        )}

        {/* icon to expand menu, only shows on small screens*/}
        <ChevronDownIcon
          onClick={toggleMenu}
          className={
            expandMenu
              ? "rotate-180 transition hidden show-sm"
              : "transition hidden show-sm"
          }
          style={{
            width: "24px",
            position: "absolute",
            right: "5%",
            bottom: "14px",
          }}
        />

        {/* Nav stuff that shows on standard screens */}
        <div className="btn-row hidden-sm">
          {navLinks.map((link, key) => {
            return (
              <Link className="link-1" key={key} to={link[1]}>
                {link[0]}
              </Link>
            );
          })}
          <div className="link-1" style={{ padding: "0" }}>
            <DropMenu text="things I make" options={categoryLinks}></DropMenu>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
