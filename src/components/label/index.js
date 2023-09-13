import React from "react";
import MuiTypography from "@mui/material/Typography";

const Label = ({ variant = "h6", ...props }) => {
  return (
    <MuiTypography variant={variant} {...props}>
      {props.children}
    </MuiTypography>
  );
};

export default Label;
