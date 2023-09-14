import React from "react";
import MuiAutocomplete from "@mui/material/Autocomplete";
import TextField from "../text-field";

const AutoComplete = ({
  disableClearable = true,
  options = [],
  textFieldProps,
  ...props
}) => {
  return (
    <MuiAutocomplete
      disableClearable={disableClearable}
      options={options}
      renderInput={(params) => <TextField {...params} {...textFieldProps} />}
      sx={{ backgroundColor: "#FAFCFE", width: "20rem" }}
      {...props}
    />
  );
};

export default AutoComplete;
