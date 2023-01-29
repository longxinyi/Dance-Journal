import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.left_border}>
        <h1>XYDJ</h1>
        
        {/* <button>HipHop</button>
        <button>Street Jazz</button>
        <button>Heels</button>
        <button>Open</button> */}
      </header>
    </React.Fragment>
  );
};

export default Header;
