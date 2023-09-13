import React from "react";
import classes from "./index.module.css";
import Label from "../label";

const Header = ({ headerTitle, headerSubTitle, ...props }) => {
  return (
    <div className={classes["header-conatiner"]}>
      <div className={classes["header-content"]}>
        <Label variant="h4" color="white">
          {headerTitle}
        </Label>
        {headerSubTitle && (
          <Label variant="body1" color="white">
            {headerSubTitle}
          </Label>
        )}
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Header;
