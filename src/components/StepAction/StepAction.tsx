import * as React from "react";
import { Box, Fab, Typography, Zoom } from "@mui/material";
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
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 4 }}>
        <Box>
          <Typography
            sx={{ color: "primary.main", fontSize: "2rem", mb: 4 }}
            gutterBottom={true}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom={true}
            sx={{ display: "flex", gap: "0.3rem" }}
          >
            <InfoIcon sx={{ color: "primary.main" }} /> {info}
          </Typography>
        </Box>
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
