import * as React from "react";
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
  showAlert?: boolean;
};

export const StepAction = ({
  title,
  info,
  label,
  onAction,
  isValid,
  showAlert,
}: StepActionProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", my: 4 }}>
      <Typography sx={{ color: "primary.main", fontSize: "1.6rem" }}>
        {title}
      </Typography>

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
  );
};
