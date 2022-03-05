import React from "react";

export default function Header() {
  //   const nav1 = document.querySelector(".nav-circle_1");
  //   const nav2 = document.querySelector(".nav-circle_2");
  const navItems = Array.from(document.querySelectorAll(".nav-circle"));

  function navigate() {
    const activeNavItem = navItems.indexOf(navItem =>
      navItem.classList.contains("nav-circle__active")
    );
    // newNavActive = activeNavItem[]
    console.log(activeNavItem);
  }

  return (
    <div className="header">
      <h1>CV WHIZ</h1>
      <div className="nav-container">
        <div className="nav-circle-container">
          <div className="nav-circle  nav-circle_1" onClick={navigate}></div>
          <p>Step 1</p>
        </div>
        <div className="nav-circle-container">
          <div
            className="nav-circle  nav-circle__active nav-circle_2 "
            onClick={navigate}
          ></div>
          <p>Step 2</p>
        </div>
        <div className="nav-circle-container">
          <div className="nav-circle  nav-circle_3"></div>
          <p>Step 3</p>
        </div>
      </div>
    </div>
  );
}
