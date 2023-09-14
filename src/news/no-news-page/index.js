import React from "react";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import Label from "../../components/label";
import classes from "./index.module.css";

const NoNewsPage = () => {
  return (
    <div className={classes["no-news-conatiner"]}>
      <NewspaperRoundedIcon sx={{ width: 100, height: 100 }} />
      <Label variant="h5">No news to show</Label>
    </div>
  );
};

export default NoNewsPage;
