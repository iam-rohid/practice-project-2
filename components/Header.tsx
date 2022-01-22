import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navSticky, setNavSticky] = useState(false);

  const onScroll = () => {
    if (!navSticky && scrollY > 0) {
      setNavSticky(true);
    }
    if (navSticky && scrollY === 0) {
      setNavSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [navSticky]);

  useEffect(() => {
    if (showMenu) {
      document.documentElement.classList.add("disable-scroll");
    } else {
      document.documentElement.classList.remove("disable-scroll");
    }
  }, [showMenu]);

  return (
    <nav className={`nav-bar ${navSticky ? "sticky" : ""}`} id="nav-bar">
      <div className="container">
        <div className="left-wrapper">
          <Link href="/">
            <a className="logo">
              <img src="/svg/logo.svg" alt="Finz Logo" />
            </a>
          </Link>
        </div>
        <div className="right-wrapper">
          <button
            className="humburger-button"
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <img
              src="/svg/humburger.svg"
              alt="Humburger Icon"
              className="icon"
            />
          </button>
        </div>
      </div>

      <FullScreenMenu
        isVisible={showMenu}
        onClose={() => {
          setShowMenu(false);
        }}
      />
    </nav>
  );
};

export default Header;

const FullScreenMenu = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose?: () => void;
}) => {
  return (
    <div
      className={`fullscreen-navigation-window ${isVisible ? "show" : "hide"}`}
      id="fullscreen-nav"
    >
      <button className="close-button" onClick={onClose}>
        <img src="/svg/close.svg" alt="Humburger Icon" className="icon" />
      </button>
      <ul className="menu">
        <li className="menu-item">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="#about">
            <a>About</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="#how-it-work">
            <a>How it works</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="#">
            <a>FAQ</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
