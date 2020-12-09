import React, { useState} from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import recursiveSearch from 'utils';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SidebarItem = ({key,items,depthStep,depth}) => {
  

    const submenus = recursiveSearch(items,'title');
    const initialCollapsed = submenus.reduce((acc,d) => {acc[d] = true; return acc},{});
  

    const [collapsed, setCollapsed] = useState(initialCollapsed);
    const toggle = (submenu) => {
    const changedMenu = submenu;  
    setCollapsed(current=>{
      const nextCollapsed = {};
      Object.keys(current).forEach(key => {
        nextCollapsed[key] = key === changedMenu ? !current[key] : current[key];
      });
        return nextCollapsed;
      });
    };


    if(Array.isArray(items.items)){

    return (
            <React.Fragment key={key}>
                 <NavItem key={key} style={{ paddingLeft: depth * depthStep }} onClick={()=>toggle(items.title)} className={classNames({ "menu-open": !collapsed[items.title] })}>
                    <NavLink className="dropdown-toggle">
                        <FontAwesomeIcon icon={items.icon} className="mr-2" />
                        {items.title}
                    </NavLink>
                </NavItem>
                <Collapse isOpen={!collapsed[items.title]} navbar style={{ paddingLeft: depth * depthStep }} className={classNames("items-menu", { "mb-1": !collapsed[items.title] })}>
                    {items.items.map((subitem, index) => (
                        <SidebarItem key={`${subitem.title}${index}`} depthStep={depthStep} depth={depth+1} items={subitem}/>
                    ))}
                </Collapse>
            </React.Fragment>

        );

    }else{
        return (
            <NavItem key={key} className={classNames({ "pl-4": depth!==0 })}>
              <NavLink tag={Link} to={items.target} className="sidebar-link">
                <FontAwesomeIcon icon={items.icon} className="mr-2" />
                {items.title}
               </NavLink>
          </NavItem>
          );
    }

}

export default SidebarItem;