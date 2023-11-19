import { useState } from "react";
import Logo from '/src/assets/Logo-White.svg'
import Home from "./Home";

const navItems = ["home", "description", "share", "logout"];

export default function Sidebar (){
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <nav className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="sidebar-inner">
                <header className="sidebar-header">
                <button
                    type="button"
                    className="sidebar-burger"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="material-symbols-outlined">
                    {isOpen ? "close" : "menu"}
                    </span>
                </button>
                <img src={Logo} className="sidebar-logo" />
                </header>
                <nav className="sidebar-menu">
                    {navItems.map((item) => (
                    <button key={item} type="button" className="sidebar-button">
                        <span className="material-symbols-outlined">{item}</span>
                        <p>{item}</p>
                    </button>
                    ))}
                </nav>
            </div>
        </nav>

        <div className={`${!isOpen ? "ml-[70px]" : "ml-[270px]"}`}>
          <div className="m-5">
            <Home/>
          </div>
        </div>
    </>
  );
};