import React from 'react'
import { SideBarData } from '../pages/SideBarData'
import { NavLink } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar({children}) {

  return (
    <div className="Container">
      <div className="Sidebar">
        <ul className="Sidelist">
          {SideBarData.map((val, key) => {
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
         <div class="btnlogout">
           <LogoutIcon />
         </div>
        </ul>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar