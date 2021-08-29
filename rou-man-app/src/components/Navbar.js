import React from "react";
import { Fragment } from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <Fragment>
      <html lang="en" dir="ltr">
        <head>
          <meta charset="UTF-8" />
          <link rel="stylesheet" href="style.css" />
          <link
            href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body>
          <div class="sidebar">
            <div class="logo-details">
              <i class="bx bxl-c-plus-plus icon"></i>
              <div class="logo_name">CodingLab</div>
              <i class="bx bx-menu" id="btn"></i>
            </div>
            <ul class="nav-list">
              <li>
                <i class="bx bx-search"></i>
                <input type="text" placeholder="Search..." />
                <span class="tooltip">Search</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-grid-alt"></i>
                  <span class="links_name">Dashboard</span>
                </a>
                <span class="tooltip">Dashboard</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-user"></i>
                  <span class="links_name">User</span>
                </a>
                <span class="tooltip">User</span>
              </li>
              
              <li>
                <a href="#">
                  <i class="bx bx-pie-chart-alt-2"></i>
                  <span class="links_name">Analytics</span>
                </a>
                <span class="tooltip">Analytics</span>
              </li>
              
              
              <li>
                <a href="#">
                  <i class="bx bx-heart"></i>
                  <span class="links_name">Saved</span>
                </a>
                <span class="tooltip">Saved</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-cog"></i>
                  <span class="links_name">Setting</span>
                </a>
                <span class="tooltip">Setting</span>
              </li>
              <li class="profile">
                <div class="profile-details">
                  <img src="profile.jpg" alt="profileImg" />
                  <div class="name_job">
                    <div class="name">Prem Shahi</div>
                    <div class="job">Web designer</div>
                  </div>
                </div>
                <i class="bx bx-log-out" id="log_out"></i>
              </li>
            </ul>
          </div>
        </body>
      </html>
    </Fragment>
  );
}

export default Navbar;
