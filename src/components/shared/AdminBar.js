import React from "react";

import { NavLink } from "react-router-dom";
import { AdminSideData } from "../../pages/AdminSideData";

function AdminBar({ children }) {
  return (
    <div className="Container">
      <div className="Sidebar">
        <ul >
          {AdminSideData.map((val, key) => {
            return (
              <>
                <NavLink
                  to={val.path}
                  key={key}
                  className="siderow"
                  activeclassName="active"
                >
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </NavLink>
              </>
            );
          })}
        </ul>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default AdminBar;
