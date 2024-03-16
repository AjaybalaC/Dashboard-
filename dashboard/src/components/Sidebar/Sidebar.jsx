import React, { useState } from "react";
import "./Sidebar.css";
// import { UilSignOutAlt } from "@iconscout/react-unicons";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { SidebarData } from "../../Data/Data";
import  Logo  from "../../img/logo.png";


const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">      
      {/* logo */}
      <div className="logo">
        <img src= {Logo}  alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <LogoutRoundedIcon />
        </div>
      </div>
    
    </div>
  );
};

export default Sidebar;
