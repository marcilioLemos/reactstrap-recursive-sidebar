import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button
} from "reactstrap";

const Topbar = ({ toggleSidebar }) => {


  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white"
      expand="md"
    >
      <Button onClick={toggleSidebar} className="noFlash shadow-none">
        <FontAwesomeIcon icon={faAlignJustify} />
      </Button>
 
    </Navbar>
  );
};

export default Topbar;