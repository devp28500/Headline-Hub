import React, { forwardRef } from "react";
import MuiButton from "@mui/material/Button";

const Button = forwardRef(
  (
    {
      variant = "contained",
      label,
      disabled = false,
      color = "info",
      startIcon,
      endIcon,
      size = "medium",
      onClick = () => {},
      ...props
    },
    ref
  ) => {
    return (
      <MuiButton
        variant={variant}
        ref={ref}
        disabled={disabled}
        color={color}
        startIcon={startIcon}
        endIcon={endIcon}
        size={size}
        onClick={onClick}
        {...props}
      >
        {label}
      </MuiButton>
    );
  }
);

export default Button;
