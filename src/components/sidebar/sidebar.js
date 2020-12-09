import React from 'react';

import classNames from "classnames";
import { Nav } from "reactstrap";

import './sidebar.css';
import SidebarItem from "./sidebar-item";
import logo from 'images/logo.png';

const Sidebar = ({isOpen, toggle,items,depthStep, depth}) => {
  
  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <span color="info" onClick={toggle} style={{ color: "#fff" }}>
          &times;
        </span>
        <a href="#" className="header-title">
          <img src={logo} alt="" className="logo-hazel" />
          <span>Bootstrap Sidebar</span>
        </a>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <p className="sidebar-title">Navigation Menu</p>
          {Object.values(items).map((item,index)=>{
            return (<SidebarItem key={`${item.title}${index}`} depthStep={depthStep} depth={depth} items={item}/>);
          })}
        </Nav>
      </div>
    </div>
  );
}
export default Sidebar;