import React from "react";
import Label from "../components/label";
import classes from "./index.module.css";

const PageNotFound = () => {
  return (
    <div className={classes["page-not-found-conatiner"]}>
      <Label variant="h4" color="#FF5252">
        ERROR 404!
      </Label>
      <Label variant="h4" color="#FF5252">
        Page not found
      </Label>
    </div>
  );
};

export default PageNotFound;
