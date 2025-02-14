import * as React from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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
          sx={{ color: "primary.main", fontSize: "1.6rem" }}
          gutterBottom={true}
        >
          {title}
        </Typography>
        <Alert variant="standard" severity="info">
          {info}
        </Alert>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
