import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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
    <Box sx={{ display: "flex", justifyContent: "space-between", my: 4 }}>
      <Box>
        <Typography
          sx={{ color: "primary.main", fontSize: "2.4rem", mb: 4 }}
          gutterBottom={true}
        >
          {title}
        </Typography>
        <Typography gutterBottom={true} sx={{ display: "flex", gap: "0.3rem" }}>
          <InfoIcon sx={{ color: "primary.main" }} /> {info}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Tooltip title={isValid ? null : info}>
          <span>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => onAction()}
              endIcon={<ArrowRightIcon />}
              disabled={!isValid}
            >
              {label}
            </Button>
          </span>
        </Tooltip>
      </Box>
    </Box>
  );
};
