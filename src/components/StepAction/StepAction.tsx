import * as React from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

type StepActionProps = {
  info: string;
  label: string;
  onComplete: () => void;
  isValid: boolean;
};

export const StepAction = ({
  info,
  label,
  onComplete,
  isValid,
}: StepActionProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", my: 4 }}>
      {!isValid ? <Alert severity="info">{info}</Alert> : <div />}
      <Tooltip title={isValid ? null : info}>
        <span>
          <Button
            variant="outlined"
            onClick={() => onComplete()}
            endIcon={<ArrowRightIcon />}
            disabled={!isValid}
          >
            {label}
          </Button>
        </span>
      </Tooltip>
    </Box>
  );
};
