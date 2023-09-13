import React, { forwardRef } from "react";
import MuiBox from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import MuiCardMedia from "@mui/material/CardMedia";
import MuiCardActions from "@mui/material/CardActions";
import MuiCardContent from "@mui/material/CardContent";
import { ThemeProvider, createTheme } from "@mui/material";
import Button from "../button";
import Label from "../label";
import classes from "./index.module.css";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          height: "auto",
          "&:hover": {
            backgroundColor: "rgb(176, 190, 197)",
          },
          "&:focus": {
            outline: `auto`,
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 1,
          "&:last-child": {
            paddingBottom: 0,
          },
          overflow: "hidden",
        },
      },
    },
  },
});

const Card = forwardRef(
  (
    {
      image,
      title,
      description,
      imageHeight = 140,
      buttonText,
      buttonEndIcon,
      onButtonClick,
      onDoubleClick,
      source,
      publishedDate,
      ...props
    },
    ref
  ) => {
    return (
      <ThemeProvider theme={theme}>
        <MuiBox
          sx={{
            display: "flex",
            width: "auto",
            height: "auto",
          }}
        >
          <MuiCard
            sx={{ width: "30rem", height: "30rem", position: "relative" }}
            ref={ref}
            {...props}
            onDoubleClick={onDoubleClick}
          >
            {image && (
              <MuiCardMedia
                sx={{ height: imageHeight }}
                image={image}
                title={title}
              />
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                overflow: "hidden",
              }}
            >
              <MuiCardContent>
                <div className={classes["card-content"]}>
                  <Label variant="h6">{title}</Label>
                  {description && <Label variant="body2">{description}</Label>}
                </div>
              </MuiCardContent>
              <MuiCardActions>
                <div className={classes["card-actions"]}>
                  <div className={classes["actions-conatiner"]}>
                    {buttonText && (
                      <Button
                        label={buttonText}
                        endIcon={buttonEndIcon}
                        onClick={onButtonClick}
                      />
                    )}
                    <div className={classes["card-basic-details"]}>
                      {source && (
                        <Label variant="body2" sx={{ fontWeight: 800 }}>
                          {source}
                        </Label>
                      )}
                      {publishedDate && (
                        <Label variant="body2" sx={{ fontWeight: 800 }}>
                          {publishedDate}
                        </Label>
                      )}
                    </div>
                  </div>
                </div>
              </MuiCardActions>
            </div>
          </MuiCard>
        </MuiBox>
      </ThemeProvider>
    );
  }
);

export default Card;
