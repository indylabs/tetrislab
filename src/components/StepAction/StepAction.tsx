import * as React from "react";
import { Alert, Box, Fab, Typography, Zoom } from "@mui/material";
import {
  ArrowRight as ArrowRightIcon,
  Info as InfoIcon,
} from "@mui/icons-material";

type StepActionProps = {
  info: string;
  label: string;
  onAction: () => void;
  title?: string;
  isValid?: boolean;
};

export const StepAction = ({
  title,
  info,
  label,
  onAction,
  isValid,
}: StepActionProps) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          my: 4,
        }}
      >
        <Typography variant="h2" sx={{ color: "primary.main" }}>
          {title}
        </Typography>
        <Alert
          severity="info"
          sx={{
            color: "white",
            borderColor: "primary.main",
            backgroundColor: "transparent",
            p: 0,
          }}
          icon={<InfoIcon sx={{ color: "primary.main" }} />}
        >
          {info}
        </Alert>
      </Box>

      <Zoom in={isValid} unmountOnExit>
        <Fab
          sx={{
            position: "absolute",
            bottom: 50,
            right: 50,
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "secondary.main",
            color: "secondary.main",
            "&:hover": {
              color: "background.paper",
              backgroundColor: "secondary.main",
              borderColor: "secondary.main",
            },
          }}
          variant="extended"
          onClick={() => onAction()}
        >
          {label} <ArrowRightIcon />
        </Fab>
      </Zoom>
    </>
  );
};
