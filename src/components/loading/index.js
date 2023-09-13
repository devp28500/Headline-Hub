import React from "react";
import MuiCircularProgress from "@mui/material/CircularProgress";

const Loading = ({ ...props }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {<MuiCircularProgress {...props} />}
    </div>
  );
};

export default Loading;
