import React from "react";
import "../Header/Header.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav className="nav1">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contacts</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
