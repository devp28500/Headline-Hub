import React from "react";
import Link from "@mui/material/Link";
import Label from "../label";

const ButtonLink = ({
  label,
  variant = "body1",
  onClick = () => {},
  ...props
}) => {
  return (
    <Link component="button" variant={variant} onClick={onClick} {...props}>
      {<Label variant={variant}>{label}</Label>}
    </Link>
  );
};

export default ButtonLink;
