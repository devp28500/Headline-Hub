import React from "react";
import MuiTextField from "@mui/material/TextField";

const TextField = ({
  variant = "outlined",
  size = "small",
  label,
  placeholder = "Enter text here",
  ...props
}) => {
  return (
    <MuiTextField
      variant={variant}
      size={size}
      label={label}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default TextField;
